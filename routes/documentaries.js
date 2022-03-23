const express = require('express');
const { status } = require('express/lib/response');
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
        res.render('error/500');
    }
})


/**
 * @desc show all documentaries
 * @route GET /documentaries
 */

 router.get('/', ensureAuth, async (req, res) => {
    try {
        const documentaries = await Documentary.find({status:'public'})
            .populate('user')
            .sort({createdAt: 'desc'}).lean()
        res.render('documentaries/index', {
            documentaries: documentaries,
        })
    } catch (error) {
        console.error(error)
        res.send('error/500')
    }
})

/**
 * @desc show single story
 * @route GET /documentaries/:id
 */

 router.get('/:id', ensureAuth, async (req, res) => {
    try {
        
        let documentary = await Documentary.findById(req.params.id)
                            .populate('user')
                            .lean()
        if(!documentary) {
            return res.render('error/404');
        }

        res.render('documentaries/show', {
            documentary : documentary
        })


    } catch (error) {
        console.error(error);
        return res.render('error/404')
    }
})

/**
 * @desc show edit page
 * @route GET /documentaries/edit/:id
 */

 router.get('/edit/:id', ensureAuth, async (req, res) => {
    
    try {
        const documentary = await Documentary.findOne({_id : req.params.id,}).lean()
        if(!documentary) {
            return res.render('error/404')
        }

        if(documentary.user != req.user.id) {
            res.redirect('/documentaries')
        }
        else {
            res.render('documentaries/edit', {
                documentary:documentary
            })
        }
    } catch (error) {
        console.log(error)
        res.render('error/500')
    }

})

/**
 * @desc update documentary
 * @route GET /documentaries/:id
 */

 router.put('/:id', ensureAuth, async (req, res) => {
    
    try {
        
        let documentary = await Documentary.findById(req.params.id).lean();
        if(!documentary) {
            res.render('error/404')
        }

        if(documentary.user != req.user.id) {
            res.redirect('/documentaries')
        }
        else {
            documentary = await Documentary.findByIdAndUpdate({_id : req.params.id}, req.body, {
                new: true,
                runValidators: true,
            })
            res.redirect('/dashboard')
        }

    } catch (error) {
        res.render('error/500')
    }


})

/**
 * @desc Delete Documentary
 * @route delete /documentaries/:id
 */

 router.delete('/:id', ensureAuth, async (req, res) => {
    try {
        await Documentary.remove({ _id : req.params.id })
        res.redirect('/dashboard')
    } catch (error) {
        console.error(error);
        return res.render('error/500')
    }
})


module.exports = router;