//rutas para buscar crear y eliminar productos
const express = require('express');
const router = express.Router();
const ProductosController = require('../controllers/ProductosController');
const { check } = require('express-validator');
//obtener
router.get('/', ProductosController.obtenerProductos);
//crear
router.post('/',
    [
        check('nombreProducto','El nombre es obligatorio').not().isEmpty(),
        check('precioProducto','El precio es obligatorio y solo deben ser numeros').isNumeric()

    ],
    ProductosController.crearProductos
);
//eliminar
router.delete('/:id', ProductosController.eliminarProductos);
//editar
router.put('/:id', 
    [
        check('nombreProducto','El nombre es obligatorio').not().isEmpty(),
        check('precioProducto','El precio es obligatorio y solo deben ser numeros').isNumeric()
    ],
    ProductosController.editarProducto
);
module.exports = router;