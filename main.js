let arc1 = document.getElementById("circle-main");
let title = document.querySelector(".maintitle");
let circulo=document.getElementById("circulo")

/*
arc1.onclick = function () {
  title.innerHTML = "test";
};
*/



title.onclick=function(){
  title.innerHTML="Title after clicking it"
}

function changeColor(){
  title.innerHTML = "apiofjweb fgwrefggh";;
 if(circulo.id==="circulo"){
    circulo.id = "section-circle1a";
    title.innerHTML = "titel 3";
 }else{
  circulo.id = "circulo";
   title.innerHTML = "titel 4";
 }
  
}


arc1.onclick=changeColor;
