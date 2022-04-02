const express = require('express');
const studentController = require('../controllers/studentController');
const courseController = require('../controllers/courseController');
const router = express.Router();



router.route('/students')
    .get(studentController.getAll);

router.route('/students/:studentId')
    .get(studentController.getOne);

router.route('/students/:studentId/courses')
.get(courseController.getAll);

router.route('/students/:studentId/courses/:courseId')
.get(courseController.getOne);

module.exports = router;