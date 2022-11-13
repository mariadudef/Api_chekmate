const express = require('express');
const router = express.Router();

const ClienteController = require('./Controller/ClienteController');

router.get('/usuarios',ClienteController.showClients);
router.post('/usuario', ClienteController.insertUsario);

module.exports = router;