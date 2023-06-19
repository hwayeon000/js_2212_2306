console.log("check");
// 1-1. 좋아요 버튼 클릭 시, 버튼의 내용이 '좋아요 취소'로 변경 
// 1-2. 좋아요 버튼 클릭 시, 숫자 0을 1로 변경 

// 2-1. 좋아요 취소 버튼 클릭 시, 버튼의 내용이 '좋아요'로 변경 
// 2-2. 좋아요 취소 버튼 클릭 시, 숫자 1를 0으로 변경 

// 3-1. '댓글작성' 버튼 클릭 시, input 태그 안의 값 => .val()
// 3-2. id가 com인 div 태그 내부 뒤쪽에 누적 => .append() 
// 3-3. 단, 댓글 + 삭제 버튼 
//      이 때, 삭제버튼의 class는 removeCom 이라는 클래스 

// 4-1. 삭제 버튼을 클릭 시, => 동적 이벤트 바인딩 .on('click~')
//      => ex04동적이벤트.html 파일 참고 

// 4-2. 내가 누른 버튼의 부모요소를 삭제 => .parent().remove()

let num = 0;
$("#like").click(function(){ 
    if(num){
        $(this).text("좋아요");
        num -= 1;
        $("span").html(`&nbsp${num}&nbsp`);
    } else {
        $(this).text("좋아요취소");
        num += 1;
        $("span").html(`&nbsp${num}&nbsp`);
    };
});
// 좋아요 기능 끝

let txt = "";
let cnt = 1;
$(".writeCom").click(function(){
    txt = `<p>${$("input").val()}&nbsp<button class='removeCom'>삭제</button></p>`;
    console.log("input", txt);
    // $("p").html(txt);
    $("#com").prepend(txt);
    $("input").val("");
});
// 댓글 추가 기능 끝

// document로 문서 전체를 쓸어봐도되지만
// 바뀔 부분이 어디인지 안다면 그곳만 훑어도 됨
$("#com").on("click", ".removeCom", function(){
    console.log("removeCom");
    $(this).parent().remove();
});
// 댓글 삭제
