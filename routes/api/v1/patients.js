const express = require('express');
const router= express.Router();
const passport = require('passport');

const patientsApi = require('../../../controller/api/v1/patientsApi');

router.get('/', patientsApi.ping);

router.post('/register',passport.authenticate('jwt', { session: false }), patientsApi.register);

// put passport authentication !!!!
router.post('/:id/create_report', patientsApi.create_report)

router.get('/:id/all_reports', patientsApi.all_reports)

module.exports = router;