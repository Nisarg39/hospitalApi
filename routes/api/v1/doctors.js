const express = require('express');
const router= express.Router();

const doctorsApi = require('../../../controller/api/v1/doctorsApi')

router.get('/', doctorsApi.ping)

router.post('/register', doctorsApi.register)

router.post('/login', doctorsApi.login)

module.exports = router;