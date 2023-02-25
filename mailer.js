const nodemailer = require('nodemailer')

async function mailer(to, subject, text, html="") {

    const transporter = nodemailer.createTransport(
        {
            host: 'smtp.mail.ru',
            secure: true,
            port: 465,
            auth: {
                user: process.env.MAIL,
                pass: process.env.PASS
            },
            tls: {
                rejectUnauthorized: false
            },
            debug: true
        },
        {
            from: process.env.MAIL,
        }
    )

    const mailOptions = {
        to: to,
        subject: subject,
        text: text,
        html: html
    }

    await transporter.verify(function (error, success) {
        if (error) {
            console.log('error::', error);
        } else {
            console.log('Server is ready to take our messages', success);
        }
    })

    await transporter.sendMail(mailOptions, (err, info) => {
        console.log(err, info);
    })
}

module.exports = mailer