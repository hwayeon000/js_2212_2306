
// 카운터 만들기 실습
// 1. plus 버튼 누르면 1 증가
// 2. minus 버튼 누르면 숫자 1 감소

// 조건1) v-JS문법이 아닌 jQuery 이용할 것!!
// 조건2) 0 밑으론 버튼 적용되지 않도록 할 것 =>선택

let num = Number($("#num").text());

$("#plus").click(()=>{
    // num>=0?num += 1:0;
    num += 1;
    if (num >= 0)  $("#minus").attr("disabled", false) ;
    $("#num").text(num);
});


$("#minus").click(()=>{
    num>0?num -= 1:0;
    // num -= 1;
    if (num <= 0)  $("#minus").attr("disabled", true) ;
    $("#num").text(num);
});




