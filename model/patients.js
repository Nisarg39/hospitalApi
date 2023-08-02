const Mongoose = require('mongoose')

const patientsSchema = new Mongoose.Schema({
    phone_no:{
        type: String,
        required: true,
        minlength: 4,
        maxlength: 16
    },
    patient_name: {
        type: String,
        required: true
    },
    reports: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "Reports",
    }
},{
    timestamps: true
})

const Patients = Mongoose.model('Patients', patientsSchema);

module.exports=Patients;