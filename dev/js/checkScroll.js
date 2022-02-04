import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {textArray, circleButton, buttonText, currentLink} from "./navigation"

gsap.registerPlugin(ScrollTrigger);

var currentLinkLocal = currentLink;

export function sectionSlide(){

        const sections = document.querySelectorAll(".content");

        sections.forEach((section , i) => {

                ScrollTrigger.create({
                    start: "top 20%",
                    end: "bottom 80%",
                    trigger: section,
                    markers: true,
                    id: "section " + i,
                    onLeave: () => {
                        // console.log("leaving section " + i);
                        // // animate in
                        // console.log(currentLinkLocal + " is current link");

                        // // // animate out
                        // gsap.to(textArray[currentLinkLocal], {duration: 0.25, scrambleText: "", ease: "none"});
                        // gsap.to(circleButton[currentLinkLocal], {duration: 0.25, backgroundColor: "#808080", ease: "none"});

                        //  // animate in
                        //  gsap.to(textArray[i], {duration: 0.25, scrambleText: buttonText[i], ease: "none"});
                        //  gsap.to(circleButton[i], {duration: 0.25, scale: 1, backgroundColor: "transparent", ease: "back.out(1.7)"});


                        // // set current link
                        // currentLinkLocal = i;
                    },
                    onLeaveBack: () => {
                        // console.log("leaving back to section " + i);
                        // console.log("leaving section " + i);
                        // // animate in
                        // console.log(currentLinkLocal + " is current link for leave back");

                        // // // animate out
                        // gsap.to(textArray[currentLinkLocal], {duration: 0.25, scrambleText: "", ease: "none"});
                        // gsap.to(circleButton[currentLinkLocal], {duration: 0.25, backgroundColor: "#808080", ease: "none"});

                        //  // animate in
                        //  gsap.to(textArray[i], {duration: 0.25, scrambleText: buttonText[i], ease: "none"});
                        //  gsap.to(circleButton[i], {duration: 0.25, scale: 1, backgroundColor: "transparent", ease: "back.out(1.7)"});


                        // // set current link
                        // currentLinkLocal = i;
                    },
                   
                    onEnter: () =>{
                        // console.log("entering section " + i);

                        console.log(currentLinkLocal + " is current link");

                        // // animate out
                        gsap.to(textArray[currentLinkLocal], {duration: 0.25, scrambleText: "", ease: "none"});
                        gsap.to(circleButton[currentLinkLocal], {duration: 0.25, backgroundColor:"#808080" , ease: "none"});
                        circleButton[currentLinkLocal].classList.remove("circle-selected")

                         // animate in
                         gsap.to(textArray[i], {duration: 0.25, scrambleText: buttonText[i], ease: "none"});
                         gsap.to(circleButton[i], {duration: 0.25, scale: 1, backgroundColor: "transparent", ease: "back.out(1.7)"});
                         circleButton[i].classList.add("circle-selected")

                         // remove old circle class
                        // circleButton[currentLink].classList.remove("circle-selected");

                        // set current link
                        currentLinkLocal = i;

                        console.log(currentLinkLocal + " is NEW current link");

                    } ,
                    onEnterBack: () =>{
                            console.log("entering back into section " + i);
        
                            console.log("leaving section " + i);
                            // animate in
                            console.log(currentLinkLocal + " is current link");

                            // // animate out
                            gsap.to(textArray[currentLinkLocal], {duration: 0.25, scrambleText: "", ease: "none"});
                            gsap.to(circleButton[currentLinkLocal], {duration: 0.25, backgroundColor: "#808080", ease: "none"});
                            circleButton[currentLinkLocal].classList.remove("circle-selected")

                            // animate in
                            gsap.to(textArray[i], {duration: 0.25, scrambleText: buttonText[i], ease: "none"});
                            gsap.to(circleButton[i], {duration: 0.25, scale: 1, backgroundColor: "transparent", ease: "back.out(1.7)"});
                            circleButton[i].classList.add("circle-selected")
                            
                            // set current link
                            currentLinkLocal = i;

                            console.log(currentLinkLocal + " is NEW current link");
                        }
                })

        })


}



// let circleButton = document.querySelectorAll(".circle");
// let textArray = gsap.utils.toArray(".text");
// let currentLink = 1;
// let buttonText = ["INTRODUCTION.","BRANDING.","WEB & MOTION.","TYPOGRAPHY."];

// export function checkScrollOne(){
//     const tl = new gsap.timeline({paused:true});

//     tl.from (circleButton[1],{ 
//         duration: 0.25,
//         alpha: 0,
//         scrollTrigger: {
//             trigger: "section",
//             start: "top 20%",
//             end: "bottom 80%",
//             toggleActions: "restart none resume none",
//             // scrub: true,
//             markers: true
//         }
//     });

//     // animate in  
//     gsap.to(textArray[1], {duration: 0.25, scrambleText: buttonText[1], ease: "none"}),
//     gsap.to(circleButton[1], {duration: 0.25, scale: 1, backgroundColor: "transparent", ease: "back.out(1.7)"}),
//     // animate out
//     gsap.to(textArray[currentLink], {duration: 0.25, scrambleText: "", ease: "none"});
//     gsap.to(circleButton[currentLink], {duration: 0.25, backgroundColor: "#808080", ease: "none"});

//     return tl;
// }

