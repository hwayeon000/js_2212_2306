// JQuery 문법의 기호 : $

// 1. 내가 원하는 요소를 JS에서 활용할 수 있도록 요소를 가져오기
// v-JS : document.getElementBy~
// JQuery : $('선택자')
let element = $('#abc');
console.log("요소 :", element);

// 2. 내가 원하는 요소 안의 내용만 가져오기
// v-JS : .innertext
// jQuery : .text()

console.log("텍스트만 :", element.text());

// 3. 내가 원하는 요소 수정해보기
// v-JS : .innertext = "바꿀 값"
// jQuery : .text('바꿀 값)  =>text함수의 매개변수로 값을 넣어준다
// element.text("text로 바꾼 값")

// 3-2. 태그까지 포함해서 수정하기
// v-JS : .innerHTML = "바꿀 값"
// jQuery : .html("바꿀 값")
element.html("<h1>💚html 바꾼 값💛</h1>");

// 4. 버튼을 눌렀을 때, input태그 값으로 내용 변경
// v-JS : .addEventListener("click", ()=>{})
// jQuery : .click((=>{}));
$("#btn").click(()=>{
    console.log("btn click check");
    
    // 5. input태그 값 가져오기
    // v-JS : .value
    // jQuery : .val()
    let val = $("#inputTxt").val();
    console.log("input vla :", val);

    // 5-2. 내가 가져온 imput값으로 텍스트 설정
    // - 내가 가져온 요소의 $("선택자")
    // - 내용을 변경 
    element.html("<h1>💚" + val + "💛</h1>");

    // 5-3. input value값 초기화
    $("#inputTxt").val("");

});

// 6. 스타일 변경
// v-JS : .style.속성 = "값"
// jQuery : .css("속성","값")
$("#style-btn").click(()=>{
    console.log("style-btn check");
    element.css("color", "hotpink");
});

// 7. 속성 변경
// v-JS : .속성, setAttriburte
// jQuery : .attr()
$("#pic-btn").click(()=>{
    console.log("pic-btn check");
    let url = "https://img.mbn.co.kr/filewww/news/2022/10/13/166561649163474a6b8a175.jpg";
    let url1 = "https://img2.quasarzone.co.kr/img/data/img/editor/1812/1812___285937203.png";

    $("#pic").attr("src", url1);
});



