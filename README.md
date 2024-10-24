/*
EzyMetrics Backend - Data Integrations and Reporting
===================================================

Overview
--------
This is a backend project for EzyMetrics, designed to integrate with dummy CRM and marketing platforms, fetch lead and campaign data, and provide reporting features. It includes:
  - API service development for CRM/Marketing integration.
  - Data storage and processing using MongoDB.
  - ETL (Extract, Transform, Load) process to transform raw data into metrics.
  - Report generation (PDF/CSV).
  - Email alerts based on conditions.

Features
--------
1. API Service Development:
   - Integrates with dummy CRM and marketing platforms.
   - Simulates fetching lead and campaign data.
   
2. Data Storage and Processing:
   - MongoDB is used to store fetched data.
   - An ETL process transforms raw data into meaningful metrics.
   
3. Reporting and Alerts:
   - Provides an API endpoint for generating PDF/CSV reports.
   - Sends email alerts when certain conditions are met.

Technologies Used
-----------------
  - Node.js (v20.17.0 or higher)
  - Express.js for building REST APIs.
  - MongoDB and Mongoose for database management.
  - Nodemailer for sending email alerts.
  - PDFKit for generating PDF reports.
  - csv-writer for CSV reports.
  - dotenv for managing environment variables.

Installation and Setup
----------------------
### Prerequisites:
  - Node.js (v20.17.0+)
  - MongoDB (local or remote)
  - Git (optional, for cloning)

### Step 1: Clone the Repository
    git clone https://github.com/Pratik-Sharma-Dev/Backend-for-EzyMetrics.git
    cd EzyMetrics-Backend

### Step 2: Install Dependencies
    npm install

### Step 3: Set Up Environment Variables
Create a `.env` file in the project root and add the following:
    MONGO_URI=<your_mongo_db_uri>
    EMAIL_USER=<your_email_username>
    EMAIL_PASS=<your_email_password>

### Step 4: Start the Application
For development (with hot reload):
    npm run dev

For production:
    npm start

API Endpoints
-------------
1. Fetch Data from CRM/Marketing Platforms
   - **Endpoint**: `/api/fetch-data`
   - **Method**: GET
   - **Description**: Simulates fetching lead and campaign data from dummy platforms.
   
2. Generate Reports
   - **Endpoint**: `/api/reports`
   - **Method**: POST
   - **Body**:
     ```json
     {
       "format": "pdf" or "csv"
     }
     ```
   - **Response**: Returns the requested report in the specified format.
   
3. Email Alerts
   - Email notifications are triggered when certain conditions (e.g., lead threshold) are met.

File Structure
--------------
    .
    ├── controllers
    │   ├── dataController.js      # For fetching and processing data
    │   ├── reportController.js    # For report generation
    │   └── alertController.js     # Email alert logic
    ├── routes
    │   ├── apiRoutes.js           # API routes
    ├── models
    │   ├── Lead.js                # Lead model schema
    │   ├── Campaign.js            # Campaign model schema
    ├── .env                       # Environment variables (excluded in version control)
    ├── server.js                  # Main entry point for the app
    └── package.json               # Dependencies and scripts

Troubleshooting
---------------
1. **MODULE_NOT_FOUND**: Ensure all dependencies are installed with `npm install`.
2. **MongoDB Issues**: Verify `MONGO_URI` in the `.env` file and ensure MongoDB is running.
3. **Nodemon Crash**: Restart using `npm run dev` after fixing any errors.

License
-------
This project is licensed under the MIT License.
*/
