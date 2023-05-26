const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
require('dotenv').config()
const { dbConnect } = require('./utils/database');
const studentRoutes = require('./routes/student')
const resumeRoute = require('./routes/resume')

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure Cloudinary
cloudinary.config({ 
  cloud_name: 'dbiuhlf0j', 
  api_key: '731949325543545', 
  api_secret: 'KYhd26vO8mXoSWxV3QG5imMuvyI' 
});

// Set up Multer storage
const storage = multer.diskStorage({});

// Create Multer upload instance
const upload = multer({ storage });

app.use(studentRoutes)
app.use(resumeRoute)

dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is started at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });
