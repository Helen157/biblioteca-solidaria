import { readFileSync } from "fs";
import { isAfter, parseISO } from "date-fns";

const loadEmprestimos = () =>
  JSON.parse(readFileSync("./src/data/emprestimos.json")).emprestimos;

export const notificarAtrasos = () => {
  const emprestimos = loadEmprestimos();
  const hoje = new Date();

  const atrasados = emprestimos.filter((emp) => {
    return emp.status === "ativo" && isAfter(hoje, parseISO(emp.dataDevolucao));
  });

  atrasados.forEach((emp) => {
    console.log(`Notificação: ${emp.leitor}, seu livro está atrasado!`);
  });
};
