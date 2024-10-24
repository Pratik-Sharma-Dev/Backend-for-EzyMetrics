const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    name: String,
    email: String,
    campaign_id: Number,
    status: String
});

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;
