const prisma = require("../config/prisma");

const listar = async (req, res) => {
  const quartos = await prisma.quarto.findMany();

  res.json(quartos);
};

const cadastrar = async (req, res) => {
  try {
    const { numero, tipo } = req.body;

    const quarto = await prisma.quarto.create({
      data: {
        numero: parseInt(numero),
        tipo
      }
    });

    res.status(201).json(quarto);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      erro: error.message
    });
  }
};
const excluir = async (req, res) => {
  const { id } = req.params;

  await prisma.quarto.delete({
    where: {
      id: Number(id)
    }
  });

  res.json({
    mensagem: "Quarto excluído"
  });
};

const reservas = async (req, res) => {
  const { id } = req.params;

  const quarto = await prisma.quarto.findUnique({
    where: {
      id: Number(id)
    },
    include: {
      reservas: true
    }
  });

  res.json(quarto);
};

module.exports = {
  listar,
  cadastrar,
  excluir,
  reservas
};