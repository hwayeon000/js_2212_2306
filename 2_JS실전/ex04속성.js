// 1. input 태그 내에 사용자가 입력한 값을 가져와보자
// 1-1) input 버튼 이벤트 열기



document.getElementById("inputBtn").addEventListener("click", ()=>{
    // 1-2) 안에 있는 값 가져오기
    // innerText 로는 input 태그 안에 값 못가져옴
    // 왜? input 태그는 컨텐츠가 없으니까!! innerText는 컨텐츠 가져오기!
    // 사용자가 input 태그 안에 입력한 글자들을 가져오려면 value라는 기능 사용
    // 요소.value
    
    let inputTag = document.getElementById("inputText");
    alert(inputTag.value);

    // 1-3) 안에 있는 값 세팅
    inputTag.value = '';
    // autofocus => 사용법 체크
});

// 2. img 태그에 접근하고 수정해보자!
document.getElementById("getImgBtn").addEventListener("click", ()=>{
    // 2-1) 현재 이미지태그의 속성값 출력
    let imgTag = document.getElementById("imgTag");
    console.log("ingTag:", imgTag);
    // Case 1. getAttribute("속성이름")
    console.log("ingTag:", imgTag.getAttribute("src"));
    console.log("ingTag id:", imgTag.getAttribute("id"));
    console.log("ingTag width:", imgTag.getAttribute("width"));

    // Case 2. .속성이름
    console.log("ingTag:", imgTag.src);
    console.log("ingTag:", imgTag.id);
    console.log("ingTag:", imgTag.width);

});


    // jpg, jpeg, png, gif ... (이런건 괜춘), 확인 : ctrl + 마우스 클릭
    // http://cdn.dealbada.com/data/editor/1706/131c55bcc5b1cf69c08430d4daca6ab3_1497268677_0785.jpg

    // 2-2) 현재 이미지를 다른 이미지로 변경해보자
    // setImgBtn

    document.getElementById("setImgBtn").addEventListener("click",()=>{
        console.log("ck");

        let imgTag = document.getElementById("imgTag");
        // Case 1 : setAttrubute("속성이름", "바꿀 값"); 이걸 더 많이 사용
        // imgTag.setAttribute("src", "http://cdn.dealbada.com/data/editor/1706/131c55bcc5b1cf69c08430d4daca6ab3_1497268677_0785.jpg");

        // Case 2 : .속성이름 = "값"
        imgTag.width = "400";
        imgTag.src = "http://cdn.dealbada.com/data/editor/1706/131c55bcc5b1cf69c08430d4daca6ab3_1497268677_0785.jpg";


    });








    








