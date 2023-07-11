import nodemailer from "nodemailer"

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "mx2fcf.netcup.net",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "	support@dimaaro.com",
      pass: "1R6c4l3*lsgs5454",
    },
  });

  try {


    const mail = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "email@dra-media.de", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
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
