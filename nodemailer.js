"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "",
    pass: "",
  },
});
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Scammer kto mah"ashish.reg7@gmail.com', // sender address
    to: "khanalbishal14@gmail.com , ashish.reg9@gmail.com ", // list of receivers
    subject: "Hello sathiharu", // Subject line
    text: "node bata pathako email hai", // plain text body
    html: 'Embedded image: <img src="cid:unique@nodemailer.com"/>',
    attachments: [
      {
        filename: "logo.png",
        path: "./logo.png",
        cid: "unique@nodemailer.com", //same cid value as in the html img src
      },
      {
        filename: "logo.png",
        path: "./logo.png",
      },
    ],
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

main().catch(console.error);
