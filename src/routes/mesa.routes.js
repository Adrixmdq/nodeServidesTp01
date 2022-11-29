// RUTAS DE clientes

const router = require("express").Router(); // importar express.Router()

const mesaController = require('../controllers/mesa.controller') // importar el archivo de controladores de usuarios


router.get('/prueba', mesaController.prueba)
router.get('/', mesaController.listar)
router.post('/', mesaController.crear)
router.get('/:idUsuario', mesaController.listarInfo)



module.exports = router;