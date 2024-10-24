const PDFDocument = require('pdfkit');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Generate PDF Report
const generatePDFReport = (data, filePath) => {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(filePath));

    doc.fontSize(25).text('Campaign Report', { align: 'center' });
    data.forEach((item) => {
    doc.fontSize(12).text(`${item.name} - Leads: ${item.leads_count}, Budget: ${item.budget}`);
    });

    doc.end();
};

// Generate CSV Report
const generateCSVReport = async (data, filePath) => {
    const csvWriter = createCsvWriter({
    path: filePath,
    header: [
        { id: 'name', title: 'Campaign Name' },
        { id: 'leads_count', title: 'Leads Count' },
        { id: 'budget', title: 'Budget' }
    ]
    });

    await csvWriter.writeRecords(data);
};

module.exports = { generatePDFReport, generateCSVReport };
