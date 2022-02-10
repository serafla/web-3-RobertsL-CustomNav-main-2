import { createContent } from "./contentSections";
import { buttonClicks, buttonMouseEvents } from "./navigation";
import { sectionSlide } from "./checkScroll";
import { burgerTL } from "./burgerAnimation";
import { menuAnimation } from "./mobileMenu";
import { scrollPage } from "./pageScroll";
import { displayWindowSize } from "./mobileResizing";

window.addEventListener('load', function() {
    // create the content on load
    createContent();
    buttonClicks();
    buttonMouseEvents();
    sectionSlide();
})

var burgerButton = document.querySelector("#burger");
let canISeeMenu = false;

function openCloseMenu(){
    if(canISeeMenu === false){
        // can't see menu... play timeline of burger into X
        burgerTL.play();
        menuAnimation.play();
        canISeeMenu = true;
    }else{
        // can see menu.. play X back into burger
        burgerTL.reverse();
        menuAnimation.reverse();
        canISeeMenu = false;
    }
}

burgerButton.addEventListener("click", openCloseMenu);
let navButtons = document.querySelectorAll(".nav-btns");

for (const button of navButtons){
    button.addEventListener("click", checkScrolling);
    button.addEventListener("click", openCloseMenu);
}

function checkScrolling(e) {
    // check to see which button was clicked
    const indexValue = [].indexOf.call(navButtons, e.target)
    if (indexValue != -1) {
        scrollPage(indexValue);
    }
}

//listen to window resize
window.addEventListener("resize", displayWindowSize);

//check the window size on load
window.addEventListener('load', displayWindowSize); 