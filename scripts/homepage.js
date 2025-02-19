const buttons = document.getElementsByClassName("button");

const getPageByInnerHTML = (innerHTML) => {
  let page;
  switch (innerHTML) {
    case "Hinário Adventista": {
      page = "templates/hinario.html";
      break;
    }
    case "Coletâneas": {
      page = "templates/coletanea.html";
      break;
    }
    case "Bíblia": {
      page = "templates/biblia.html";
      break;
    }
  }
  return page;
};

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => (window.location.href = getPageByInnerHTML(button.innerHTML)));
});
