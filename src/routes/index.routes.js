// SE ENCARGA DE CONECTAR TODAS LAS RUTAS

const { Router } = require("express") // importar express

const usuarioRoutes = require("./usuario.routes") // importar el archivo de rutas de usuarios
const clienteRoutes = require("./cliente.routes") // importar el archivo de rutas de cliente
const mesaRoutes = require("./mesa.routes") // importar el archivo de rutas de cliente

const rutas_init = () => { // aca se ponen todas las rutas que existen
  const router = Router() // crear una instancia de express.Router()

  router.use("/usuarios", usuarioRoutes) // para acceder a las rutas de usuarios de la api siempre deberá empezar con /usuarios
  router.use("/clientes", clienteRoutes) // para acceder a las rutas de clientes  de la api siempre deberá empezar con /clientes
  router.use("/mesas", mesaRoutes) // para acceder a las rutas de mesas  de la api siempre deberá empezar con /mesas

  return router // retornar el router
};

module.exports = { rutas_init } // exportar el archivo de rutas de la api
