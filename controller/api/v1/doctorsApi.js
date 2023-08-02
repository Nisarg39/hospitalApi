const Doctors = require('../../../model/doctors');
const jwt = require('jsonwebtoken');

module.exports.ping = function(req,res){
    res.json({
        message: "doctorsApi"
    })
}

module.exports.register = async function(req, res){
    // console.log(req.body)

    const findDoctor= await Doctors.findOne({username: req.body.username});
    if(findDoctor){
        res.status(422).json({
            message: "User already Exists"
        })
    }

    const addDoc= await Doctors.create({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    })

    if(addDoc){
    return res.status(200).json({
        message: "registered"
    });
    }else{
        return res.status(404).json({
            message: addDoc
        });
    }
}

module.exports.login = async function(req,res){
    const doctor= await Doctors.findOne({username: req.body.username})
    if(!doctor || doctor.password != req.body.password){
        return res.status(422).json({
            success: false,
            message: "invalid username or password"
        })
    }

    return res.status(200).json({
        _id: doctor._id,
        success: true,
        message: "Sign in successfully, here is your token",
        data: {
            token: jwt.sign(doctor.toJSON(), 'secret', {expiresIn: '1d'})
        }
    })
}