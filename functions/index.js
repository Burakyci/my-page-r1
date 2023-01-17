const functions = require("firebase-functions");
const nodeMailer = require("nodemailer");
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

const handler = (request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
};

exports.helloWorld = functions.https.onRequest(handler);

exports.sendEmail = functions.https.onRequest((request, response) => {
  try {
    const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: "burakkalayci6718@gmail.com",
        pass: "yrcgbolmrolkfcwc",
      },
    });
    const options = {
      from: "burakkalayci6718@gmail.com",
      to: `${data.email}`,
      subject: `Message from ${data.name} ${data.surName}`,
      html: `<p>${data.message}</p>`,
    };
    transporter.sendMail(options, function (error, data) {
      if (error)
        res.send({
          success: false,
          message: error.message,
        });

      res.send({
        success: true,
        message: "we have received your message",
      });
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});
