const Review = require('../../../../employee_review/models/review');
const Patients = require('../../../model/patients');
const Reports = require('../../../model/reports');

module.exports.ping = function(req,res){
    res.json({
        message: "patientsApi"
    })
}

module.exports.register = async function(req,res){
    // find if patient exists
    const patient = await Patients.findOne({phone_no: req.body.phone_no})
    if(patient){
        return res.status(200).json({
            success: true,
            message: "Patient Already exists",
            patient: patient
        })
    }else{
        const newPatient= await Patients.create({
            phone_no: req.body.phone_no,
            patient_name: req.body.patient_name
        })
        if(newPatient){
            // console.log(newPatient)
            return res.status(200).json({
                success: true,
                message: "Patient Created",
                patient: newPatient
            })
        }
    }
}

module.exports.create_report = async function(req,res){
    const d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    var year = d.getFullYear();

    const report = await Reports.create({
        patient: req.params.id,
        doctor: req.body.doctor_id,
        status: req.body.status ,
        date: {
            day: day,
            month: month,
            year: year
        }
    });
    
    if(report){
        return res.status(200).json({
            success: true,
            report: report
        })
    }else{
        return res.status(404).json({
            success: false,
            message: "report not created"
        })
    }
}

module.exports.all_reports = async function(req,res){
    const reports = await Reports.find({patient: req.params.id})
    if(!reports){
       return res.status(404).json({
        success: false,
        message: 'No records found'
       })
    }else{
        return res.status(200).json({
            success: true,
            message: 'reports from oldest to latest',
            reports: reports
           })
    }
}