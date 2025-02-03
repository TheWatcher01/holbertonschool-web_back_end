/**
 * @file index.js
 * @author TheWatcher01
 * @date 03-02-2025
 * @description Route configuration for the Express application.
 */

const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

// Define application routes
router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
