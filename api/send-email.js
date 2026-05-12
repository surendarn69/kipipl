export const config = {
     runtime: "nodejs", 
    };
import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed"
    });
  }

  const { name, email, message } = req.body;
  


const transporter = nodemailer.createTransport({

  service: "gmail",

  auth: {
    user: "cubecorpsol@gmail.com",
    pass: process.env.EMAIL_PASS
  }
});




  try {

    await client.connect();

    const db = client.db("kipipl");

    const collection = db.collection("enquiries");

    await collection.insertOne({

      name,
      email,
      message,

      createdAt: new Date()
    });

    await transporter.sendMail({

      from: "cubecorpsol@gmail.com",

      to: email,

      subject: "Thank You for Contacting Kannan Blue Metals",

      html: `
      <div style="font-family:Arial;padding:20px">

      <h2>Dear ${name},</h2>

      <p>
      Thank you for contacting
      Kannan Infra Projects India Private Limited.
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
      `
    });

    return res.status(200).json({
      message: "Email sent successfully"
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      error: error.message
    });
  }
}
