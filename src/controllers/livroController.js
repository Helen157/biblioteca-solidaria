import { readFileSync } from "fs";
import { format, addDays } from "date-fns";

// Carrega dados dos arquivos JSON
const loadLivros = () =>
  JSON.parse(readFileSync("./src/data/livros.json")).livros;
const loadEmprestimos = () =>
  JSON.parse(readFileSync("./src/data/emprestimos.json")).emprestimos;

export const livroController = {
  listarLivros: (req, res) => {
    try {
      const livros = loadLivros().filter((livro) => livro.disponivel);
      res.status(200).json(livros);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao buscar livros" });
    }
  },

  cadastrarLivro: (req, res) => {
    const livros = loadLivros();
    const { titulo, autor, categoria } = req.body;

    if (!titulo || !autor || !categoria) {
      return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
    }

    const novoLivro = {
      id: livros.length + 1,
      titulo,
      autor,
      categoria,
      disponivel: true,
      dataCadastro: format(new Date(), "yyyy-MM-dd"),
    };

    livros.push(novoLivro);
    // Em produção, salvaria no arquivo JSON aqui
    res.status(201).json(novoLivro);
  },
};
