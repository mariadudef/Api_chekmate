const express = require('express');
const router = express.Router();

const ClienteController = require('./Controller/ClienteController');

router.get('/usuario',ClienteController.buscarTodos);

module.exports = router;