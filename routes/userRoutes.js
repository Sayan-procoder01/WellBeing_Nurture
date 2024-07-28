const express = require('express');
const { registerUser, loginUser, updateUserDetails } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/update', updateUserDetails);

module.exports = router;
