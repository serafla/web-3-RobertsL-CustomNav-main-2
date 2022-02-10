import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let idArray = ["#Introduction","#Branding","#Web Design", "#Typography"];

export function scrollPage(index){
    gsap.to(window, {duration: 1, scrollTo:idArray[index]});
}