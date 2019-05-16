'use strict';
const router = require('express').Router();
const message_controller = require('../../controllers/messages_controller');

router.route('/')
  .get(message_controller.get_all_messages)
  .post(message_controller.create_message);


router.route('/:messageId')
  .get(message_controller.get_one_message)
  .put(message_controller.update_message)
  .delete(message_controller.delete_message);

router.route('/:messageId/replies')
  .post(message_controller.add_reply);

router.route('/author/:authorId')
  .get(message_controller.get_author_messages);

module.exports = router;