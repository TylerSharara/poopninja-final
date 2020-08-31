const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const alert = require('alert');
const app = express();
require('dotenv').config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
        </ul>`

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'poopninjallc@gmail.com',
            replyto: 'test@testaccount.com',
            subject: req.body.name,
            text: 'Testing',
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, data) => {
            if(err){
                alert('Oh no! Something went wrong. Try again later or contact us via email: poopninjaLLC@gmail.com', 'cscript');
                return console.log(err);
            }

            alert('Awesome! We will contact you ASAP!', 'cscript');
            console.log('Message sent: %s', info.message);
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
        })
    })
});

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}