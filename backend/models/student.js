const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    company: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    linkedInProfile: {
      type: String,
    },
    areasOfExpertise: {
      type: [String],
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    availability: {
      type: String,
    },
    resumeURL: {
      type: String,
    },
    createdBy: String,
    updatedBy: String,
  },
  { timestamps: true } // Add timestamps option here
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
