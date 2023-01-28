const functions = require("firebase-functions");
const nodeMailer = require("nodemailer");
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
const cors = require("cors");

const handler = (request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
};

exports.helloWorld = functions.https.onRequest(handler);

exports.sendTestEmail2 = functions.https.onCall((data, context) => {
  // if (!context.auth) return { status: 'error', code: 401, message: 'Not signed in' }
  return new Promise(async (resolve, reject) => {
    // find a user by data.uid and return the result
    try {
      // const {
      //   name,
      //   surName,
      //   email,
      //   message
      // } = data;
      // const transporter = nodemailer.createTransport({
      //   service: "gmail",
      //   auth: {
      //     user: "burakkalayci6718@gmail.com",
      //     pass: "yrcgbolmrolkfcwc",
      //   },
      // });
      // const options = {
      //   from: "burakkalayci6718@gmail.com",
      //   to: email,
      //   subject: `Message from ${name} ${surName}`,
      //   html: `<p>${message}</p>`,
      // };
      // const result = await transporter.sendMail({ ...options });
      resolve({
        data
        // : {
        //   success: true,
        //   message: "we have received your message",
        //   data: result
        // }
      });
    } catch (error) {
      resolve({
        data: {
          success: false,
          message: 'en error occured'
        }
      });
    }
  })
});