// Case 1) jQuery + Ajax 
    // 1. getData 라는 함수를 선언 
    //      3. getData 함수를 구성 
    //      3-1) 영화진흥위원회 API 데이터를 가져올 것 
    //      3-2) 순위의 rank, movieNm(영화명), openDt (개봉일자)

    //      4. 내가 가져온 데이터로 표를 구성 => id가 container인 div 
    //          => .html()

    // 힌트! 
    // 1) table은 반복되지 않고, tr은 반복 
    // 2) 누적이 안되면 변수 안에 누적을 하면 된다. 

    // 2. id가 btn인 버튼을 눌렀을 때, getData라는 함수를 호출 

let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=cb10ac0f937bfd8efe5733f5aee51c5e&targetDt=";
let movieDataList = [];
let wantData = ["rank", "movieNm", "openDt"];
let reqData = "<table border='1px solid black'>";
const getData = (date)=>{
    fetch(url + date)
    .then(res => res.json())
    .then(data => {
        console.log("통신 성공", data);
        movieDataList = data.boxOfficeResult.weeklyBoxOfficeList;
        console.log(movieDataList);
        for (let i = 0; i < movieDataList.length; i++) {
            reqData += "<tr>"
            for (let j = 0; j < wantData.length; j++) {
                console.log(movieDataList[i][wantData[j]]);
                reqData += `<td>${movieDataList[i][wantData[j]]}</td>`;
            };
            reqData += "</tr>"
        };
        reqData += "</table>"
        $("#container").html(reqData);
        // $("#container").append(reqData);
    })

    .catch(err => {
        console.log("통신 실패!");
    });
};


$("#btn").click(()=>{
    let date = "20200101";
    getData(date);
    // reqData = "<table border='1px solid black'>";
});

$("#btnDate21").click(()=>{
    let date = "20210101";
    getData(date);
    // reqData = "<table border='1px solid black'>";
});

$("#btnDate22").click(()=>{
    let date = "20220101";
    getData(date);
    // reqData = "<table border='1px solid black'>";
});

$("#btnDate23").click(()=>{
    let date = "20230101";
    getData(date);
    reqData = "<table border='1px solid black'>";
});