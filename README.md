<h1 align="center">🏨 Hotel Reservas</h1>

<p align="center">
  Sistema de gerenciamento de quartos e reservas desenvolvido com
  <strong>Node.js</strong>,
  <strong>Express</strong>,
  <strong>Prisma</strong>,
  <strong>MySQL</strong>,
  <strong>HTML</strong>,
  <strong>CSS</strong> e
  <strong>JavaScript</strong>.
</p>

<hr>

<h2>📋 Funcionalidades</h2>

<h3>Quartos</h3>

<ul>
  <li>✅ Cadastrar quartos</li>
  <li>✅ Listar quartos</li>
  <li>✅ Excluir quartos</li>
  <li>✅ Visualizar reservas do quarto</li>
</ul>

<h3>Reservas</h3>

<ul>
  <li>✅ Cadastrar reservas</li>
  <li>✅ Listar reservas</li>
  <li>✅ Excluir reservas</li>
  <li>✅ Relacionamento entre quartos e reservas</li>
</ul>

<hr>


<h2>📂 Estrutura do Projeto</h2>

<pre>
hotelreservas/
│
├── api/
│   ├── controllers/
│   │   ├── quartoController.js
│   │   └── reservaController.js
│   │
│   ├── routes/
│   │   ├── quartoRoutes.js
│   │   └── reservaRoutes.js
│   │
│   ├── config/
│   │   └── prisma.js
│   │
│   ├── prisma/
│   │   └── schema.prisma
│   │
│   └── server.js
│
├── web/
│   ├── index.html
│   ├── reservas.html
│   ├── style.css
│   └── script.js
│
├── docs/
│   ├── insomnia.json
│   └── migration.sql
│
├── wireframes/
│   ├── tela-quartos.png
│   └── tela-reservas.png
│
└── README.md
</pre>

<hr>

<h2>⚙️ Instalação</h2>

<h3>Instalar dependências</h3>

<pre>
npm install
</pre>

<h3>Configurar arquivo .env</h3>

<pre>
DATABASE_URL="mysql://usuario:senha@localhost:3306/hotelreservas"
PORT=3000
</pre>

<h3>Executar migrations</h3>

<pre>
npx prisma migrate dev
</pre>

<h3>Gerar Prisma Client</h3>

<pre>
npx prisma generate
</pre>

<h3>Iniciar servidor</h3>

<pre>
npm start
</pre>

<hr>

<h2> Endpoints</h2>

<h3>Quartos</h3>

<pre>
GET    /quarto
POST   /quarto
DELETE /quarto/:id
</pre>

<h3>Reservas</h3>

<pre>
POST   /reserva
GET    /reserva/:quarto_id
DELETE /reserva/:id
</pre>

<hr>

<h2 align="center">📸 Protótipo do Sistema</h2>

<h3 align="center">REFERENCIA</h3>

<p align="center">
  <img src="./wireframes/referencia.png" width="900">
</p>

<h3 align="center">Tela de Quartos</h3>

<p align="center">
  <img src="./wireframes/tela de quartos.png" width="900">
</p>
<p align="center">
  <img src="./wireframes/excluir quarto.png" width="900">
</p>

<h3 align="center">Tela de Reservas</h3>

<p align="center">
  <img src="./wireframes/tela reservas.png" width="900">
</p>
<p align="center">
  <img src="./wireframes/excluir reserva.png" width="900">
</p>

<hr>

<h2>👨‍💻 Autor</h2>

<p>
  Desenvolvido por <strong>Juliano</strong>.
</p>

<p>
  Projeto desenvolvido para estudo de:
</p>

<ul>
  <li>CRUD</li>
  <li>APIs REST</li>
  <li>Prisma ORM</li>
  <li>Banco de Dados Relacional</li>
  <li>Integração Frontend e Backend</li>
</ul>
