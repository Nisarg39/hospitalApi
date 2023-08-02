const express = require('express');
const router= express.Router();

const reportsApi = require('../../../controller/api/v1/reportsApi');

router.get('/', reportsApi.ping);

router.get('/:status', reportsApi.reports_status);

module.exports = router;