const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/to_do_app_db');
const db =mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

db.once('open',function(){
    console.log('Connected to DB :: MongooseDb');
});
module.exports =db;