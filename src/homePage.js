import Map from "../src/images/map.png";
import Restaurant from "../src/images/restaurant~2.jpg";

export default function homePage() {
  const website = document.querySelector(`#content`);
  const contentBox = document.createElement("div");
  contentBox.classList.add("contentBox");
  website.appendChild(contentBox);
  const name = document.createElement("h1");
  name.classList.add("name");
  name.textContent = "Something Fishy";
  contentBox.appendChild(name);
  const menu = document.createElement("a");
  menu.classList.add("menu");
  menu.textContent = "Menu";
  contentBox.appendChild(menu);
  const about = document.createElement("a");
  about.classList.add("about");
  about.textContent = "About";
  contentBox.appendChild(about);
  const reviews = document.createElement("a");
  reviews.classList.add("reviews");
  reviews.textContent = "Reviews";
  contentBox.appendChild(reviews);
  const contact = document.createElement("a");
  contact.classList.add("contact");
  contact.textContent = "Contact";
  contentBox.appendChild(contact);
  const header = document.createElement("h2");
  header.classList.add("header");
  header.textContent = "Sushi You Dream About";
  contentBox.appendChild(header);
  const info = document.createElement("p");
  info.classList.add("info");
  info.textContent =
    "Do you wake up in the middle of the night dreaming of sushi? So do we. Now to easy your mind we introduce 24 hr sushi at our restaurant Something Fishy! Fresh fish when you crave it most!";
  contentBox.appendChild(info);
  const map = document.createElement("img");
  map.src = Map;
  map.classList.add("map");
  contentBox.appendChild(map);
  const restaurant = document.createElement("img");
  restaurant.src = Restaurant;
  restaurant.classList.add("restaurant");
  contentBox.appendChild(restaurant);
  console.log("homePage.js is loading");
}
