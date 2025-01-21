import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = express.Router();

// Link route / to AppController.getHomepage
router.get('/', AppController.getHomepage);

// Link routes /students and /students/:major to StudentsController
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;