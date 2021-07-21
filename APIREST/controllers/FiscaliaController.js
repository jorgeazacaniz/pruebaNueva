const Fiscalia = require('../models/Fiscalia');

// agrega una nueva fiscalia 

exports.nuevaFiscalia = async (req, res, next) => {
    const fiscalia = new Fiscalia(req.body);

    try {
        // almacenar el registro
        await fiscalia.save();
        res.json({mensaje: 'se agrego correctamento'});
    } catch (error) {
        // si hay un error, console.log y next
        res.send(error);
        next();
    }
}

//muestra las fiscalias

exports.mostrarFiscalia = async (req, res, next) => {
    try {
        const fiscalia = await Fiscalia.find({});
        res.json(fiscalia);
        
    } catch (error) {
        console.log(error);
        next();
    }
}

//muestra un cliente por id

exports.fiscaliadetalle = async (req, res, next) => {
    const fiscalia = await Fiscalia.findById(req.params.idFiscalia);

    if(!fiscalia) {
        res.json({mensaje : 'Ese cliente no existe'});
        next();
    }
    // Mostrar el cliente
    res.json(fiscalia);
}

// Busca cliente especifico

exports.fiscaliadetalle = async (req, res, next) => {
    const fiscalia = await Fiscalia.findById(req.params.idFiscalia);

    if(!fiscalia) {
        res.json({mensaje : 'Ese cliente no existe'});
        next();
    }
    // Mostrar el cliente
    res.json(fiscalia);
}

// Actualiza fiscalia

exports.actualizarfiscalia = async (req, res, next) => {
    try {
        const fiscalia = await Fiscalia.findOneAndUpdate({ _id : req.params.idFiscalia }, req.body, {
            new : true
        });
        res.json(fiscalia);
    } catch (error) {
        res.send(error);
        next();
    }
}

// Elimina una fiscalia por su ID 
exports.eliminarfiscalia = async (req, res, next) => {
    try {
        await Fiscalia.findOneAndDelete({_id : req.params.idFiscalia});
        res.json({mensaje : 'El cliente se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}