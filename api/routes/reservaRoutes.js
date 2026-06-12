const express = require("express");

const router = express.Router();

const reservaController = require("../controllers/reservaController");

router.post("/", reservaController.cadastrar);
router.delete("/:id", reservaController.excluir);
router.get("/:quarto_id", reservaController.listarPorQuarto);

module.exports = router;