const mongoose=require('mongoose');

const taskSchema = new mongoose.Schema({
    Description :{
        type : String,
        required :true
    },
    Category: {
        type : String,
        required :true
    },
    dueDate: {
        type : Date,
        required:true
    }
});
//Name of collection
const Task = mongoose.model('Task',taskSchema);
module.exports = Task;