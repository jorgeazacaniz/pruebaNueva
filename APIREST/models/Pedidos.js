const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedidosSchema = new Schema ({
    fiscalia:{
        type: Schema.ObjectId,
        ref: 'Fiscalia'
    }, 

    pedido: [{
        productos :{
            type: Schema.ObjectId,
            ref: 'Productos'
        },
        cantidad : Number
    }],

    total: {
        type: Number
    }
});

module.exports = mongoose.model('Pedidos', pedidosSchema);