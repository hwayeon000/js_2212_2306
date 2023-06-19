// 버튼 클릭 시 h1태그의 디자인을 수정

// 1. change함수 정의
// function change (){}
const change = ()=>{
    console.log("change function")

    // a. 스타일을 바꿔 줄 요소를 가져와야 한다.
    let h1Tag = document.getElementById("h1Tag");

    // b. 내가 가져온 요소가 어떤 스타일을 가지고있는가?
    console.log(h1Tag.style);
    
    // c. 내가 원하는 속성 확인하기
    // 요소.style.속성
    console.log(h1Tag.style.color);
    
    // d. 내가 원하는 디자인으로수정
    h1Tag.style.color = "green";
    console.log(h1Tag.style.color);

    // Q. h1Tag의 배경색을 노랑
    h1Tag.style.backgroundColor = "yellow";


};

// 2. button 클릭 시 change함수 호출

// +) 계층적인 구조로 html 요소를 가져오고 싶을 때
// 단, document 객체에 접근해야 하는 건 동일!
document.querySelector("#btn").addEventListener("click", change);


// 만약, querySelector를 이용하여 여러 요소를 가져오고 싶다면
// querySelectorAll("선택자")
// => NodeList
//      => 유사 배열이 아닌 찐 배열! 배열의 기능들 다 사용 가능!
let body = document.querySelectorAll("body");
console.log(body)











