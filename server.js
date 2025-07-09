import express from "express";
import cors from "cors";
import { livroController } from "./src/controllers/livroController.js";
import { emprestimoController } from "./src/controllers/emprestimoController.js";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3001",
      "https://biblioteca-solidaria-frontend.vercel.app",
    ],
    credentials: true,
  })
);

// Rotas
app.get("/livros", livroController.listarLivros);
app.post("/livros", livroController.cadastrarLivro);
app.post("/emprestimos", emprestimoController.realizarEmprestimo);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
