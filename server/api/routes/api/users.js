'use strict';
const router = require('express').Router();
const auth = require('../auth');

const user_controller = require('../../controllers/userController');

router.route('/')
  .get(user_controller.get_all_users)
  .post(user_controller.create_user);


router.route('/:userId')
  .get(user_controller.get_one_user)
  .put(user_controller.update_user)
  .delete(user_controller.delete_user);

router.route('/:userId/messages')
  .get(user_controller.get_user_messages);

router.route('/sign_in')
  .post(auth.optional, user_controller.sign_in(req, res, next));

router.route('/current')
  .get(auth.required, user_controller.get_current(req, res, next));

module.exports = router;