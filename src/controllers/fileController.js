const fileController = {}

const rutaPrincipal = __dirname + '/../../tmp/'

fileController.subirArchivo = (req, res) => {

    try {

        const archivo = req.files.cliente;
        const rutaGuardar = rutaPrincipal + archivo.name

        return archivo.mv(rutaGuardar, function (err) {
            console.log(rutaGuardar);
            if (err) {
                return res.status(500).json({ error: err });
            } else {
                return res.json({ mensaje: 'El archivo se subio correctamente' });
            }
        })

    } catch (err) {
        return res.status(500).json({ error: 'Ocurrio un erro al subir un archivo' });
    }


}



module.exports = fileController;