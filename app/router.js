'use strict';
module.exports = app => {
  app.get('/', 'home');
  app.get('/get.html',app.controller.get);
  app.get('/home.html',app.controller.home);
  app.get('/find.html',app.controller.find);
  app.get('/loginAction',app.controller.loginAction);
  app.get('/createUser',app.controller.createUserAction);
  app.get('*', app.controller.page404);
};
