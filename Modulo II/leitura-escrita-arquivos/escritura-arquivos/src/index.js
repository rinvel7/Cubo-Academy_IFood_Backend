const express = require("express");
const fs = require("fs/promises");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const texto = "tudo bem??";

  await fs.writeFile("./src/b.txt", texto);
  res.json("ok");
});

app.post("/", async (req, res) => {
  const { nome, idade } = req.body;

  try {
    const teste = await fs.readFile("./src/usuarios2.json");

    const pessoas = JSON.parse(teste);

    pessoas.push({ nome, idade });

    const pessoasStringify = JSON.stringify(pessoas);

    await fs.writeFile("./src/usuarios.json", pessoasStringify);

    return res.json("Pessoas cadastrada com sucesso");
  } catch (erro) {
    return res.json(`Deu erro: ${erro.message}`);
  }
});

app.listen(3000);
