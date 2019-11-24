const mongoose = require('mongoose')

const ClientesSchema = new  mongoose.Schema ({

    nome: {type: String},
    email: {type: String},
    cpf: {type: Number},
    dataNascimento: {type: Date},
    estadoCivil: {type: String},
    telefone: {type: Number},
    comprou: {type: Boolena}},
    {versionKey: false})

const Clientes = mongoose.model ('Clientes', ClientesSchema)

module.exports = Clientes