'use strict';
module.exports = function (app) {
  var mesSend = require('../controllers/userController');

  app.route('/users')
    .get(mesSend.get_all_users)
    .post(mesSend.create_user);


  app.route('/users/:userId')
    .get(mesSend.get_one_user)
    .put(mesSend.update_user)
    .delete(mesSend.delete_user);

  app.route('/users/:userId/messages')
    .get(mesSend.get_user_messages);
};