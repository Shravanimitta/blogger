var mongoose=require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema=mongoose.Schema;

autoIncrement.initialize(mongoose);

var postSchema=new Schema({
    title:'String',
    permalink:'String',
    content:'String',
    tags:'String',
    keywords:'String',
	author:{type:String,default:'Shravani'},
	datePublished: { type: Date, default: Date.now },
	comments:[{
		content:'String',
		author:'String',
		datePublished:{ type: Date, default: Date.now }
	}]
});

postSchema.plugin(autoIncrement.plugin, {model:'Post',startAt:1});

module.exports=mongoose.model('Post',postSchema);