const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fiscaliaSchema = new Schema({
    departamento: {
        type: String,
        trim : true
    },
    municipio: {
        type: String,
        trim : true
    },
    direccion: {
        type: String,
        trim : true
    },
    telefono: {
        type: String,
        trim : true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },

});

module.exports = mongoose.model('Fiscalia', fiscaliaSchema);