import nodemailer from "nodemailer"

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  const host = process.env.DB_HOST
  const user = process.env.DB_USER
  const pass = process.env.DB_PASS

  const transporter = nodemailer.createTransport({
    host: host,
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: user,
      pass: pass,
    },
  });

  try {


    const mail = await transporter.sendMail({
      from: `Kontaktformular: <${user}>`, // sender address
      to: user, // list of receivers
      subject: "Kontaktformular ✔", // Subject line
      text: "Kontaktformular Webseite Dimaaro:", // plain text body
      html: `
        <p>Name: ${name}</p>
        <p>E-Mail-Adresse: ${email}</p>
        <p>Nachricht: ${message}</p>
      `, // html body
    });


    return res.status(200).json({ message: "success" });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Coult not send the email. Your message was not sent.",
      });
  }
}
