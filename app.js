const icon=document.querySelector(".icon");
const ul=document.querySelector(".nav-links");
const navlinks=document.querySelectorAll(".nav-links li");

const navIconFunc=()=>{
icon.addEventListener("click",function(){
//translate the sidebar into/out of page
    ul.classList.toggle("nav-active");
    //animation effect of the links in sidebar
navlinks.forEach((link)=>{
    if(link.style.animation){
        link.style.animation="";
    }
    else{
    link.style.animation='navIconLinkFade 1s ease 0.4s forwards';
    }
    });

    //burger icon to cross transform
    icon.classList.toggle("cross");

});

}

const navigate=()=>{
navlinks.forEach((link)=>{
    link.addEventListener("click",function linkclick(){
        if ($(window).width() <= 960){ 
        ul.classList.toggle("nav-active");
        icon.classList.toggle("cross");
        navlinks.forEach((link)=>{
            if(link.style.animation){
                link.style.animation="";
            }
            else{
            link.style.animation='navIconLinkFade 1s ease 0.4s forwards';
            }
            });
        }
        });
});
}
navigate();
navIconFunc();