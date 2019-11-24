const express = require("express")
const router = express.Router()
const controller = require("../controller/clientesController")



router.get("/", controller.get)
router.get("/compradores", controller.getCompradores)
router.post("/", controller.post)
router.get("/:cpf", controller.getCpf)
router.put("/:cpf", controller.updateCliente)

module.exports = router