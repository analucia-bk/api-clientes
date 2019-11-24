const Clientes = require("../model/clientes")





exports.post = (req, res) => {
    const cliente = new Clientes(req.body)

    cliente.save(function(err){
        if (err) res.status(500).send(err)
        else {
            res.status(201).send({
                status: true,
                mensagem: "Cliente incluído com sucesso"
            })
        }
        res.status(201).send(cliente)
    })
}



exports.get = (req,res) => {
    Clientes.find(function(err,clientes){
        if (err) res.status(500).send(err);
        res.status(200).send(clientes)
    })
}

exports.getCompradores = (req, res) => {
    Clientes.find({"comprou" : true}, function(err,clientes){
        if (err) res.status(500).send(err);
        const clientesRetorno = clientes.map(cliente => {
            return{
                nome: cliente.nome,
                email: cliente.email
            }
        })
        res.status(200).send(Clientes.Retorno)
    })
}


exports.getCpf = (req, res) => {
    const cpf = req.params.cpf
    Clientes.find({cpf}, function(err,cliente){
        if (err) res.status(500).send(err)

    res.status(200).send(cliente)
    })
}


exports.updateCliente = (req,res) => {
    
    if (!validaFormulario(req.body)) return res.status(400).send ({ mensagem: "campos inválidos"})
        
       Clientes.update(
           { cpf: req.params.cpf },
           { $set: req.body },
           { upsert: true },
           function (err) {
               if (err) return res.status (500).send (err);
               res.status(200).send({ mensagem:"Atualizado com sucesso!"})
           })
    }


    const validaFormulario = (campo) => {

        const schema = {
            nome: Joi.string().min(1).require(),
            email:Joi.string().min(1).require(),
        }

        const validation = Joi.validation = Joi.validate(campos, schema)

        if (validation.error){
            return false
 }

            return true

        }