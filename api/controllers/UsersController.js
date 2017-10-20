'use strict';

let Users = require('../models/Users');

module.exports = {
  /**
   * Devuelve un arreglo con todos los usuarios
   * @param  {Object} req Objeto request de Express
   * @param  {Object} res Objeto response de Express
   * @return      Respuesta HTTP
   */
  getAll: (req, res) => {
     Users.findAll({ raw: true }).then(users => {
         res.json(users);
    }).catch(err=>res.status(500).json({error: err}));
  },
  /**
   * Busca y devuelce un usuario por su id
   * @param  {Object} req Objeto request de Express
   * @param  {Object} res Objeto response de Express
   * @return      Respuesta HTTP
   */
  findOne: (req, res) => {
     let userId = req.params.userId;
      Users.findById(userId).then(user => {
        if(user){
          res.json(user);
        }else{
          res.status(404).json({error: "The resource could not be found"})
        }
        
    }).catch(err=>res.status(500).json({error: err}));
  },
  /**
   * Crea un usuario y devuelve los datos
   * @param  {Object} req Objeto request de Express
   * @param  {Object} res Objeto response de Express
   * @return      Respuesta HTTP
   */
  create: (req, res) => {
       let params = req.body;
       Users.findOne({
          where: {email:params.email}
        }).then(user=>{
          if(!user){
             Users.create(params)
              .then(user=>res.json(user))
              .catch(err=>(res.status(500).json({error: err})));
            }else{
              res.status(500).json({error: "Email already exists"})
            }
        });
      
  },
  /**
   * Actualiza un usuario en función del id y de las propiedades pasadas 
   * Soporta UPDATE y PATCH
   * @param  {Object} req Objeto request de Express
   * @param  {Object} res Objeto response de Express
   * @return      Respuesta HTTP
   */
  update: (req, res) => {
     Users.update(req.body, {
      where: { id: req.params.userId },
      returning: true,
      plain: true
    })
    .then( result=>{
        if(result[1] > 0){
          res.json(req.body)
          }else{
            res.status(500).json({msg: "No user updated"})
          }
      })
    .catch(err=>({error: err}));
  },
  /**
   * Elimina un usuario
   * @param  {Object} req Objeto request de Express
   * @param  {Object} res Objeto response de Express
   * @return      Respuesta HTTP
   */
  delete: (req, res) => {
     let userId = req.params.userId;
     if(!userId){
      res.status(500).json({err: "The resource could not be found"})
     }
      Users.destroy({
        where: {
            id: userId
        },
        force: true 
        }).then(user => {
                if(user){
                  res.json({msg: "User deleted"});
                }else{
                  res.status(404).json({error: "The resource could not be found"})
                }
            }).catch(err=>res.status(500).json({error: err}));
  },
  
 
}
