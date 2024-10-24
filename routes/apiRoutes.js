const express = require('express');
const { fetchDataAndStore } = require('../controllers/dataController');
const { generateReport } = require('../controllers/reportController');

const router = express.Router();

router.get('/fetch-data', fetchDataAndStore);
router.get('/report', generateReport);

module.exports = router;
