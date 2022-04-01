const express = require('express');
const router = express.Router();

const gameController = require('../controllers/gameController');

router.route('/games')
        .get(gameController.getAll)
        .post(gameController.addOne);

router.route('/games/:gameId')
        .get(gameController.getOne)
        .delete(gameController.deleteOne);

module.exports = router;