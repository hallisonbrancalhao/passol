export interface Pessoa {
  nome: string;
  idade: number;
  nascimento?: Date;
}

const p1: Pessoa = {
  nome: "Hallison",
  idade: 24,
};

p1.nascimento = new Date("04/16/1999");

// console.log(p1);
