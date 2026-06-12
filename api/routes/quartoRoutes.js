const express = require("express");

const router = express.Router();

const quartoController = require("../controllers/quartoController");

router.get("/", quartoController.listar);
router.post("/", quartoController.cadastrar);
router.delete("/:id", quartoController.excluir);
router.get("/:id/reservas", quartoController.reservas);

module.exports = router;