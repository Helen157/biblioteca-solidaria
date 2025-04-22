import { Router } from "express";
import { emprestimoController } from "../controllers/emprestimoController.js";

const router = Router();

// POST /emprestimos - Realiza empréstimo
router.post("/", emprestimoController.realizarEmprestimo);

export default router;
