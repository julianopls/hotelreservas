const prisma = require("../config/prisma");

const cadastrar = async (req, res) => {
  try {
    console.log("BODY RESERVA:", req.body);

    const {
      hospede,
      data_entrada,
      data_saida,
      quarto_id
    } = req.body;

    const reserva = await prisma.reserva.create({
      data: {
        hospede,
        data_entrada: new Date(data_entrada),
        data_saida: new Date(data_saida),
        quarto_id: Number(quarto_id)
      }
    });

    res.status(201).json(reserva);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      erro: error.message
    });
  }
};

const excluir = async (req, res) => {
  const { id } = req.params;

  await prisma.reserva.delete({
    where: {
      id: Number(id)
    }
  });

  res.json({
    mensagem: "Reserva excluída"
  });
};

const listarPorQuarto = async (req, res) => {
  console.log("PARAMS:", req.params);

  const { quarto_id } = req.params;

  console.log("QUARTO_ID:", quarto_id);

  const reservas = await prisma.reserva.findMany({
    where: {
      quarto_id: Number(quarto_id)
    },
    select: {
      id: true,
      hospede: true,
      data_entrada: true,
      data_saida: true
    }
  });

  res.json(reservas);
};


module.exports = {
  cadastrar,
  excluir,
  listarPorQuarto
};