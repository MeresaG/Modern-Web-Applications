const express = require('express');
const router = express.Router();
const {ensureAuth} = require('../middleware/auth');
const Documentary = require('../models/Documentary');

/**
 * @desc show add page
 * @route GET /documentaries/add
 */

router.get('/add', ensureAuth, (req, res) => {
    res.render('documentaries/add');
})


/**
 * @desc process the add form
 * @route GET /documentaries
 */

 router.post('/', ensureAuth, async (req, res) => {
    try {
        req.body.user = req.user.id;
        await Documentary.create(req.body);
        res.redirect('/dashboard');
        
    } catch (error) {
        console.log(error);
        req.render('error/500');
    }
})


module.exports = router;