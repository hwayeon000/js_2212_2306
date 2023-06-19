// 두가지 방법을호 비동기 통신을 해보자

let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=cb10ac0f937bfd8efe5733f5aee51c5e&targetDt=20120201";

const getDataAjax = ()=>{
    console.log("getDataAjax");
    // 통신방법 Case 1 . AJjax
    // - 장점 : jQuery를 통해 쉽게 구현이 가능
    // - 단점 : jQuery가 없다면 코드가 복잡하다
    
    $.ajax({
        // url : 요청 서버 경로 (외부 주소, 내부 파일)
        // type : 요청 방식(get/post) : 요청을 주고 받을 때 post, 받기만 할거면 get
        // success : 성공했다면, error : 실패했다면
        url : url,
        type : "get",
        success : (res)=>{
            // {객체는}.으로 접근
            // [배열]은 [인덱스]로 접근
            console.log("통신 성공!", res.boxOfficeResult.weeklyBoxOfficeList[0]);
            
        },
        error : ()=>{
            console.log("통신 실패");
        }

        // 만약 보내줄 데이터가 있다면
        // data : { "name" : "phy" , "id" : "parkhy79" }        
    });

};
const getDataFetch = ()=>{
    console.log("getDataFetch");
    // 통신방법 Case 1 . Fetch
    // 장점 : jQuery 필요X, JS내장 라이브러리, 별도 설치X, 속도가 빠르다
    // 단점 : 디테일한 설정이 부족 (react에서는 axios라는 라이브러리 더 선호)

    // 요청 서버 경로
    // 내가 가져온 응답 결과를 json 형태로 파싱
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // 요청 성공 시
        console.log("통신 성공", data);
    })
    .catch(err => {
        // 요청 실패시
        console.log("통신 실패!");
    
    });


    // 만약 데이터를 보내줘야 할 때
    // fetch(url,{
    //     method : "post",
    //     body : "123"
    // });

};