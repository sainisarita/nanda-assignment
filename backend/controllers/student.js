const express = require('express');
const Student = require('../models/student');

const router = express.Router();

// Create a new student registration
exports.postCreateStudent = async(req,res,next)=>{
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
      } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


// Read all student registrations
exports.getStudents= async(req,res,next)=>{
    try {
        const students = await Student.find();
        res.json(students);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}


// Read a specific student registration
exports.getStudent= async(req,res,next)=>{
    try {
        const student = await Student.findById(req.params.id);
        if (student) {
          res.json(student);
        } else {
          res.status(404).json({ error: 'Student not found' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

// Update a student registration
exports.updateStudent = async(req,res,next)=>{
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        });
        if (student) {
          res.json(student);
        } else {
          res.status(404).json({ error: 'Student not found' });
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}


// Delete a student registration
exports.deleteStudent = async(req,res,next)=>{
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (student) {
          res.sendStatus(204);
        } else {
          res.status(404).json({ error: 'Student not found' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}
router.delete('/:id', async (req, res) => {
  
});


