const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imgBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

  const modoEscuroAtivo = body.classList.contains("modo-escuro");

    //OPCIONAL: body.classList.toggle("modo-escuro");

  if (modoEscuroAtivo) {
    body.classList.remove("modo-escuro");

    imgBotaoTrocaDeTema.setAttribute("src", "./src/img/sun.png");
  } else {

    body.classList.add("modo-escuro");

    imgBotaoTrocaDeTema.setAttribute("src", "./src/img/moon.png");
  }
});