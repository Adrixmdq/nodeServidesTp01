// RUTAS DE clientes

const router = require("express").Router(); // importar express.Router()

const clienteController = require('../controllers/cliente.controller') // importar el archivo de controladores de usuarios


router.get('/prueba', clienteController.prueba) //http://localhost:5000/api/clientes/prueba
router.get('/listar', clienteController.listar)
router.post('/', clienteController.crear)
router.get('/:idCliente/:idLugar', clienteController.listarInfo)



module.exports = router;