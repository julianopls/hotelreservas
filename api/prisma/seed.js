const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const quarto1 = await prisma.quarto.create({
    data: {
      numero: "101",
      tipo: "Standard"
    }
  });

  const quarto2 = await prisma.quarto.create({
    data: {
      numero: "102",
      tipo: "Luxo"
    }
  });

  const quarto3 = await prisma.quarto.create({
    data: {
      numero: "201",
      tipo: "Suite"
    }
  });

  await prisma.reserva.create({
    data: {
      hospede: "Jeje ribamar",
      data_entrada: new Date("2026-06-10"),
      data_saida: new Date("2026-06-12"),
      quarto_id: quarto1.id
    }
  });

  await prisma.reserva.create({
    data: {
      hospede: "Neymar",
      data_entrada: new Date("2026-06-15"),
      data_saida: new Date("2026-06-18"),
      quarto_id: quarto2.id
    }
  });

  await prisma.reserva.create({
    data: {
      hospede: "Paula de douza",
      data_entrada: new Date("2026-06-20"),
      data_saida: new Date("2026-06-22"),
      quarto_id: quarto3.id
    }
  });

  console.log("Seed executado.");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });