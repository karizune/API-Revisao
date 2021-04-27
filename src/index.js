const express = require("express");
const cors = require("cors");
const cli = require("cli-color");
const app = express();

const rotas = require("./routes/rotas");

app.use(cors());
app.use(express.json());

app.use("/rota", rotas);

module.exports = app.listen(3000, () => {
  console.log(cli.cyanBright("servidor rodando na porta 3000"));
});
