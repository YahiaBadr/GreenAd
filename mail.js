const nodemailer = require("nodemailer");

exports.sendMail = function sendMail(req,res) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "greenad.agency.yms@gmail.com",
      pass: "greenad12345"
    },
    tls:{
        rejectUnauthorized:false
    }
  });

  var mailOptions = {
    from: "greenad.agency.yms@gmail.com",
    to: "greenad.agency.yms@gmail.com",
    subject: req.body.subject,
    text: req.body.text
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
    //   console.log(error);
      return res.json({msg:"Your Message Was NOT Sent"});
    } else {
    //   console.log("Email sent: " + info.response);
      return res.json({msg:"Your Message Sent Successfully "});
    }
  });
};
