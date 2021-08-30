const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'waine.bryan@gmail.com',
        subject: 'Thanks for signing up!',
        html: `<p>Hi ${name}!</p><p>Welcome to the Task Manager App. I hope you find the application very useful in managing your daily tasks. Let me know how you get along with it by replying this email.</p><p>Bryan Waine.</p>`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'waine.bryan@gmail.com',
        subject: 'Sorry to see you go!',
        html: `<p>Goodbye ${name}!</p><p> Please let me know if there is anything I could have done better with the app by replying this email. Hope to see you again sometime.</p><p>Bryan Waine.</p>`
    })
} 

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}