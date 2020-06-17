//header
const Header = document.querySelector(".header");

function openSubMenu() {
  const subMenu = document.getElementsByClassName("header_sub_menu");
  for (i = 0; i < subMenu.length; i++) {
    subMenu[i].style.display = "block";
  }
  Header.style.backgroundColor = "white";
}

function closeSubMenu() {
  const subMenu = document.getElementsByClassName("header_sub_menu");
  for (i = 0; i < subMenu.length; i++) {
    subMenu[i].style.display = "none";
  }
  Header.style.backgroundColor = "transparent";
}
//header
//sec1
let aaa = 0;
aaa++;
// 인덱스
function one() {
  let sec1_img = document.querySelector(".main_sec1_img");
  let showClass = "active";

  let active1 = document.querySelector(".main_sec1_btn1");
  active1.classList.add(showClass);
  let active2 = document.querySelector(".main_sec1_btn2");
  active2.classList.remove(showClass);
  let active3 = document.querySelector(".main_sec1_btn3");
  active3.classList.remove(showClass);
  sec1_img.style.backgroundImage = "url('image/slide_img1.jpg')";
  clearInterval(bbb);
}

function two() {
  let sec1_img = document.querySelector(".main_sec1_img");
  let showClass = "active";
  let active2 = document.querySelector(".main_sec1_btn2");
  active2.classList.add(showClass);
  let active3 = document.querySelector(".main_sec1_btn3");
  active3.classList.remove(showClass);
  let active1 = document.querySelector(".main_sec1_btn1");
  active1.classList.remove(showClass);


  sec1_img.style.backgroundImage = "url('image/slide_img2.jpg')";
  clearInterval(bbb);
}

function three() {
  let sec1_img = document.querySelector(".main_sec1_img");
  let showClass = "active";
  let active2 = document.querySelector(".main_sec1_btn2");
  active2.classList.remove(showClass);
  let active1 = document.querySelector(".main_sec1_btn1");
  active1.classList.remove(showClass);
  let active3 = document.querySelector(".main_sec1_btn3");
  active3.classList.add(showClass);
  sec1_img.style.backgroundImage = "url('image/slide_img3.jpg')";
  clearInterval(bbb);
}
// 넘기기
function num() {
  let sec1_img = document.querySelector(".main_sec1_img");
  let showClass = "active";
  if (aaa === 1) {
    sec1_img.style.backgroundImage = "url('image/slide_img2.jpg')";
    let active2 = document.querySelector(".main_sec1_btn2");
    active2.classList.add(showClass);
    let active1 = document.querySelector(".main_sec1_btn1");
    active1.classList.remove(showClass);
    let active3 = document.querySelector(".main_sec1_btn3");
    active3.classList.remove(showClass);
    aaa++;
  } else if (aaa === 2) {
    sec1_img.style.backgroundImage = "url('image/slide_img3.jpg')";
    let active2 = document.querySelector(".main_sec1_btn2");
    active2.classList.remove(showClass);
    let active1 = document.querySelector(".main_sec1_btn1");
    active1.classList.remove(showClass);
    let active3 = document.querySelector(".main_sec1_btn3");
    active3.classList.add(showClass);
    aaa++;
  } else if (aaa === 3) {
    sec1_img.style.backgroundImage = "url('image/slide_img1.jpg')";
    let active2 = document.querySelector(".main_sec1_btn2");
    active2.classList.remove(showClass);
    let active3 = document.querySelector(".main_sec1_btn3");
    active3.classList.remove(showClass);
    let active1 = document.querySelector(".main_sec1_btn1");
    active1.classList.add(showClass);
    aaa = 1;
  } else {
    console.log("ERROR");
  }
}
let bbb = setInterval(num, 2000);
// 정지
function pause() {
  clearInterval(bbb);
}
//sec2
function title() {
  let scrollPosition = window.scrollY;
  let title = document.querySelector(".main_sec2_title");
  if (scrollPosition > 400) {
    title.className = "main_sec2_title1";
  } else {
    return title;
  }
}
let ddd = setInterval(title, 500);

function product() {
  let scrollPosition = window.scrollY;
  let product = document.querySelector(".main_sec3_productWrap");
  if (scrollPosition > 1675) {
    product.style.top = "0";
    product.style.opacity = "1";
    product.style.transitionDuration = "1s";
  } else {
    return product;
  }
}
let eee = setInterval(product, 500);

// sec4_teapot 회전
let teapot_f = document.querySelector(".sec4_teapot_front");
let teapot_b = document.querySelector(".sec4_teapot_back");

function rotateEvent() {
    teapot_f.style.transform = "rotateY(-180deg)";
    teapot_b.style.transform = "rotateY(0deg)";
}
function rotateEventOut() {
    teapot_f.style.transform = "rotateY(0deg)";
    teapot_b.style.transform = "rotateY(-180deg)";
}