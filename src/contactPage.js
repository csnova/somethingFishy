import Loop from "../src/images/mapLoop.png";

function contactPage() {
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

  const mapLoop = document.createElement("img");
  mapLoop.src = Loop;
  mapLoop.classList.add("mapLoop");
  contentBox.appendChild(mapLoop);

  const contactList = document.createElement("div");
  contactList.classList.add("contactList");
  contentBox.appendChild(contactList);
  const contactHeader = document.createElement("h2");
  contactHeader.classList.add("contactHeader");
  contactHeader.textContent = "Contact";
  contactList.appendChild(contactHeader);
  const contactInfo = document.createElement("p");
  contactInfo.classList.add("contactInfo");
  contactInfo.textContent =
    "Just come find the truck! We play the sushi theme song on a loop and drive around Lake Union!";
  contactList.appendChild(contactInfo);
}

export default contactPage;
