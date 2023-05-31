const express = require('express');
require('dotenv').config()
const { dbConnect } = require('./utils/database');
const studentRoutes = require('./routes/student')
const cors=require('cors')
const path = require('path')

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(studentRoutes)

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'frontend', 'public', 'index.html'));
// });

dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is started at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });
