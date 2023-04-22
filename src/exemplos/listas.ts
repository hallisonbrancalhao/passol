import { Pessoa } from "./pessoa";

const listaPessoas: Pessoa[] = [];

listaPessoas.push(
  {
    nome: "Hallison",
    idade: 24,
  },
  {
    nome: "Eduardo",
    idade: 25,
  }
);

function log<T>(value: T, index: number, array: T[]) {
  console.log(index, array);
  return { ...value, nacimento: new Date() };
}

listaPessoas.forEach((pessoa) => console.log(pessoa));
// listaPessoas.forEach(console.log);

const pessoas = listaPessoas.map((...params) => log(...params));

console.log("pessoas:", pessoas);

console.table(listaPessoas);
