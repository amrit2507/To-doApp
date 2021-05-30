const Task = require('../models/task');
//print all tasks
module.exports.home = function (req, res) {
    Task.find({}, function (err, tasks) {
        if (err) {
            console.log('Error in fetching from db');
        }
        return res.render('home', {
            title: "My Contacts",
            task_list: tasks
        });
    })
}
//to add new task
module.exports.action = function (req, res) {
    console.log(req.body);
    Task.create({
        Description: req.body.Description,
        Category: req.body.Category,
        dueDate: req.body.dueDate
    }, function (err, newTask) {
        if (err) {
            console.log('Error in Creating a Task !');
            return;
        }
        console.log('*********', newTask);
        return res.redirect('back');
    });
}
//delete multiple tasks
module.exports.delete = function (req, res) {
    if (req.xhr) {
        const $in =req.query.Array.split(',');
        const x={
            _id:{
                $in
            }
        }
        console.log(x);
        Task.deleteMany(x,function(err){
            if(err)
            {
                console.log('Error while deleting from database');
                return;
            }
        });
    }
    return res.redirect('back');
}