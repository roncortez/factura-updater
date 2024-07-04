const express = require('express');
const router = express.Router();
const { getData } = require('../controllers/dataController');

// Ruta para obtener datos con un número como parámetro
router.get('/:numero', getData);

module.exports = router;
