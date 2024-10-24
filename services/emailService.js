const nodemailer = require('nodemailer');

// Email Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendAlertEmail = async (subject, message) => {
        await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'alert@example.com',
        subject: subject,
        text: message
    });
};

module.exports = { sendAlertEmail };
