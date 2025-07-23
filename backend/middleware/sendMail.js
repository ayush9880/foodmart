require("dotenv").config();
const nodemailer = require("nodemailer");
const trasport = nodemailer.createTransport({
    host: "SMTP",
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
})

const sendMail = async (email, message) => {
    await trasport.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "test",
        html: ` <h1>${message}</h1>`
    })
}

module.exports = sendMail;