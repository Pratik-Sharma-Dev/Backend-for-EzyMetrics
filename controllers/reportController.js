const Campaign = require('../models/campaignModel');
const { generatePDFReport, generateCSVReport } = require('../utils/reportGenerator');
const path = require('path');

const generateReport = async (req, res) => {
try {
    const campaigns = await Campaign.find(); // Fetch campaign data
    const format = req.query.format || 'pdf';

    const filePath = path.join(__dirname, `../../reports/report.${format}`);
    if (format === 'pdf') {
        generatePDFReport(campaigns, filePath);
    } else {
        await generateCSVReport(campaigns, filePath);
    }

    res.download(filePath);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

module.exports = { generateReport };
