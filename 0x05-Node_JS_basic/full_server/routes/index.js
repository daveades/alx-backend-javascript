const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

router.get('/', AppController.home);
router.get('/students', StudentsController.getAllStudents);
router.post('/students', StudentsController.addStudent);

module.exports = router;