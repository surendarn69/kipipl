
export const config = {
  runtime: "nodejs",
};

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  const { name, email, message } = req.body;

  try {

    // SAVE TO GOOGLE SHEET

    await fetch("https://sheetdb.io/api/v1/roeov71r9u0x5", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
"name": String(name),
"email": String(email),
"message": String(message),
"createdAt": new Date().toISOString(),
        
      }),
    });

    // SEND EMAIL

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
