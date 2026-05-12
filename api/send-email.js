
export const config = {
  runtime: "nodejs",
};

import { Resend } from "resend";
import { MongoClient } from "mongodb";

const resend = new Resend(process.env.RESEND_API_KEY);

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  const { name, email, message } = req.body;

  try {

    await client.connect();

    const db = client.db("kipipl");

    const collection = db.collection("enquiries");

    await collection.insertOne({

      name,
      email,
      message,

      createdAt: new Date(),
    });

    await resend.emails.send({

      from: "onboarding@resend.dev",

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
      `,
    });

    return res.status(200).json({
      message: "Email sent successfully",
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      error: error.message,
    });
  }
}
