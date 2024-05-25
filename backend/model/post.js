const mongoose = require('mongoose');
const schema = mongoose.Schema({
    title:String,
    des:String,
    stat:String,
})
const Todo = mongoose.model('todo',schema);
module.exports=Todo;
