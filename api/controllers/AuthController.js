let services = require('../services');
let Users = require('../models/Users');

exports.login = function(req, res) {
	let params = req.body;
	console.log(params);
	Users.findOne({
	  where: {Username: params.username, password: params.password}
	}).then(user=>{
	        if(!user){
	        	return res
	        	.status(404)
	            .json({success:false, msg:"usuario no encontrado"});
	        }
	        return res
	        	.status(200)
	            .json({success:true, user:user, token: services.createToken(user)});
	    }).catch(err=>{return res.status(404).json({msg: 'No se encontró el usuario.'})});
};