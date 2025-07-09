import express from "express";
import cors from "cors";
import { livroController } from "./src/controllers/livroController.js";
import { emprestimoController } from "./src/controllers/emprestimoController.js";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "https://biblioteca-solidaria-frontend.vercel.app/", // permite acesso apenas ao frontend da biblioteca desenvolvida no M5
    credentials: true,
  })
);

// Rotas
app.get("/livros", livroController.listarLivros);
app.post("/livros", livroController.cadastrarLivro);
app.post("/emprestimos", emprestimoController.realizarEmprestimo);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
