'use strict';
const router = require('express').Router();
const mesSend = require('../../controllers/messageController');

router.route('/')
  .get(mesSend.get_all_messages)
  .post(mesSend.create_message);


router.route('/:messageId')
  .get(mesSend.get_one_message)
  .put(mesSend.update_message)
  .delete(mesSend.delete_message);

router.route('/:messageId/replies')
  .post(mesSend.add_reply);

router.route('/author/:authorId')
  .get(mesSend.get_author_messages);

module.exports = router;