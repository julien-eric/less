const express = require('express');
const router = express.Router();
const passport = require("passport");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/* LOGIN POST*/
router.get('/login', function(req, res){
        res.render('login', { title: 'Express' });
    }
);

/* LOGIN POST*/
router.post('/login',
    passport.authenticate('local', { successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true,
        successFlash: 'Welcome!'})
);

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});



module.exports = router;
