console.log("03 check");
// +1 증가 함수
const plus = () => {
    let spanNum = parseInt(document.getElementById("number").innerText);
    spanNum += 1;
    document.getElementById("number").innerText = spanNum;
};
// -1 감소 함수, 0이하로 감소 불가
const minus = () => {
    let spanNum = parseInt(document.getElementById("number").innerText);
    spanNum = spanNum > 0 ? spanNum-1 : spanNum;
    document.getElementById("number").innerText = spanNum;
};
// 초기화 함수
const reset = () => {
    document.getElementById("number").innerText = 0;
};
// 버튼 객체 불러오기
let btnP = document.getElementById("plus");
let btnM = document.getElementById("minus");
let btnR = document.getElementById("reset");
// 버튼에 클릭 이벤트 추가
btnP.addEventListener("click", plus);
btnM.addEventListener("click", minus);
btnR.addEventListener("click", reset);

