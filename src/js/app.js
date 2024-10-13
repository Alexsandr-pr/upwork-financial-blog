import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import burgerMenu from "./ui/burger.js";
burgerMenu();

//импорт меню аккордеон
//import  accordion  from "./ui/accordion.js";
//accordion();

//import tabs from "./ui/tabs.js";
//tabs(triggerClass, contentClass);

//import DynamicAdapt from "./modules/dynamicadapt.js";
//const da = new DynamicAdapt("max");
//da.init();


import forms from "./modules/forms.js";
forms();

document.addEventListener("DOMContentLoaded", function () {
    const addressSpan = document.querySelector(".footer-right__item:first-child .footer-right__link span");
    const addressImg = document.querySelector(".footer-right__item:first-child .footer-right__link img");

    function checkLines() {
        
        const lineHeight = parseFloat(window.getComputedStyle(addressSpan).lineHeight);
        const spanHeight = addressSpan.offsetHeight;

        if (spanHeight > lineHeight) {
            addressImg.style.marginTop = "3px";
        } else {
            addressImg.style.marginTop = "0"; 
        }
    }

    checkLines();

});

const animItems = document.querySelectorAll("._anim-items");

window.addEventListener("scroll", animOnScroll);

function animOnScroll() {
    for(let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if(animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset +  animItemHeight)) {
            animItem.classList.add("_active");
        }
    }
}

animOnScroll();


function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { 
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
    }
}



