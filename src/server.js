// Constantes
const express = require("express");
const app = express();
const port = 4000;

// Middlewares

// app.use(function(req,res,next){
//     console.log('Entro al middleware.');
//     res.status(500).send('Se ingreso al middleware.')
// });

// Funciones

function validarUsuario(req, res, next) {
    const usuarioValido = true;
    if (usuarioValido) {
        next();
    } else {
        res.status(401).send("Usuario no valido");
    }
}

app.use(express.static("public")); // Archivos estaticos

//Rutas

app.get("/", (req, res) => {
    res.send("Hola mundo!");
});

app.get("/200", (req, res) => {
    res.send("Status 200: OK");
});

app.get("/300", (req, res) => {
    res.status(301).send("Status 301: La pagina se traslado a otro lugar");
});

app.get("/400", (req, res) => {
    res.status(400).send("Status 400: Bad Request. Ocurrio un error");
});

app.post("/formulario", (req, res) => {
    res.send("Se envio el formulario");
});

app.get("/panel", [validarUsuario], (req, res) => {
    try {
        res.send("Bienvenido al panel");
    } catch (error) {
        res.status(500).send("Ocurrio un error dentro del panel.");
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
