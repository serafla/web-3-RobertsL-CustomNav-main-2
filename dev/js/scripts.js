import { createContent } from "./contentSections";
import { buttonClicks, buttonMouseEvents } from "./navigation";
import { sectionSlide } from "./checkScroll";

window.addEventListener('load', function() {
    // create the content on load
    createContent();
    buttonClicks();
    buttonMouseEvents();
    sectionSlide();
})

