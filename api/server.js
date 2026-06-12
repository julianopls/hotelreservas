require("dotenv").config();

const express = require("express");
const cors = require("cors");

const quartoRoutes = require("./routes/quartoRoutes");
const reservaRoutes = require("./routes/reservaRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/quarto", quartoRoutes);
app.use("/reserva", reservaRoutes);

app.get("/", (req, res) => {
  res.json({
    sistema: "Hotel Reservas API",
    status: "Online"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});