// Step 1. moveLeft 함수
// 1-1) id가 horse인 말을 js로 가져온다
// 1-2) moveLeft 호출 시, 말을 왼쪽으로 50px 이동
// 단, 말이 배경을 벗어나지 않도록!
// 0

// Step 2. moveRight 함수
// 2-1) id가 horse인 말을 js로 가져온다
// 2-2) moveRight 호출 시, 말을 오른쪽으로 50px 이동
// 단, 말이 배경을 벗어나지 않도록!
// 1200

// 주의점! btn left는 하나의 클래스 이름이 아니라 
// btn이라는 클래스, left라는 글래스 둘다 포함
// btn 이라는 클래스를 가진 0번째, 1번째

// Step 3. left버튼 누르면 moveLeft
// Step 4. Right버튼 누르면 moveRight
// 

// ** 힌트 
// 1. 오른쪽과 왼쪽은 결국 하나의 축으로 이어져 있다. 
// 2. js로만 하는게 헷갈리면 css로 가서 이것저것 추가해보면서
//     내가 해줘야될 스타일을 입력할 것 
// 3. console창 잘 찍어서 확인해볼 것! 

console.log("js connect!")

let move = 0;

const moveLeft =()=>{
    console.log("change moveLeft")
    move = move<1200?move+=50:1200;
    img.style.right = move + "px";
};

const moveRight =()=>{
    console.log("change moveRight")
    move = move>0?move-=50:0;
    img.style.right = move + "px";
};

let btn = document.getElementsByClassName("btn");
console.log(btn[0]);
let img = document.getElementById("horse");
console.log(img);

// Left : addListener는 지속 주시(호출)을 하고 있기 때문에 값만 넣어둠(?)
btn[0].addEventListener("click", moveLeft);
// Right
btn[1].addEventListener("click", moveRight);


// ++) 추가 기능 : 중요도 XXX : animate
const jump=()=>{
    console.log("jump function!");

    // 어떻게 움직일지(배열), 시간(객체)  / 1000 = 1초
    // animate([],{})
    //      => 단, 수치화 할 수 있는 속성만 가능
    // [] => 움직일 속성
    // {} => 설정 (몇초?)
    img.animate(
        [{bottom:"200px"},{bottom:"400px"},{bottom:"200px"}],
        {duration : 700});
};


// +) 추가 기능 : 키보드로 조작하기
document.getElementsByTagName("body")[0].addEventListener("keydown",(e)=>{
    console.log("keydown Event!!", e);
    if(e.key === "ArrowLeft") moveLeft();
    else if (e.key === "ArrowRight") moveRight();
    else if (e.key === " ") jump();
});






