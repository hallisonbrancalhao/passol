export class Produto {
  static id = 0;
  constructor(
    public nome: string,
    public preco: number,
    public quantidade: number
  ) {
    Produto.id++;
  }

  get html() {
    return `
      <tr>
        <td>${this.nome}</td>
        <td>${this.preco}</td>
        <td>${this.quantidade}</td>
        <td><button>x</button></td>

      </tr>
    `;
  }

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
