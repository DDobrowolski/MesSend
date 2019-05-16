const express = require('express');
const router = express.Router();

router.use('/users', require('./userRoutes'));
router.use('/messages', require('./messageRoutes'));

module.exports = router;