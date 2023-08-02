const passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const Doctors = require('../model/doctors');

let opts={
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'secret'
}

passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    const doctor = await Doctors.findById(jwt_payload._id)
        if(!doctor){
            console.log('error in finding the doctor from JWt')
            return
        }

        if(doctor){
            return done(null, doctor);
        }else{
            return done(null, false);
        }
    
}));

module.exports = passport;