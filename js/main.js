let aaa = 0;
aaa++;
// 인덱스
function one() {
    let sec1_img = document.querySelector(".main_sec1_img");
    sec1_img.style.backgroundImage = "url('../image/slide_img1.jpg')";
    clearInterval(bbb);
}

function two() {
    let sec1_img = document.querySelector(".main_sec1_img");
    sec1_img.style.backgroundImage = "url('../image/slide_img2.jpg')";
    clearInterval(bbb);
}

function three() {
    let sec1_img = document.querySelector(".main_sec1_img");
    sec1_img.style.backgroundImage = "url('../image/slide_img3.jpg')";
    clearInterval(bbb);
}
// 넘기기
function num() {
    let sec1_img = document.querySelector(".main_sec1_img");

    if (aaa === 1) {
        sec1_img.style.backgroundImage = "url('../image/slide_img2.jpg')";
        aaa++;
    } else if (aaa === 2) {
        sec1_img.style.backgroundImage = "url('../image/slide_img3.jpg')";
        aaa++;
    } else if (aaa === 3) {
        sec1_img.style.backgroundImage = "url('../image/slide_img1.jpg')";
        aaa =1;
    } else {
        console.log("ERROR");
    }
}
let bbb= setInterval(num, 2000);
// 정지
function pause(){
    clearInterval(bbb);
}
