import { createTransport } from "nodemailer";

export const senEmail = async (from, to, subject, text) => {
  const transporter = createTransport({
    service: process.env.EMAIL_SERVICE,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from,
    to,
    subject,
    text,
  });
};
