'use strict';
const router = require('express').Router();

const userController = require('../../controllers/userController');

router.route('/')
  .get(userController.get_all_users)
  .post(userController.create_user);


router.route('/:userId')
  .get(userController.get_one_user)
  .put(userController.update_user)
  .delete(userController.delete_user);

router.route('/:userId/messages')
  .get(userController.get_user_messages);

module.exports = router;