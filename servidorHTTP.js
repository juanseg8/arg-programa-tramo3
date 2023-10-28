const http = require('node:http');

const port = 2000;

const servidor = http.createServer();

servidor.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
})
