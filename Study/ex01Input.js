console.log("connect!")

let txt = "";
let btn = document.getElementById("btn");
// btn.add
btn.addEventListener("click", ()=>{
    txt += document.getElementById("input").value +  "<br>" ;
    document.getElementById("inputTxt").innerHTML = txt;
    document.getElementById("input").value = "";

});


let txt1 = document.getElementById("txtarea");
let submit = document.getElementsByTagName("input");
console.log(submit);
