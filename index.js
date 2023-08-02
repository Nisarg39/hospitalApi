const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');      // for getting data from postman . req.body will show notthing if we dont use body-parser
const passport = require('passport');
const pasportJWT = require('./config/passport-jwt-strategy');


app.use(bodyParser.json()); //for getting raw json file from data passed from postman

app.use(bodyParser.urlencoded({ extended: true }));     // for getting data from xxx. url encoded data

const db = require('./config/mongoose');       // to start mongoose connection configured in mongoose.js

app.use('/', require('./routes/index'))



app.listen(port, (err) => {
    if(err){
        console.log(`error running on port : ${port}`)
    }else{
        console.log(`Server running on port : ${port}`)
    }
})