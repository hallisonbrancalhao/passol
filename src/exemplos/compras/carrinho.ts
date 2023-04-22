import { Produto } from ".";

export class Carrinho {
  #itens: Produto[] = [];
  constructor() {}

  get total() {
    return this.#itens.reduce((prev, cur) => {
      return prev + cur.preco * cur.quantidade;
    }, 0);
  }

  get html() {
    const thead = `<thead>
      <th>Nome</th>
      <th>Preço</th>
      <th>Quantidade</th>
      `;
    const tbody = document.createElement("tbody");
    this.#itens.forEach((produto) => {
      tbody.innerHTML += produto.html;
    });
    const tfoot = `
      <tfoot>
        <td></td>
        <td></td>
        <td>${this.total}</td>
      </tfoot>
    `;
    return thead + tbody.innerHTML + tfoot;
  }

  adiciona(...produtos: Produto[]) {
    this.#itens.push(...produtos);
  }

  adicionaUm(produto: Produto) {
    this.#itens.push(produto);
  }

  adicionaMuitos(produtos: Produto[]) {
    produtos.forEach((produto) => this.#itens.push(produto));
  }
}

// const carrinho = new Carrinho();

// const batata = new Produto("Batata", 1, 8);
// const cocacola = new Produto("Coca-Cola", 1, 8);

// carrinho.adiciona(batata, cocacola);
// carrinho.adicionaUm(batata);
// carrinho.adicionaMuitos([batata, cocacola]);
// console.log("💵 Total do carrinho: ", carrinho.total);
