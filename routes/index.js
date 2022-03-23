const express = require('express');
const router = express.Router();
const {ensureAuth, ensureGuest} = require('../middleware/auth');
const Documentary = require('../models/Documentary');

/**
 * @desc Login/Landing page
 * @route GET /
 */

router.get('/', ensureGuest, (req, res) => {
    res.render('login', {layout : 'login'});
})

/**
 * @desc Dashboard
 * @route GET /dashboard
 */

router.get('/dashboard', ensureAuth, async (req, res) => {
    try {
        
        const documentaries = await Documentary.find({user : req.user.id}).lean()
        res.render('dashboard', {
            name : req.user.firstName,
            documentaries: documentaries
        });

    } catch (error) {
        console.error(error)
        res.render('error/500')
    }
    
})

module.exports = router;