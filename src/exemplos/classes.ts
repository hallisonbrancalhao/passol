class NomeClasse {
  //   private propriedadePrivada = "Propriedade privada";
  #propriedadePrivada = "Propriedade privada";

  constructor(private peso: number, private altura: number) {
    this.peso = peso;
    this.altura = altura;
  }

  #formata(valor: number) {
    switch (true) {
      case valor <= 18:
        return "Abaixo do peso";
      case valor < 25:
        return "Peso normal";
      case valor < 30:
        return "Sobrepreso";
    }
  }

  public calcular() {
    const formatado = this.#formata(this.peso / (this.altura * this.altura));
    return formatado;
  }
}

const classe = new NomeClasse(72, 1.75);
console.log(classe.calcular());
