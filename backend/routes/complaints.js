const express = require('express');
const router = express.Router();
const { 
  createComplaint, 
  getUserComplaints, 
  updateComplaintStatus,
  upload 
} = require('../controllers/complaintController');
const { protect, admin } = require('../middleware/auth');

// User routes
router.route('/')
  .post(protect, upload.single('file'), createComplaint)
  .get(protect, getUserComplaints);

// Admin route
router.route('/:id')
  .put(protect, admin, updateComplaintStatus);

module.exports = router;