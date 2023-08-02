const { json } = require("stream/consumers")
const Reports = require("../../../model/reports")

module.exports.ping = function(req,res){
    res.json({
        message: "reportsApi"
    })
}

module.exports.reports_status = async function(req,res){
    // console.log(req.params.status)
    const reports = await Reports.find({status: req.params.status}).populate('patient').populate('doctor')

    var ReportsFilter = [{
        phone_no: String,
        patient_name: String,
        doctor: String,
        status: String,
        day: String,
        month: String,
        year: String
    }]
    reports.map(rep => {
        ReportsFilter.push({
            phone_no: rep.patient.phone_no,
            patient_name: rep.patient.patient_name,
            status: rep.status,
            doctor: rep.doctor.name,
            day: rep.date[0].day,
            month: rep.date[0].month,
            year: rep.date[0].year
        })
    })

    console.log(ReportsFilter);
    if(!reports){
        return res.status(404).json({
            success: false,
            message: 'No reports found'
        })
    }else{
        return res.status(200).json({
            success: true,
            message: 'reports found',
            reports: ReportsFilter
        })
    }
}