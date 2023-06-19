console.log("check");


let btnM = document.getElementById("btnM")
let btnB = document.getElementById("btnB")

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");

btnM.addEventListener("click", ()=>{
    console.log("btnM");
    box2.style.marginLeft = "100px";
    box3.style.marginLeft = "200px";
    box4.style.marginLeft = "300px";

});

btnB.addEventListener("click", ()=>{
    console.log("btnB");

    box1.style.borderTopRightRadius = "50px";
    box1.style.borderBottomLeftRadius = "50px";
    box2.style.borderTopRightRadius = "50px";
    box2.style.borderBottomLeftRadius = "50px";
    box3.style.borderTopRightRadius = "50px";
    box3.style.borderBottomLeftRadius = "50px";
    box4.style.borderTopRightRadius = "50px";
    box4.style.borderBottomLeftRadius = "50px";
});
