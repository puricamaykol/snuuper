let jwt = require('jwt-simple');
let moment = require('moment');
let config = require('./config');
/**
 * Servicio que crea un JW Token a partir del id dde un usuario
 * @param  {Object} user Usuario
 * @return {String}      Token
 */
exports.createToken = function(user) {
if(!user) {
	return new Error("El usuario es requerido");
}
  let payload = {
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(7, "days").unix(),
  };
  return jwt.encode(payload, config.secret);
};
/**
 * Middleware que valida el Token enviado en función de su tiempo de experación y del secret configurado
 * @param  {Object} req Objeto request de Express
 * @param  {Object} res Objeto response de Express
 * @param  {Function} next Callback 
 * @return       Respuesta http
 */
exports.validateToken = function(req, res, next) {
	 try{
	  if(!req.headers.authorization) {
	    return res
	      .status(403)
	      .json({msg: "Cabecera de authorization no encontrada"});
	  }
	  let token = req.headers.authorization.split(" ")[1];
	  let payload = jwt.decode(token, config.secret);
	  
	  if(payload.exp <= moment().unix()) {
	     return res
	     	.status(401)
	        .json({msg: "El token ha expirado"});
	  }
	  req.user = payload.sub;
	  next();
	}catch(err){
		return res
	     	.status(500)
	        .json({msg: "Error: "+err});
	}
}