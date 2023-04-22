function calcularIMC(peso: number, altura: number): number {
  return peso / (altura * altura);
}

function classificarIMC(imc: number): string {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    return "Peso normal";
  } else if (imc >= 24.9 && imc < 29.9) {
    return "Sobrepeso";
  } else if (imc >= 29.9 && imc < 34.9) {
    return "Obesidade grau 1";
  } else if (imc >= 34.9 && imc < 39.9) {
    return "Obesidade grau 2";
  } else {
    return "Obesidade grau 3";
  }
}

const peso: number = parseFloat(prompt("Digite seu peso (em kg):") ?? "");
const altura: number = parseFloat(
  prompt("Digite sua altura (em metros):") ?? ""
);

if (typeof peso === "number" && typeof altura === "number") {
  const imc: number = calcularIMC(peso, altura);
  const classificacao: string = classificarIMC(imc);

  console.log(`Seu IMC é: ${imc.toFixed(2)}`);
  console.log(`Classificação: ${classificacao}`);
}
