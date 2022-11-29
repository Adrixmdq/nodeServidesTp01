// FUNCIONAMIENTO DE TODAS LAS RUTAS DE USUARIO

module.exports = {

    listar: async (req, res) => {
        try {
            console.log('listado del clientes')

            res.json({
                message: "Ahora te paso el listado!! "
            })

        } catch (err) {
            console.log(err)
        }
    },

    listarInfo: async (req, res) => {
        try {
            console.log('listado del clientes')

            res.json({
                message: "Ahora te paso los datos del cliente "+ req.params.idCliente  + " del lugar "+req.params.idLugar 
            })

        } catch (err) {
            console.log(err)
        }
    },

    crear: async (req, res) => {
    },

    prueba: async (req, res) => {
        try {
            console.log('El Clientes esta satisfecho')

            res.json({
                message: "Estado del cliente: Correcto!! "
            })

        } catch (err) {
            console.log(err)
        }

    }

}