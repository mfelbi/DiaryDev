const express = require('express');
const { registerUser, loginUser, getMe, deleteUser } = require('../controllers/userController');
const { auth, superuser } = require('../middleware/auth');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', auth, getMe);
router.delete('/:id', auth, superuser, deleteUser);

module.exports = router;
