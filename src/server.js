require ('dotenv').config();

const express = require("express");
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

const userRouter = require('./routes/usersRoutes');
const authRouter = require('./routes/authRoutes');
const fileRouter = require('./routes/fileRoutes')
const app = express();
const port = 4000;

// Middleware Se pone arriba antes de todas las rutas
app.use(bodyParser.json());
app.use(fileUpload());

// Rutas
app.use(userRouter);
app.use(authRouter);
app.use(fileRouter);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
