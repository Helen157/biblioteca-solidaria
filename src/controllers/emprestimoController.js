import { readFileSync } from "fs";
import { addDays, format, isAfter, parseISO } from "date-fns";

const loadLivros = () =>
  JSON.parse(readFileSync("./src/data/livros.json")).livros;
const loadEmprestimos = () =>
  JSON.parse(readFileSync("./src/data/emprestimos.json")).emprestimos;

export const emprestimoController = {
  realizarEmprestimo: (req, res) => {
    const livros = loadLivros();
    let emprestimos = loadEmprestimos();
    const { livroId, leitor } = req.body;

    const livro = livros.find((l) => l.id === livroId);
    if (!livro) return res.status(404).json({ erro: "Livro não encontrado" });
    if (!livro.disponivel)
      return res.status(400).json({ erro: "Livro já emprestado" });

    const novoEmprestimo = {
      id: emprestimos.length + 1,
      livroId,
      leitor,
      dataEmprestimo: format(new Date(), "yyyy-MM-dd"),
      dataDevolucao: format(addDays(new Date(), 30), "yyyy-MM-dd"),
      status: "ativo",
    };

    livro.disponivel = false;
    emprestimos.push(novoEmprestimo);
    // Em produção, salvaria nos arquivos JSON aqui
    res.status(201).json(novoEmprestimo);
  },
};
