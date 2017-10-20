'use strict';
module.exports = function(app) {
  let UsersController = require('../controllers/UsersController');
  
  app.get('/api/users',UsersController.getAll);

  app.get('/api/users/:userId',UsersController.findOne);

  app.post('/api/users',UsersController.create);

  app.put('/api/users/:userId',UsersController.update);

  app.patch('/api/users/:userId',UsersController.update);

  app.delete('/api/users/:userId',UsersController.delete);

  

};