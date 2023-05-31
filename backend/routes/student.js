const express = require('express');
const studentController = require('../controllers/student')

const router = express.Router()

router.post('/endpoint',studentController.postCreateStudent)
router.get('/endpoint',studentController.getStudents);
router.get('/:id',studentController.getStudent);
router.put('/:id',studentController.updateStudent);
router.delete('/:id',studentController.deleteStudent);
module.exports = router;