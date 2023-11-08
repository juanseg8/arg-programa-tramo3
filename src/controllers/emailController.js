const nodemailer = require("nodemailer");

const emailController = {}

const transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: 'postmaster@sandboxc3d216e4699c4ca290042c0dfbb24d45.mailgun.org',
        pass: '347ebc33eb3d281ba9e7d3f2ed68eb0f-8c9e82ec-371575b1'
    }
});

emailController.enviarEmail = async (req, res) => {

    const info = await transporter.sendMail({
        from: '"Equipo de Argentina Programa 👻" <argentina@programa.com.ar>', // sender address
        to: "jguilisasti503@gmail.com", // list of receivers
        subject: "Bienvenido", // Subject line
        text: "Bienvenido Juanse", // plain text body
        html: "<b>Bienbenido a Argentina Programa!</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);

    res.json({ mensaje: 'Ingreso correctamente' })
}

module.exports = emailController