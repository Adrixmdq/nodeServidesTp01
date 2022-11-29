// FUNCIONAMIENTO DE TODAS LAS RUTAS DE USUARIO

module.exports = {

    listar: async (req, res) => {
    },

    listarInfo: async (req, res) => {
        try {
            console.log('info del usuario')
            req.params; 
            res.json(req.params);
        } catch (err) {
            console.log(err)
        }
    },

    crear: async (req, res) => {
    },

    prueba: async (req, res) => {
        try {
            console.log('ejecutando prueba')

            res.json({
                message: "Hola mundo"
            })

        } catch (err) {
            console.log(err)
        }

    }

}