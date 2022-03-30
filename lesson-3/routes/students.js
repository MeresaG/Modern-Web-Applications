const express = require('express');
const addController = require('../controllers/addController');
const studentController = require('../controllers/studentController');

const router = express.Router();



router.route('/students')
    .get(studentController.getAll);

router.route('/students/:studentIndex')
    .get(studentController.getOne);

module.exports = router;