'use strict';
module.exports = function(app) {
  let UsersController = require('../controllers/UsersController');
  let AuthController = require('../controllers/AuthController');
  let services = require('../services');

  app.get('/api/users',UsersController.getAll);

  app.get('/api/users/:userId',UsersController.findOne);

  app.post('/api/users',UsersController.create);

  app.put('/api/users/:userId',UsersController.update);

  app.patch('/api/users/:userId',UsersController.update);

  app.delete('/api/users/:userId',UsersController.delete);

  //recibe los parametros username y password
  app.post('/api/login',AuthController.login);

  //rutas privadas
  //
  //router.get('/private',middleware.ensureAuthenticated, function(req, res) {...} );
  //El token se debe enviar en la cabecera de Autorización de esta forma:
  //Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlhdCI6MTUwODUyMTQwOSwiZXhwIjoxNTA5MTI2MjA5fQ.QO2fdHHOQWFAYKJWNm9qCsTecohG6Mz6B9uxW40obEU
    app.get('/private/users',services.validateToken,UsersController.getAll);
};