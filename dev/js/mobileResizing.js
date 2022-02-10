import { gsap } from "gsap";

export function displayWindowSize(){

    let menu = document.querySelector("#burger-nav-container");
    // let menuHeight = menu.offsetHeight;
    let menuWidth = menu.offsetWidth;

    // console.log(menuHeight);

    
   // check the view port view and see if the menu needs to be moved
   if(document.documentElement.clientWidth <= 1024){
    console.log("hide");
    gsap.set("#burger-nav-container",{x:menuWidth});
    }else{
        console.log("un-hide");
        gsap.set("#burger-nav-container",{x:0});
    }

}