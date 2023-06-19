// Step 1 . 사진 두개 저장
// Step 2 . 사용자가 input 캐그 안에 입력한 값 감지
//         console창에 띄워주기
// Step 3. 조간에 맞게 사진을 배치한다
// ex) "아이유" => 아이유 사진을, "수지" => 수지 사진 띄워주기
// => img 의 src를 변경

// 만약 아이유, 수지 외 다른 텍스트 입력시, alert창으로 잘못입력하셨습니다!

let url1 = "../img/11.png";
let url2 = "../img/22.png";

document.getElementById("btn").addEventListener("click", ()=>{
    let inputName = document.getElementById("name").value;
    console.log(inputName);
    
    let img = document.getElementsByTagName("img")[0]; 
    // Tagname으로 가져오면 유사 배열
    console.log(img);
    
    if (inputName === "pinkJelly") {
        img.setAttribute("src", url1);
    } else if (inputName ==="cat") {
        img.setAttribute("src", url2);   
    } else {
        alert("잘못 입력하셨습니다.")
    }
    
    inputName.value = "";

});






