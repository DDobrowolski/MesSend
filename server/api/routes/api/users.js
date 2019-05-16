'use strict';
const router = require('express').Router();
const auth = require('../auth');

const users_controller = require('../../controllers/users_controller');

router.route('/')
  .get(users_controller.get_all_users)
  .post(users_controller.create_user);


router.route('/:userId')
  .get(users_controller.get_one_user)
  .put(users_controller.update_user)
  .delete(users_controller.delete_user);

router.route('/:userId/messages')
  .get(users_controller.get_user_messages);

router.route('/sign_in')
  .post(auth.optional, users_controller.sign_in);

router.route('/current')
  .get(auth.required, users_controller.get_current);

module.exports = router;