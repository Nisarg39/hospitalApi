const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hospitalApi_db');
const db = mongoose.connection;
// error
db.on('error',console.error.bind(console,'error connecting to db'));
// up and running then message
db.once('open',function(){
    console.log('Succesfully connected to the database')
})