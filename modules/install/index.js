/**
 * Created by Sandeep on 13/07/14.
 */

var mongoose = require('mongoose')
   ,User    = require('../../models/user')
   ,bcrypt   = require('bcrypt-nodejs')


module.exports.generateAdmin=function(){
    User.findByUsername('admin',function(err,user){
       if(!user){
           var user=new User();
           user.name="Admin";
           user.username="admin";
           user.password=bcrypt.hashSync('admin');
           user.save();
       }
    });
}