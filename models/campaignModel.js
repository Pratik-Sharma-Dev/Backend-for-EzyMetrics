const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    name: String,
    budget: Number,
    leads_count: Number,
    created_at: Date
});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
