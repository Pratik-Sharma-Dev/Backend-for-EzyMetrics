const axios = require('axios');

// Simulating API calls
const getLeads = async () => {
  // Dummy data for leads
    return [
        { id: 1, name: 'John Doe', email: 'john@example.com', campaign_id: 101, status: 'new' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', campaign_id: 102, status: 'contacted' }
    ];
};

const getCampaigns = async () => {
  // Dummy data for campaigns
    return [
        { id: 101, name: 'Campaign A', budget: 5000, leads_count: 100, created_at: new Date() },
        { id: 102, name: 'Campaign B', budget: 3000, leads_count: 80, created_at: new Date() }
    ];
};

module.exports = { getLeads, getCampaigns };
