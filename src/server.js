require ('dotenv').config();

const express = require("express");
const bodyParser = require('body-parser')

const userRouter = require('./routes/usersRoutes');
const authRouter = require('./routes/authRoutes');

const app = express();
const port = 4000;

// Middlewar Se pone arriba antes de todas las rutas
app.use(bodyParser.json());

app.use(userRouter);
app.use(authRouter);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
