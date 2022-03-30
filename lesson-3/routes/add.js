const express = require('express');
const router = express.Router();
const addController = require('../controllers/addController');

router.route('/add/:numOne')
        .get(addController.sum);

module.exports = router