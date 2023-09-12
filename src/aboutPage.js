import Truck from "../src/images/sushiTruck.jpg";

function aboutPage() {
  const website = document.querySelector(`#content`);
  const contentBox = document.createElement("div");
  contentBox.classList.add("contentBox");
  website.appendChild(contentBox);
  const name = document.createElement("h1");
  name.classList.add("name");
  name.textContent = "Something Fishy";
  contentBox.appendChild(name);
  const homePage = document.createElement("BUTTON");
  homePage.classList.add("homePage");
  homePage.textContent = "Home";
  contentBox.appendChild(homePage);
  const menu = document.createElement("BUTTON");
  menu.classList.add("menu");
  menu.textContent = "Menu";
  contentBox.appendChild(menu);
  const about = document.createElement("BUTTON");
  about.classList.add("about");
  about.textContent = "About";
  contentBox.appendChild(about);
  const contact = document.createElement("BUTTON");
  contact.classList.add("contact");
  contact.textContent = "Contact";
  contentBox.appendChild(contact);

  const aboutList = document.createElement("div");
  aboutList.classList.add("aboutList");
  contentBox.appendChild(aboutList);
  const aboutHeader = document.createElement("h2");
  aboutHeader.classList.add("aboutHeader");
  aboutHeader.textContent = "About";
  aboutList.appendChild(aboutHeader);

  const aboutInfo = document.createElement("div");
  aboutInfo.classList.add("aboutInfo");
  aboutList.appendChild(aboutInfo);
  const aboutInfo1 = document.createElement("p");
  aboutInfo1.classList.add("aboutInfo1");
  aboutInfo1.textContent = "We love sushi. End of Story";
  aboutInfo.appendChild(aboutInfo1);
  const aboutInfo2 = document.createElement("p");
  aboutInfo2.classList.add("aboutInfo2");
  aboutInfo2.textContent =
    "Okay I guess we can say a little more. We wanted sushi and found it was not always available, this seems like a crime. So we did the natural thing, decided to make a 24/7 sushi truck.";
  aboutInfo.appendChild(aboutInfo2);

  const truckBox = document.createElement("div");
  truckBox.classList.add("truckBox");
  aboutList.appendChild(truckBox);
  const sushiTruck = document.createElement("img");
  sushiTruck.src = Truck;
  sushiTruck.classList.add("sushiTruck");
  truckBox.appendChild(sushiTruck);
}

export default aboutPage;
