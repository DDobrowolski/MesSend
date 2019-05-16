'use strict';
const router = require('express').Router();
const messageController = require('../../controllers/messageController');

router.route('/')
  .get(messageController.get_all_messages)
  .post(messageController.create_message);


router.route('/:messageId')
  .get(messageController.get_one_message)
  .put(messageController.update_message)
  .delete(messageController.delete_message);

router.route('/:messageId/replies')
  .post(messageController.add_reply);

router.route('/author/:authorId')
  .get(messageController.get_author_messages);

module.exports = router;