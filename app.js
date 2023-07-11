// link to scrolling
let section = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header ul a");
// menue
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
  sidebar.classList.toggle("active");
};

// link to scrolling
window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let ofset = sec.offsetTop;
    let hight = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= ofset && top < ofset + height) {
      navLink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header ul a [href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Dark mode switcher

function switchIAT() {
  var iconElement = document.getElementById("l_icon");
  var textElement = document.getElementById("darkmode_text");
  var root = document.documentElement;

  // icon
  if (iconElement.classList.contains("bx-brightness-half")) {
    iconElement.classList.remove("bx-brightness-half");
    iconElement.classList.add("bxs-brightness-half");
  } else {
    iconElement.classList.remove("bxs-brightness-half");
    iconElement.classList.add("bx-brightness-half");
  }

  // text
  if (textElement.textContent === "Light") {
    textElement.textContent = "Dark";
  } else {
    textElement.textContent = "Light";
  }
}
// color
const dark_mode = document.getElementById("Light");
dark_mode.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
});
