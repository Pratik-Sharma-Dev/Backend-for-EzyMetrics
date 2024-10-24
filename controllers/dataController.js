const Lead = require('../models/leadModel');
const Campaign = require('../models/campaignModel');
const { getLeads, getCampaigns } = require('../services/dummyDataService');

// Fetch data from dummy APIs and store in MongoDB
const fetchDataAndStore = async (req, res) => {
try {
    const leads = await getLeads();
    const campaigns = await getCampaigns();

    // Store leads
    await Lead.insertMany(leads);
    // Store campaigns
    await Campaign.insertMany(campaigns);

    res.status(200).json({ message: 'Data fetched and stored successfully' });
} catch (error) {
    res.status(500).json({ error: error.message });
}
};

module.exports = { fetchDataAndStore };
