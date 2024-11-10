const content = "I'm Hwi-Gyeong";
const text = document.querySelector(".title h1");
let textIdx = 0;

// 타이핑 효과 함수
function typing() {
    if (textIdx < content.length) {
        text.innerHTML += content[textIdx++];
        setTimeout(typing, 200); // 타이핑 속도 200ms
    } else {
        // 타이핑이 끝나면 1초 후에 초기화하고 다시 시작
        setTimeout(() => {
            text.innerHTML = ""; // 텍스트 초기화
            textIdx = 0; // 인덱스 초기화
            typing(); // 다시 타이핑 시작
        }, 1000); // 1초 동안 완료된 텍스트 유지
    }
}

// 타이핑 시작
typing();



// 스크롤에 반응하는 애니메이션
let aboutCard = document.querySelector(".about_profile");

let goalCard1 = document.querySelector(".goal_detail_1");
let goalCard2 = document.querySelector(".goal_detail_2");
let goalCard3 = document.querySelector(".goal_detail_3");

let contactTilte = document.querySelector("#contact .category h2");
let contactLink = document.querySelector("#contact .link ul");

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    if (value < 400){
        aboutCard.style.animation = "about_backslide 0.5s ease-out forwards";
    } else {
        aboutCard.style.animation = "about_slide 0.5s ease-out"
    };

    if(value > 1950){
        goalCard1.style.animation = "show 0.3s linear forwards";
        goalCard2.style.animation = "show 0.8s linear forwards";
        goalCard3.style.animation = "show 1.2s linear forwards";
    } else{
        goalCard1.style.animation = "out 0.3s linear forwards";
        goalCard2.style.animation = "out 0.8s linear forwards";
        goalCard3.style.animation = "out 1.2s linear forwards";
    }

    if(value > 2500) {
        contactTilte.style.animation = "grow 0.8s linear";
        contactLink.style.animation = "grow 0.8s linear";
    } else{
        contactTilte.style.animation = "grow-out 0.5s linear";
        contactLink.style.animation = "grow-out 0.5s linear";
    };

})


