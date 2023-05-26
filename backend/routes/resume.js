const express = require('express');
const resumeController = require('../controllers/resume')

const router = express.Router()

router.post('/upload', upload.single('resume'),resumeController.postResume)
router.get('/resume',resumeController.getPage)


module.exports = router;

