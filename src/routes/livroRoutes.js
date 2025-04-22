import { Router } from "express";
import { livroController } from "../controllers/livroController.js";

const router = Router();

// GET /livros - Lista livros disponíveis
router.get("/", livroController.listarLivros);

// POST /livros - Cadastra novo livro
router.post("/", livroController.cadastrarLivro);

export default router;
