

const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 1
    },
    960: {
        items: 1
    }
}
  
const hamburger = $(".hamburger");
const outerShell = $(".outer-shell");
const outerShellLinks = $(".outer-shell a");
const leftMain = document.querySelector(".left-main");
const leftMainItems = document.querySelectorAll(".left-main a");
const laboLeftMain = document.querySelector(".labo-left-main");
const laboLeftMainItems = document.querySelectorAll(".labo-left-main a");
const nautiLeftMain = document.querySelector(".nauti-left-main");
const nautiLeftMainItems = document.querySelectorAll(".nauti-left-main a");
const productPageCard = document.querySelectorAll(".product-page-card");
const productCard1 = document.querySelector(".card1");
const productCard2 = document.querySelector(".card2");
const productCard3 = document.querySelector(".card3");
const overlay = document.querySelectorAll(".overlay");
const dcard = document.querySelector(".description-card");
const aeroLine = document.querySelectorAll(".aero-line");
const dOverlay = document.querySelector(".description-overlay");
const aeroHeader = document.querySelector(".aero-header-title");
const aeroHamburger = $(".aero-hamburger");
const nautiHamburger = $(".nautical-hamburger");
const laboHamburger = $(".labo-hamburger");
button=$("#up-btn");


// window.addEventListener("load",preLoads);
document.addEventListener("DOMContentLoaded",preLoads);


function preLoads(){
    aboutLoader();
    preLoader();
}

function preLoader() {
    const preloader = document.querySelector("#preloader");
    preloader.className += " hidden";    
};

hamburger.click(() => {
    outerShell.toggle(500,"linear");
});
aeroHamburger.click(() => {
    outerShell.toggle(500,"linear");
});
nautiHamburger.click(() => {
    outerShell.toggle(500,"linear");
});
laboHamburger.click(() => {
    outerShell.toggle(500,"linear");
});
outerShellLinks.click(() => {
    outerShell.toggle(500,"linear");
    hamburger.toggleClass("change");
   
})


hamburger.click(() => {
    hamburger.toggleClass("change");
});

aeroHamburger.click(() => {
    aeroHamburger.toggleClass("change");
}); 

nautiHamburger.click(() => {
    nautiHamburger.toggleClass("change");
}); 

laboHamburger.click(() => {
    laboHamburger.toggleClass("change");
}); 


document.addEventListener("scroll",scrollEffects);

function scrollEffects(){
    productScroll();
    hamburgerScroll();
    productScrollForLabo();
    productScrollForNauti();

}
function productScroll(){

    const scr = window.scrollY;
    
        
            for(let element of leftMainItems){
                if (scr > 350 & scr < 1100){
                    button.css("visibility","visible");

                    if (element.className !== "main-products"){
                    element.style.opacity = "0";
                    element.style.transition = "0.4s all ease-in";
                    element.style.pointerEvents = "none";
                    leftMain.style.opacity = "1";
                    element.style.borderTop = "";
                    element.style.borderBottom = "";
                }
                    else{
                    element.style.opacity = "1";
                    element.style.transition = "0.4s all ease-in";
                    element.style.pointerEvents = "auto";
                }
            }
                else if(scr >= 1300 & scr < 1800){
                    button.css("visibility","visible");

                    if (element.className !== "main-application"){
                    element.style.opacity = "0";
                    element.style.transition = "0.4s all ease-in";
                    element.style.pointerEvents = "none";
                    leftMain.style.opacity = "1";
                    element.style.borderTop = "";
                    element.style.borderBottom = "";
                }
                    else{
                    element.style.opacity = "1";
                    element.style.transition = "0.4s all ease-in";
                    element.style.pointerEvents = "auto";
                }
                }
                else if(scr >= 1800 & scr < 2400){
                    button.css("visibility","visible");

                    if (element.className !== "main-expos"){
                    element.style.opacity = "0";
                    element.style.transition = "0.4s all ease-in";
                    element.style.pointerEvents = "none";
                    leftMain.style.opacity = "1";
                    element.style.borderTop = "";
                    element.style.borderBottom = "";
                }
                    else{
                    element.style.opacity = "1";
                    element.style.transition = "0.4s all ease-in";
                    element.style.pointerEvents = "auto";
                }
                }
                else if(scr >= 2400){
                    button.css("visibility","visible");
                    leftMain.style.opacity = "0";
                    
                }
                else{
                    leftMain.style.opacity = "1";
                    element.style.opacity = "1";
                    element.style.transition = "0.4s all ease-in";
                    button.css("visibility","hidden");
                    element.style.pointerEvents = "auto";
                }
            }    
          


}
function productScrollForLabo(){
    const scr = window.scrollY;

    for(let element of laboLeftMainItems){
        if (scr > 350 & scr < 1500){
            button.css("visibility","visible");

            if (element.className !== "labo-implement"){
            element.style.opacity = "0";
            element.style.transition = "0.4s all ease-in";
            element.style.pointerEvents = "none";
            laboLeftMain.style.opacity = "1";
            element.style.borderTop = "";
            element.style.borderBottom = "";
        }
            else{
            element.style.opacity = "1";
            element.style.transition = "0.4s all ease-in";
            element.style.pointerEvents = "auto";
        }
    }
        else if(scr >= 1500 & scr < 2000){
            button.css("visibility","visible");

            if (element.className !== "labo-offer"){
            element.style.opacity = "0";
            element.style.transition = "0.4s all ease-in";
            element.style.pointerEvents = "none";
            laboLeftMain.style.opacity = "1";
            element.style.borderTop = "";
            element.style.borderBottom = "";
        }
            else{
            element.style.opacity = "1";
            element.style.transition = "0.4s all ease-in";
            element.style.pointerEvents = "auto";
        }
        }
        else if(scr >= 2000 & scr < 2400){
            button.css("visibility","visible");

            if (element.className !== "labo-products"){
            element.style.opacity = "0";
            element.style.transition = "0.4s all ease-in";
            element.style.pointerEvents = "none";
            laboLeftMain.style.opacity = "1";
            element.style.borderTop = "";
            element.style.borderBottom = "";
        }
            else{
            element.style.opacity = "1";
            element.style.transition = "0.4s all ease-in";
            element.style.pointerEvents = "auto";
        }
        }
        else if(scr >= 2400){
            button.css("visibility","visible");
            laboLeftMain.style.opacity = "0";
            
        }
        else{
            laboLeftMain.style.opacity = "1";
            element.style.opacity = "1";
            element.style.transition = "0.4s all ease-in";
            button.css("visibility","hidden");
            element.style.pointerEvents = "auto";
        }
    } 
    
}  

function productScrollForNauti(){
    const scr = window.scrollY;
    
    for(let element of nautiLeftMainItems){
        
        if (scr > 350 & scr < 1000){
            button.css("visibility","visible");
            
            if (element.className !== "nauti-offer"){
            element.style.opacity = "0";
            element.style.transition = "0.4s all ease-in";
            element.style.pointerEvents = "none";
            nautiLeftMain.style.opacity = "0";
            nautiLeftMain.style.pointerEvents = "none";
            element.style.borderTop = "";
            element.style.borderBottom = "";
            
        }
            else{
            element.style.opacity = "1";
            element.style.transition = "0.4s all ease-in";
            element.style.pointerEvents = "auto";
            
        }
    }
        else if(scr >= 1000 & scr < 3200){
            button.css("visibility","visible");
            element.style.color = "black";
            if (element.className !== "nauti-products"){
            element.style.opacity = "0";
            element.style.transition = "0.4s all ease-in";
            element.style.pointerEvents = "none";
            nautiLeftMain.style.opacity = "1";
            element.style.borderTop = "";
            element.style.borderBottom = "";
        }
            else{
            element.style.opacity = "1";
            element.style.transition = "0.4s all ease-in";
            element.style.pointerEvents = "auto";
        }
        }
        else if(scr >= 3200 & scr < 3600){
            button.css("visibility","visible");

            if (element.className !== "nauti-devs"){
            element.style.opacity = "0";
            element.style.transition = "0.4s all ease-in";
            element.style.pointerEvents = "none";
            nautiLeftMain.style.opacity = "1";
            element.style.borderTop = "";
            element.style.borderBottom = "";
        }
            else{
            element.style.opacity = "1";
            element.style.transition = "0.4s all ease-in";
            element.style.pointerEvents = "auto";
        }
        }
        else if(scr >= 3600){
            button.css("visibility","visible");
            nautiLeftMain.style.opacity = "0";
            
        }
        else{
            nautiLeftMain.style.opacity = "1";
            element.style.opacity = "1";
            element.style.transition = "0.4s all ease-in";
            button.css("visibility","hidden");
            element.style.pointerEvents = "auto";
            element.style.color = "white";
        }
    } 
}


function hamburgerScroll(){
    const scr = window.scrollY;

    if(scr > 900){
        for(let i =0;i<aeroLine.length;i++){
            aeroLine[i].style.background = "black";
            aeroLine[i].style.height = "0.5px";
            aeroHeader.style.visibility = "hidden"; 
        }
    }
    else{
        for(let i =0;i<aeroLine.length;i++){
            aeroLine[i].style.background = "white";
            aeroLine[i].style.height = "0.5px"; 
            aeroHeader.style.visibility = "visible";  
        }
        
    }
}

button.click(function () {
  $('html, body').animate({
      scrollTop: 0
  }, 1000);
})


document.addEventListener("mousemove",function(e) {
    const layers = document.querySelectorAll(".layer");
    layers.forEach(function(layer) {
        const speed = layer.getAttribute("data-speed");
        const xwidth = (window.innerWidth - e.pageX*speed) /50;
        const xheight = (window.innerHeight - e.pageY*speed) /50;
        layer.style.transform = `translateX(${xwidth}px) translateY(${xheight}px)`
    });
});


gsap.to("#bg",{
    scrollTrigger : {
        scrub : 1
    },
    scale : 1.5
});



gsap.to("#clouds_1",{
    scrollTrigger : {
        scrub : 1
    },
    x : 200
});

gsap.to("#clouds_2",{
    scrollTrigger : {
        scrub : 1
    },
    x : -200
});

gsap.to("#text",{
    scrollTrigger : {
        scrub : 1
    },
    y : 500
});


$(function(){
    $('.slider .owl-carousel').owlCarousel({
     loop:true,
     nav:true,
     dots:true,
     items:1,
     autoplay:false,
     smartSpeed:1200,
     animateOut:'fadeOut',
     responsive: responsive
 
 })
 
 $('.team_list a').on('click', function(e){
     e.preventDefault();
 
     var PopupId = $(this).attr('data-tab');
     $('#'+PopupId).fadeIn();
 })
 
 $('.close_btn').on('click', function(){
     $(this).parents('.popup_wrap').fadeOut();
 
 
 })
 
    })


AOS.init(); 


function aboutLoader(){
    TweenMax.from('.text h1', 2, {
        delay: .6,
        y: -1000,
        ease: Circ.easeInOut
      });
    
      TweenMax.from('.text p', 2, {
        delay: .7,
        y: -1000,
        ease: Circ.easeInOut
      });
    
    
    
      TweenMax.staggerFrom('.bottomnav ul li', 2, {
        delay: .8,
        y: -2000,
        ease: Circ.easeInOut
      }, 0.08);
    
    
    
      TweenMax.from('.name', 3, {
        delay: 2,
        y:-3000,
        ease: Circ.easeInOut
      });
      TweenMax.to(".Upper-A",2,{
        delay: 2,
        color: "#395EAD",
        ease: Circ.easeInOut
      });
      TweenMax.to(".Upper-D",2,{
        delay : 3.8,
        color: "#395EAD",
        ease: Circ.easeInOut,
        
       });
    
}


