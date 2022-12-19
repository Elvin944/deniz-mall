let bir=document.querySelector("#bir");
let iki=document.querySelector("#iki");
let uc=document.querySelector("#uc");
let dord=document.querySelector("#dord");
let bes=document.querySelector("#bes");
let image=document.querySelector("#image");

bir.onclick=function () {
    image.src="assets/img/car.jpg";
};

iki.onclick=function () {
    image.src="assets/img/cat.jpg";
};

uc.onclick=function () {
    image.src="assets/img/piano.jpg";
};

dord.onclick=function () {
    image.src="assets/img/snow.jpg";
};

bes.onclick=function () {
    image.src="assets/img/thumb-1920-749807.png";
};


let plus=document.querySelector("plus");
let minus=document.querySelector("minus");


plus.onclick("click", function (){
    this.nextElementSibling,style.transform="scale(1.8)";
});