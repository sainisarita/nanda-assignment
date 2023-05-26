const mongoose = require('mongoose');
const resumeSchema = new mongoose.Schema({
    resumeUrl: String
  });

const Resume = mongoose.model('Resume', resumeSchema);
