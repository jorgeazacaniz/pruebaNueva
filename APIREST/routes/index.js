const express = require('express');
const Fiscalia = require('../models/Fiscalia');
const router = express.Router();

const FiscaliaController = require('../controllers/FiscaliaController');
const productosController = require('../controllers/productosController');
const PedidosController = require('../controllers/PedidosController');

module.exports = function(){
    
    // agregar nueva fiscalia via POST
    router.post('/fiscalia', FiscaliaController.nuevaFiscalia)

    //obtener todos los datos

    router.get('/fiscalia', FiscaliaController.mostrarFiscalia);

    //mostrar un cliente especifico

    router.get('/fiscalia/:idFiscalia', FiscaliaController.fiscaliadetalle);

    // Actualizar fiscalia

    router.put('/fiscalia/:idFiscalia', FiscaliaController.actualizarfiscalia);

      // Eliminar fiscalia
    router.delete('/fiscalia/:idFiscalia', FiscaliaController.eliminarfiscalia);

    /** PRODUCTOS */

    router.post('/productos', 
           productosController.subirArchivo,
           productosController.nuevoProducto);

    router.get('/productos', productosController.mostrarProductos);

    router.get('/productos/:idProductos', productosController.productosdetalle);

    router.put('/productos/:idProductos', 
                productosController.subirArchivo,
                productosController.actualizarproductos);

    router.delete('/productos/:idProductos', productosController.eliminarproducto);


     /** PEDIDOS */

     router.post('/pedidos', PedidosController.nuevoPedido);




    return router;
}