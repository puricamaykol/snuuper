let services = require('../services');
let Users = require('../models/Users');
/**
 * CallBack para la ruta del login
 * @param  {Object} req Objeto request de Express
 * @param  {Object} res Objeto response de Express
 * @return      Respuesta HTTP
 */
exports.login = function(req, res) {
	let params = req.body;
	console.log(params);
	Users.findOne({
	  where: {Username: params.username, password: params.password}
	}).then(user=>{
	        if(!user){
	        	return res
	        	.status(404)
	            .json({success:false, msg:"User not found"});
	        }
	        return res
	        	.status(200)
	            .json({success:true, user:user, token: services.createToken(user)});
	    }).catch(err=>{return res.status(404).json({success:false, msg: 'User not found'})});
};