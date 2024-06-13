const tabMenu = document.querySelectorAll(".js-tabmenu li");
const sectionMenu = document.querySelectorAll(".js-tabcontent section");

if (tabMenu.length && sectionMenu.length) {
  sectionMenu[0].setAttribute("class", "ativo");
  const addClass = (value) => {
    sectionMenu.forEach((item) => {
      item.removeAttribute("class");
    });
    sectionMenu[value].setAttribute("class", "ativo"); //Adiciona a classe com base no index da NodeList
  };

  //Adicionar evento de clique;

  tabMenu.forEach((item, index) => {
    item.addEventListener("click", () => {
      //Clicando com base no index da imagem adicionando a class. Como temos a mesma quantidade de imagens e texto fica mais tranquilo. Quando clicar em uma imagem, adiciona a class ativo com a função addClass com base naquele item total.
      addClass(index);
    });
  });
}

//Accordion List -> Making solo
const dropdown = () => {
  const getDry = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  getDry[0].setAttribute("class", activeClass);
  getDry[0].nextElementSibling.setAttribute("class", activeClass);

  const addClass = (idx) => {
    getDry[idx].classList.toggle("ativo");
    getDry[idx].nextElementSibling.classList.toggle("ativo");
  };

  getDry.forEach((item, idx) => {
    item.addEventListener("click", () => {
      addClass(idx);
    });
  });
};

dropdown();

//---- Scroll suave ----
const scrollSuave = () => {
  const queryA = document.querySelectorAll(".menu a");
  console.log(queryA);

  const scrollingPrevent = (event) => {
    event.preventDefault();
    const id = event.currentTarget.getAttribute("href");
    const section = document.querySelector(id);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    //Forma alt
    // const top = section.offsetTop;
    // window.scrollTo({
    //   top: top,
    //   behavior: "smooth",
    // });
  };

  queryA.forEach((item) => {
    item.addEventListener("click", scrollingPrevent);
  });
};

scrollSuave();

//---- Animação ao Scroll (Ultima aula do módulo);

const scrollXY = () => {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMath = window.innerHeight * 0.75;

    const animaScroll = () => {
      sections.forEach((item) => {
        const sectionDiff = item.getBoundingClientRect().top - windowMath;
        console.log(sectionDiff);
        if (sectionDiff < 0) {
          item.classList.add("ativo");
        } else {
          item.classList.remove("ativo");
        }
      });
    };

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
};

scrollXY();
