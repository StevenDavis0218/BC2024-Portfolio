let aboutcontainer=document.querySelector(".aboutcontainer");
let homecontainer=document.querySelector(".homecontainer");
let homebutton=document.querySelector(".homebutton");
let aboutbutton=document.querySelector(".aboutbutton");
let hr2=document.querySelector(".hr2");
let contactbutton=document.querySelector(".contactbutton");
let contactcontainer=document.querySelector(".contactcontainer");
let projectbutton=document.querySelector(".projectbutton");
let projectcontainer=document.querySelector(".projectcontainer");
let skillsbutton=document.querySelector(".skillsbutton");
let skillscontainer=document.querySelector(".skillscontainer");
let sourcebutton=document.querySelector(".sourcebutton");
let sourcecontainer=document.querySelector(".sourcecontainer");


aboutbutton.addEventListener("click", function(){
    aboutcontainer.style.display="block";
    homecontainer.style.display="none";
    contactcontainer.style.display="none";
    skillscontainer.style.display="none";
    projectcontainer.style.display="none";
    sourcecontainer.style.display="none";
});
homebutton.addEventListener("click",function(){
    aboutcontainer.style.display="none";
    homecontainer.style.display="block";
    contactcontainer.style.display="none";
    skillscontainer.style.display="none";
    projectcontainer.style.display="none";
    sourcecontainer.style.display="none";
});

contactbutton.addEventListener("click",function(){
    aboutcontainer.style.display="none";
    homecontainer.style.display="none";
    contactcontainer.style.display="block";
    skillscontainer.style.display="none";
    projectcontainer.style.display="none";
    sourcecontainer.style.display="none";
});

projectbutton.addEventListener("click",function(){
    aboutcontainer.style.display="none";
    homecontainer.style.display="none";
    contactcontainer.style.display="none";
    skillscontainer.style.display="none";
    projectcontainer.style.display="block";
    sourcecontainer.style.display="none";
});

skillsbutton.addEventListener("click",function(){
    aboutcontainer.style.display="none";
    homecontainer.style.display="none";
    contactcontainer.style.display="none";
    skillscontainer.style.display="block";
    projectcontainer.style.display="none";
    sourcecontainer.style.display="none";
});

sourcebutton.addEventListener("click", function(){
    aboutcontainer.style.display="none";
    homecontainer.style.display="none";
    contactcontainer.style.display="none";
    skillscontainer.style.display="none";
    projectcontainer.style.display="none";
    sourcecontainer.style.display="block";
});