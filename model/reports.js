const Mongoose = require('mongoose');

const reportsSchema = new Mongoose.Schema({
    patient: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Patients',
        required: true
    },
    doctor: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Doctors',
        required: true
    },
    status:{
        type: String,
        enums: ['Negative','Travelled-Quarantine','Symptoms-Quarantine','Positive-Admit'],
        required: true
    },
    date: [{
            day:String,
            month: String,
            year: String,
    }]
},{
    timestamps: true
});

const Reports = Mongoose.model('Reports', reportsSchema)

module.exports = Reports