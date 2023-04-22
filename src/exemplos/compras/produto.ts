export class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public quantidade: number
  ) {}

  calcula() {
    return this.preco * this.quantidade;
  }

  toString() {
    return `o produto: ${this.nome} com o preço ${this.preco} e quantidade: ${this.quantidade}`;
  }
}

const produtos: Produto[] = [
  new Produto("Batata", 5, 2),
  new Produto("Chocolate", 7, 8),
];
produtos.push(new Produto("Coca-Cola", 8, 12));

produtos.forEach((produto: Produto) => console.log(produto.toString()));
