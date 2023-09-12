import "./style.css";
import homePage from "./homePage";
import menuPage from "./menuPage";
import aboutPage from "./aboutPage";
import contactPage from "./contactPage";

homePage();

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    changePage(button.className);
  });
});

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function changePage(className) {
  removeElementsByClass("contentBox");
  if (className === "homePage") {
    homePage();
  }
  if (className === "menu") {
    menuPage();
  }
  if (className === "about") {
    aboutPage();
  }
  if (className === "contact") {
    contactPage();
  }
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      changePage(button.className);
    });
  });
}
