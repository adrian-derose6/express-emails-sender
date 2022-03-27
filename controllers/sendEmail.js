const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const sendEmailEthereal = async (req, res) => {
	let testAccount = await nodemailer.createTestAccount();

	const transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		auth: {
			user: 'amara.jacobs3@ethereal.email',
			pass: 'yP8y2dJGqXQugjvuMJ',
		},
	});

	let info = await transporter.sendMail({
		from: '"Adrian DeRose" <adrian6@gmail.com>',
		to: 'bar@example.com',
		subject: 'How are you?',
		html: '<h2>Sending emails with Node.js</h2>',
	});

	res.json(info);
};

const sendEmail = async (req, res) => {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	const msg = {
		to: 'adrian.derose06@gmail.com',
		from: 'adrianderose.dev@gmail.com',
		subject: 'Sending with SendGrid is Fun',
		text: 'and easy to do anywhere, even with Node.js',
		html: '<strong>and easy to do anywhere, even with Node.js</strong>',
	};
	const info = await sgMail.send(msg);
	res.json(info);
};

module.exports = sendEmail;
