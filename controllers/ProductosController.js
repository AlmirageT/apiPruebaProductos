const clienteAxios = require('../config/axios');
const { validationResult } = require('express-validator');

exports.obtenerProductos = async(req, res) => {
    try {
        const productos = await clienteAxios.clienteAxios.get('/productos');
        res.json(productos.data);
    } catch (error) {
        console.log(error);
        res.status(400).send('hubo un error');
    }
}

exports.crearProductos = async(req, res) => {

    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({ errores: errores.array() });
    }

    try {
        let producto;
        //crear producto
        producto =  {
            "nombreProducto": req.body.nombreProducto,
            "precioProducto": req.body.precioProducto
        }
        //crear usuario
        await clienteAxios.clienteAxios.post('/productos',producto);
        //mensaje de confirmacion
        res.send('producto creado correctamente');
    } catch (error) {
        console.log(error);
        res.status(400).send('hubo un error');
    }
}

exports.eliminarProductos = async(req, res) => {
    try {
        let id = req.params.id;
        if (!id){
            return res.status(404).json({ msg:'id no encontrado' });
        }
        await clienteAxios.clienteAxios.delete(`/productos/${id}`);
        res.send('producto eliminado correctamente');
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.editarProducto = async(req, res) => {
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({ errores: errores.array() });
    }
    try {
        let id = req.params.id;
        if (!id){
            return res.status(404).json({ msg:'id no encontrado' });
        }
        let producto;
        producto =  {
            "nombreProducto": req.body.nombreProducto,
            "precioProducto": req.body.precioProducto
        }
        await clienteAxios.clienteAxios.put(`/productos/${id}`,producto);

        res.send('producto actualizado correctamente');
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}