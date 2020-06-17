//header
const Header = document.querySelector(".header");

function openSubMenu() {
  const subMenu = document.getElementsByClassName("header_sub_menu");
  for (i = 0; i < subMenu.length; i++) {
    subMenu[i].style.display = "block";
  }
}

function closeSubMenu() {
  const subMenu = document.getElementsByClassName("header_sub_menu");
  for (i = 0; i < subMenu.length; i++) {
    subMenu[i].style.display = "none";
  }
}
//header
