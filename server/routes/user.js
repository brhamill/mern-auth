const express = require('express');
const router = express.Router();

// import controller
const { requireSignin, adminMiddleware } = require('../controllers/auth');
const { read, update } = require('../controllers/user');

router.get('/user/:id', requireSignin, read);
router.put('/user', requireSignin, update);
router.put('/admin', requireSignin, adminMiddleware, update);

module.exports = router;
