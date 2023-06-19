// event = 특정 요소에 원하는 이벤트 부여!
// ex) click, mouseover, mouseout, change ...

// eventHandler vs eventListener
// 1. eventHandler
// - 하나의 요소 당 하나의 이벤트만 부여 가능
// 2. eventListener
// - 하나의 요소에 다중 이벤트 부여 가능

// 실습 : 버튼들을 클릭했을 때, id가 'txt'인 요소의 컨텐츠 값을
//       팝업창으로 띄워줄 것

// 실습을 위한 준비물 : 팝업창을 출력하는 함수 정의
const popUp = () => {
    let h1Tag = document.getElementById("txt");
    alert(h1Tag.innerText);
};
// test를 위한 popUp2
const popUp2 = () => {
    let h1Tag = document.getElementById("txt");
    alert("popUp2 " + h1Tag.innerText);
};

// Case1. html 태그에 직접 작성하는 방법
// <button onclick="popUp()">직접 작성</button>
// 단점 : 하나의 이벤트만 처리 가능, 함수명 노출

// Case2. eventHandler
// "핸들러용 버튼" 버튼 클릭 했을때, popUp 함수 호출
// 단점 : 하나의 이벤트만 처리 가능
let btn1 = document.getElementById("btn_han");
btn1.onclick = popUp;
btn1.onclick = popUp2;

// Case3. eventListener
// "리스너용 버튼" 클릭 했을 때, popUp 함수 호출
// 장점 : 다중 이벤트 등록 가능
// 단점 : 코드가 길어짐
let btn2 = document.getElementById("btn_lis");
btn2.addEventListener("click", popUp);
btn2.addEventListener("click", popUp2);

// ** 함수 직접 등록 (익명함수)
btn2.addEventListener("click", ()=>{
    alert("직접 등록한 함수");
});

btn1.onclick = () => {
    alert("직접 등록한 함수 -핸들러~");
};

// Case4. 이벤트 객체 (알아두면 좋음!!)
// 이벤트가 발생하는 주체와 내용을 알 수 있다.
// target = 이벤트 발생한 주체
let eventBtn = document.getElementById("btn_event");
eventBtn.addEventListener("click", (e)=>{
    // console.log("event: ", e);  // 받아온 e 전체 확인
    console.log("event: ", e.target); // 내가 뭘 가져온 지 헷갈릴 때 체크하기좋음
    console.log("event 주체의 내용: ", e.target.innerText);
});


