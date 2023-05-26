const express = require('express');
const Student = require('../models/resume');

exports.postResume = async(req,res,next)=>{
    try {
        // Upload file to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        
        // Create a new resume document in the database
        const newResume = new Resume({ resumeUrl: result.secure_url });
        await newResume.save();
        
        res.json({ url: result.secure_url });
      } catch (error) {
        console.log('Error uploading resume:', error);
        res.status(500).json({ error: 'Failed to upload resume' });
      }
}

exports.getPage = async(req,res,next)=>{
    res.sendFile(__dirname + '/index.html');
}