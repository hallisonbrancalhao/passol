import "./style.css";
// import "./exemplos/pessoa";
// import "./exemplos/listas";
// import "./exemplos/imc";
// import "./exemplos/classes";
// import "./exemplos/compras/index";
import { Produto, Carrinho } from "./exemplos/compras/index";

const form = document.querySelector("form")!;
form.onsubmit = (ev) => {
  ev.preventDefault();
  const data = new FormData(form);

  console.log(ev);
};
