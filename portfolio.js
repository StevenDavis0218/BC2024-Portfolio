let aboutcontainer=document.querySelector(".aboutcontainer");
let homecontainer=document.querySelector(".homecontainer");
let homebutton=document.querySelector(".homebutton");
let aboutbutton=document.querySelector(".aboutbutton");
let hr2=document.querySelector(".hr2");
aboutbutton.addEventListener("click", function(){
    aboutcontainer.style.display="block";
    homecontainer.style.display="none";
});
homebutton.addEventListener("click",function(){
    aboutcontainer.style.display="none";
    homecontainer.style.display="block";
});