console.log("check");

// 1. addBtn 버튼 클릭 시 
$("#addBtn").click(()=>{
    console.log("addBtn check");
    // 2. id가 container인 요소 안에 새로운 버튼 생성
    $("#container").html("<button id='newBtn'>새로운 버튼</button>");
});

// **새로 생긴 버튼에 이벤트를 걸어보자!
// 안됨 -> 동적 이벤트 바인딩
// 동적으로 추가된 이벤트
// .cilck() : 최초의 페이지를 로딩할 때 선언되어있던 요소에 이벤트 바인딩
//      => 그 이후 더이상 동적으로 바인딩하지 않음

// 🟥 이벤트!!! 참고!!!! 🟧
// .on("click", 클릭될대상, 함수) : 동적으로 추가된 요소에 이벤트 바인딩


// $("#newBtn").click(()=>{
//     console.log("newBtn");
// });

// 전체 훑어서 이미 생성된 후이기 때문에 인식 못함
// document로 접근해서 다시 확인해줘!
$(document).on("click", "#newBtn", ()=>{
    console.log("newBtn");
});












