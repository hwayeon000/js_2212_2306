// 🟡 Step1.id가 h1tag인 요소를 가져와보자
// 1) HTML에 접근 document
// 2) 객체에 접근 .
// 3) 가지고오다 get
// 4) 요소를 Element
// 5) ~를 통해서 by~

let h1tag = document.getElementById("h1tag");

console.log("내가 가져온 요소:", h1tag);
console.log("내가 가져온 요소 타입:" + h1tag);

// 🟡 Step2. 내가 가지고 온 요소에서 컨텐츠만 추출해보자
// "요소 안에 있는텍스트만 보여줘!"
// = 안에 있는 (inner) + 텍스트만(text) => innerText
let h1Content = h1tag.innerText;
console.log("innertext", h1Content);

// 🟡 Step3. 내가 가져온 요소의 컨텐츠를 수정해보자!

// 단순 텍스트만 수정 -> innerText(글자만)
// HTML 요소를 포함해서 수정 => innerHTML(태그 포함)
// h1tag.innerText = "<a href='#'>안녕히 가세요!<a>";
h1tag.innerHTML = "<a href='https://www.naver.com/'>안녕히 가세요!<a>";

// 클래스를 통해서 요소 가져오기!
// 🟡 Step1. class가 num인 요소들에 접근
// 1. HTML 문서에 접근 => 최상위 객체에 접근 => document.
// 2. 요소들을 가져오겠다 => getElements
// 3. 클래스를 통해서 -> byClassName

// HtmlCollection : 유사 배열
let pTag = document.getElementsByClassName("num");
console.log("클래스를 통해 가져온 요소들:", pTag);
console.log("클래스를 통해 가져온 요소 1:", pTag[1]);

// 🟡 Step2. 값을 수정해보자
console.log(pTag[1].innerText);
pTag[1].innerText = "수정된 p태그";

// 🟡 Step3. class가 num인 모든 데이터를 가져와보자
for (let i = 0; i < pTag.length; i++) {
    console.log("for문", pTag[i].innerText);
    pTag[i].innerText = i + "번 태그에 접근중임다!";
}




// 자바?
// 알고리즘 : 
// 운영체제 : 
