const express = require("express");
const app = express();
const router = express.Router();
const mailToken =
  "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";
router.get("/", function (req, res) {
  res.send("merhaba");
});

router.get("/sendMail", function (req, res) {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(mailToken);
  const msg = {
    to: "buraklyci@hotmail.com", // Change to your recipient
    from: "buraklyci@hotmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      res.send("asdasdasdasd");
    })
    .catch((error) => {
      console.error(error);
    });
});

app.use("/", router);
app.listen(5000);
console.log("5000 portta dinliyorum seni");
