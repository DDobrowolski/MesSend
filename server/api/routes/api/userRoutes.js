'use strict';
const router = require('express').Router();

var mesSend = require('../../controllers/userController');

router.route('/')
  .get(mesSend.get_all_users)
  .post(mesSend.create_user);


router.route('/:userId')
  .get(mesSend.get_one_user)
  .put(mesSend.update_user)
  .delete(mesSend.delete_user);

router.route('/:userId/messages')
  .get(mesSend.get_user_messages);

module.exports = router;