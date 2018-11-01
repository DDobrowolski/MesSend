'use strict';
module.exports = function (app) {
  var mesSend = require('../controllers/messageController');
  var mesSendUsers = require('../controllers/userController');

  app.route('/messages')
    .get(mesSend.get_all_messages)
    .post(mesSend.create_message);


  app.route('/messages/:messageId')
    .get(mesSend.get_one_message)
    .put(mesSend.update_message)
    .delete(mesSend.delete_message);

    app.route('/users/:userId/messages')
    .get(mesSendUsers.get_all_messages)
};