const moongose = require('mongoose');

const PersonasSchema = new mongoose.Schema (
    {
    nombre: {
    type: String, maxlenght: 50, required: true},
    correoelectronico: Varchar, 
    contraseña: String,

    createdAT:{
        tipe: Date, default: Date.now
    }

});

module.exports = mongoose.model("Persona", PersonasSchema );