const express = require("express");

const cors = require("cors");

const nodemailer = require("nodemailer");

const { MongoClient } = require("mongodb");

require("dotenv").config();

const app = express();

const client = new MongoClient(process.env.MONGODB_URI);

client.connect()
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

app.use(express.json());

app.post("/send-email", async (req, res) => {

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({

    host: "smtp.gmail.com",

    port: 465,

    secure: true,

    auth: {
      user: "cubecorpsol@gmail.com",
      pass: process.env.EMAIL_PASS,
    },
  });

  try {

    // CONNECT MONGODB

    

    const db = client.db("kipipl");

    const collection = db.collection("enquiries");

    // SAVE DATA

    await collection.insertOne({

      name,
      email,
      message,

      createdAt: new Date(),
    });

    // SEND EMAIL TO USER

    await transporter.sendMail({

      from: "cubecorpsol@gmail.com",

      to: email,

      subject: "Thank You for Contacting Kannan Blue Metals",

      html: `
        <div style="font-family: Arial; padding:20px; line-height:1.6;">

          <h2>Dear ${name},</h2>

          <p>
            Thank you for contacting
            <b>Kannan Infra Projects India Private Limited</b>.
          </p>

          <p>
            We have successfully received your enquiry.
            Our team will get in touch with you shortly.
          </p>

          <br>

          <p>
            Regards,<br>
            Kannan Blue Metals
          </p>

        </div>
      `,
    });

    res.status(200).json({
      message: "Email sent successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Email failed",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
