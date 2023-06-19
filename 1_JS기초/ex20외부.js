document.write("<br>");
document.write("<br>반갑습니다아아");
document.write("<br>줄을 바꿔서 작성중임다 ㅎㅎ");
document.write("<br>잘 바뀌고 있쥬?");
document.write("<br>");

console.log("외부에서 작성된 문장입니다.");

// let anyInput = prompt("암거나 입력 >> ");

// if (anyInput) {
//     document.write(anyInput)
// } else {
//     // 암것도 입력 안하면<
//     document.write(anyInput + " dd")
// }


// window.location.href="https://www.naver.com/"
window.location.href="#"

document.write("<br>");
let num = 1;
let t = "<table border=1>";
for (let i = 1; i < 6; i++) {
    t+="<tr>";
    for (let j = 1; j < 6; j++) {
        t+=`<td>${num}</td>`;
        num++;
    }
    t+="</tr>";
}

t += "</table>";
console.log(t);
document.write(t);

let today = new Date();
let year =  today.getFullYear();
let month = today.getMonth();
document.write(today + ", " + year + ", " + month);