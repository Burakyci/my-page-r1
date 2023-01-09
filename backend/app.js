const express = require("express");
const cors = require('cors');
const app = express();
const router = express.Router();
const nodeMailler = require("nodemailer");

app.use(cors());

router.get("/", (req, res) => {
  res.send("merhaba");
});

router.post("/sendmail", (req, res) => {
  const { data } = req.body; //mailData
  if (!data.email)
    res.send({
      success: false,
      message: 'no email provided'
    });

  let transporter = nodeMailler.createTransport({
    service: "gmail",
    auth: {
      user: "burakkalayci6718@gmail.com",
      pass: "yrcgbolmrolkfcwc",
    },
  });
  let options = {
    from: "burakkalayci6718@gmail.com",
    to: `${data.email}`,
    subject: `Message from ${data.name} ${data.surName}`,
    html: `<p>${data.message}</p>`
  };
  transporter.sendMail(options, function (error, data) {
    if (error)
      res.send({
        success: false,
        message: error.message
      });

    res.send({
      success: true,
      message: 'we have received your message'
    });
  });
});

app.use("/", router);
app.listen(8000);
console.log("8000 port sessizce dinliyorum şişşşşşşttt");