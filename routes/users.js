const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { registerValidator, loginValidator, updateUserValidator } = require('../middleware/validators');
const {
  register,
  login,
  getMe,
  updateMe,
  deleteMe
} = require('../controllers/userController');

// Public routes
router.post('/register', registerValidator, register);
router.post('/login', loginValidator, login);

// Protected routes
router.get('/me', protect, getMe);
router.put('/me', protect, updateUserValidator, updateMe);
router.delete('/me', protect, deleteMe);

module.exports = router; 