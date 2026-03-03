const Complaint = require('../models/Complaint');
const asyncHandler = require('express-async-handler');
const upload = require('../config/multer');

// @desc    Create a new complaint
// @route   POST /api/complaints
// @access  Private
const createComplaint = asyncHandler(async (req, res) => {
  const { equipmentId, equipmentName, type, description } = req.body;
  
  // Get user from authenticated request
  const user = req.user.id;

  let imageUrl = '';
  if (req.file) {
    imageUrl = req.file.path; // For local storage
    // For cloud storage (e.g., Cloudinary) you would use req.file.url
  }

  const complaint = await Complaint.create({
    user,
    equipmentId,
    equipmentName,
    type,
    description,
    imageUrl,
    status: 'pending'
  });

  res.status(201).json({
    success: true,
    data: complaint
  });
});

// @desc    Get all complaints for a user
// @route   GET /api/complaints
// @access  Private
const getUserComplaints = asyncHandler(async (req, res) => {
  const complaints = await Complaint.find({ user: req.user.id })
    .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: complaints.length,
    data: complaints
  });
});

// @desc    Update complaint status
// @route   PUT /api/complaints/:id
// @access  Private/Admin
const updateComplaintStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  const complaint = await Complaint.findById(req.params.id);

  if (!complaint) {
    return res.status(404).json({
      success: false,
      error: 'Complaint not found'
    });
  }

  // Only allow status updates
  complaint.status = status;
  if (status === 'resolved') {
    complaint.resolvedAt = Date.now();
  }

  await complaint.save();

  res.status(200).json({
    success: true,
    data: complaint
  });
});

module.exports = {
  createComplaint,
  getUserComplaints,
  updateComplaintStatus,
  upload // Export the multer upload middleware
};