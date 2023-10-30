require ('dotenv').config();

const express = require("express");
const userRouter = require('./routes/usersRoutes')

const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.send("Hola mundo!");
});

app.use(userRouter);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
    console.log(process.env.DB_PASSWORD);
});
