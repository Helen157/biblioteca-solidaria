/**
 * Validações para empréstimos
 */
export const validarEmprestimo = (req, res, next) => {
  const { livroId, leitor } = req.body;

  if (!livroId || !leitor) {
    return res.status(400).json({ erro: "Dados incompletos" });
  }

  if (typeof livroId !== "number") {
    return res.status(400).json({ erro: "ID do livro deve ser numérico" });
  }

  next();
};
