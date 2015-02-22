/**
 * Created by Sandeep on 20/08/14.
 */
var express=require('express');
var passport=require('passport');

//configure routes

var router=express.Router();

router.route('/login').post(passport.authenticate('local'),function(req, res) {
    res.json(req.user);
});

/*Logout */
router.post('/logout', function(req, res){
    req.logout();
    res.send('200','Successfully Logged Out');
});


module.exports=router;