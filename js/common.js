//header
const Header = document.querySelector(".header");

function openSubMenu() {
  const subMenu = document.getElementsByClassName("header_sub_menu");
  for (i = 0; i < subMenu.length; i++) {
    subMenu[i].style.display = "block";
  }
  //   Header.style.backgroundColor = "white";
}

function closeSubMenu() {
  const subMenu = document.getElementsByClassName("header_sub_menu");
  for (i = 0; i < subMenu.length; i++) {
    subMenu[i].style.display = "none";
  }
  //   Header.style.backgroundColor = "transparent";
}
//header
