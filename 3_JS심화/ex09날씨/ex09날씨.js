// API CALL 1. 위도 경도 기반
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


// API CALL 2. 도시 이름 기반
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


let apiKey = 'd98ae2c3057b1f588501393dc077fc5f'

/** 현재 위치의 날씨를 호출해주는 함수 */
const callCurrentWeather=()=>{
    // 1. 사용자의 현재 위치 요청 => 위도, 경도
    navigator.geolocation.getCurrentPosition(function(pos){
        console.log("get position:", pos);
    });
    // 2. url을 수정 -내가 가져온 데이터로
    // 3. 통신 getData
    
    // ** localhost 환경에서만 geolocation 이 가능
};

/** 도시의 날씨를 호출해주는 함수 */
const callCityWeather=(city)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    console.log("city name:", city)

    fetch(url)
    .then(res => res.json())
    .then(res => {
        // console.log("result :", res);

        // weatherOpenAPI로 가져오는 온도는 캘빈온도
        // 캘빈온도 - 273 = 섭씨온도

        let code = `<h2>현재 ${res.name}의 날씨는 ${parseInt(res.main.temp - 273)}도 입니다.</h2>`
        document.getElementById("result").innerHTML = code;
    })

};


// Case 2 jQuery + ck
$(".btn-check").click((e)=>{
    console.log("ck:", e.currentTarget.id);
   let answer = e.currentTarget.id;
   var anText = $("label[for='"+answer+"']").text(); 
   console.log("요기 체크:",anText);

   callCityWeather(anText);

});



// $("#vbtn-radio1").click(function(){
//     var answer = $(this).attr("id");
// 	var anText = $("label[for='"+answer+"']").text(); 
// 	console.log("요기 체크:",anText);

// });