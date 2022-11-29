// FUNCIONAMIENTO DE TODAS LAS RUTAS DE MESAS

module.exports = {

    listar: async (req, res) => {
    },

    listarInfo: async (req, res) => {
    },

    crear: async (req, res) => {
    },

    prueba: async (req, res) => {
        try {
            console.log('Controller de mesas ok')

            res.json({
                message: "Estado de la mesa: Correcto!! "
            })

        } catch (err) {
            console.log(err)
        }

    }

}