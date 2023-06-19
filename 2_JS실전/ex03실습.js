// ** 좋아요/싫어요 버튼 만들기 실습
// 좋아요 버튼 클릭 시, 숫자 1씩 증가 
// 싫어요 버튼 클릭 시, 숫자 1씩 감소 
// 단, 0 밑으로는 내려가지 않도록 


// Step1. 좋아요를 눌렀을 때 호출할 'like' 함수 생성
//1. like 함수 생성
//2. 호출 될 때마다 id가 number인
//   span태그 안의 값을 1씩 증가 

// Step2. 싫어요를 눌렀을 때 호출할 'hate' 함수 생성
// 1. hate 함수 생성 
// 2. 호출 될 때마다 id가 number인 
//    span태그 안의 값을 1씩 감소 
// 3. 단, 0이하로는 로직이 실행되지 X 

// Step3. 각각 버튼에 이벤트 
// 1. 좋아요 버튼을 클릭했을 때, like함수를 호출 
// 2. 싫어요 버튼을 클릭했을 때, hate 함수를 호출 

// ** Hint! 
// 1. innerText로 가져온 컨텐츠는 문자의 형태
// 2. 문자의 형태는 연산이 불가능 => 숫자로 바꿔줄 것 

// const like = () => {
//     let spanNum = parseInt(document.getElementById("number").innerText);
//     spanNum += 1;
//     document.getElementById("number").innerText = spanNum;
// };

// const hate = () => {
//     // alert("hate 확인")
//     let spanNum = parseInt(document.getElementById("number").innerText);
//     spanNum = spanNum > 0 ? spanNum-1 : spanNum;
//     document.getElementById("number").innerText = spanNum;
// };

// let btnLike = document.getElementById("like");
// let btnHate = document.getElementById("hate");

// btnLike.addEventListener("click", like);
// btnHate.addEventListener("click", hate);

const like = (num) => {
    num += 1;
    return num
};

const hate = (num) => {
    num = num>0?num-1:0;
    return num
};

let num = parseInt(document.getElementById("number").innerText);
// id에 따라 구분
// $(".btnLikeHate").on("click", function(e){
//     console.log("체크, ", e.target.id);
//     num = e.target.id === "like" ?  like(num) : hate(num) ;
//     document.getElementById("number").innerText = num;
// });

// 내부 value 값
$('.btnLikeHate').on('click', (e) => {
    console.log(e.target.value);
    num = e.target.value === "vLike" ?  like(num) : hate(num) ;
    document.getElementById("number").innerText = num;
  });



// let btnLike = document.getElementById("like");
// let btnHate = document.getElementById("hate");

// 버튼 인식은 되나 두 개 모두에 이벤트 리스너가 안달림
// let eBtn = document.getElementsByTagName("button");
// console.log(eBtn);
// eBtn.addEventListener("click", (e)=>{
//     // console.log("event: ", e);  // 받아온 e 전체 확인
//     console.log("event: ", e.target); // 내가 뭘 가져온 지 헷갈릴 때 체크하기좋음
// });


// btnLike.addEventListener("click", like(parseInt(document.getElementById("number").innerText)));
// btnHate.addEventListener("click", hate(parseInt(document.getElementById("number").innerText)));



// ============= 연습 ============================

// let today = new Date();
// let year = today.getFullYear();
// let month = today.getMonth();
// let nowDay = today.getDay();
// let hour = today.getHours();
// let min = today.getMinutes();
// let sec = today.getSeconds();

// document.write("<br><br>")

// document.write("<h1>오늘의 날짜</h1>")
// document.write(`현재 ${year}년 ${month}월 ${nowDay}일 
// ${hour}시 ${min}분 ${sec}초 입니다..`)

