'use strict';

let Users = require('../models/Users');

module.exports = {
  
  getAll: (req, res) => {
     Users.findAll({ raw: true }).then(users => {
         res.json(users);
    }).catch(err=>res.status(500).json({error: err}));
  },
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
  create: (req, res) => {
       let params = req.body;
       Users.create(params)
              .then(user=>res.json(user))
              .catch(err=>({error: err}));
  },
  update: (req, res) => {
     Users.update(req.body, {
  where: { id: req.params.userId },
  returning: true,
  plain: true
})
.then( result=>res.json(result))
.catch(err=>({error: err}));
  },
  delete: (req, res) => {
     let userId = req.params.userId;
      Users.destroy({
    where: {
        id: userId
    },
    force: true 
}).then(user => {
        if(user){
          res.json(user);
        }else{
          res.status(404).json({error: "The resource could not be found"})
        }
        
    }).catch(err=>res.status(500).json({error: err}));
  },
  
 
}
