/**
 * Created by Sandeep on 06/07/14.user model which contains the details for a user member.
 */

var mongoose=require('mongoose');
var bcrypt=require('bcrypt-nodejs');
var Schema=mongoose.Schema;

var userSchema=new Schema({
    username:'String',
    password:'String',
    name:'String'
});


userSchema.methods.validatePassword=function(password){
    return bcrypt.compareSync(password, this.password);
}

userSchema.statics.findByUsername=function(username,callback){
    this.findOne({username:username}).select('-password').exec(callback);
}


module.exports=mongoose.model('user',userSchema);

