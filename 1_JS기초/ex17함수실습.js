const makeBuger = (buger) => {
    console.log("🥯빵 깔기");
    console.log("토마토🍅 올기");
    console.log(buger + "패티🥩 올리기");
    console.log("빵 닫기");
    console.log("🍔" + buger + "버거🍔 완성!");
    return 5000;
};

const makeCoke = () => {
    console.log("🥤 콜라 완성 🥤");  
    return 2000;
};

const makePotato = () => {
    console.log("🍟 감자튀김 완성 🍟");  
    return 1500;
};

const bugerSet = (buger) => {
    let res = makeBuger(buger);
    res += makeCoke();
    res += makePotato();
    return res;
};

let buger = prompt("어떤 햄버거를 주문하시겠습니까? >>");
let setOrNot = prompt("세트 메뉴입니까, 단품입니까? >>");

let price = 0;
if (setOrNot === "세트") {
    price = bugerSet(buger);
} else {
    price = makeBuger(buger);
}

console.log("지불하실 가격은 " + price + "원 입니다.");