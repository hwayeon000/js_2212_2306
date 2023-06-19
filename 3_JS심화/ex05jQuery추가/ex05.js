console.log("check")

// 1. 요소 내부 앞에 내용 추가 : prepend()
$("#btn1").click(()=>{
    $("div").prepend("<img src='../img/pic2.gif'>");
});
// 2. 요소 내부 뒤에 내용 추가 : append()
$("#btn2").click(()=>{
    $("div").append("<img src='../img/pic3.gif'>");
});
// 3. 요소 외부 앞에 내용 추가 : before
$("#btn3").click(()=>{
    $("div").before("<img src='../img/pic4.gif'>");
});
// 4. 요소 외부 뒤에 내용 추가 : after
$("#btn4").click(function(){
    $("div").after("<img src='../img/pic5.gif'>");
});

// 5. 요소 지우기 : remove()
$("#btn5").click(()=>{
    $("#img1").remove();
});
// 6. 요소 비우기 : empty()
$("#btn6").click(()=>{
    $("div").empty();
});

// 7. class를 추가하기, check 버튼 같은거 만들때
$("#btn7").click(()=>{ $("img").addClass("newClass") });
// 8. Class 삭제
$("#btn8").click(()=>{ $("img").removeClass("newClass") });

// 9. 부모 요소 다루기 💛이거 꽤 자주 시용한다고 함...ㅎ
$("#btn9").click(()=>{ $("div>img").parent().css("backgroundColor", "pink") });

// this 문법
// *** Arrow Function( ()=>{} )과 함께 사용 XX !!
$("#btn10").click(function(){
    // $("#btn10").text("버튼바꾸기");
    $(this).text("버튼바꾸기");
})











// 바크롸연씨 전에 있던책까지 들고다니다고? 바크롸연씨 대단해
// 모씨쏘 이거때매 그거... 오류 뜨면 좋겠다 >< 
// 바크롸연씨 아 봤어? 눈이 조으시내용 허미미ㅣ 들켜따ㅏㅏㅏ 
// 바크 롸 연  몽 수 ㅔㄹ 먹 는 다 
// 바 크 롸연 몽 수ㅜㅜㅞㄹ 먹 는 다 
// 존 맛  탱 이라고 한다 
// 여기 꺠나 높네 .. 바클 ㅘㄹ연씨
// 이거.. 커피.. 싸개? 귀엽네 
// 아 그치 홀더 기엽네 .. 
// 바크과연의 일기
// 오늘은 바크과연의 날 바크과연이 콰아아아앙!
// 쿠아아아앙! 바크과연은 짱짱 키아아아악!
// 으아아아아아아




