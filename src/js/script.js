import { BASE_DIR } from "../constants.yml";
import "ie-buster/dist/ie-buster.min.js";
import carouselController from "@/js/lib/carouselController";
import { shaderinit } from "@/js/lib/shaderController.js";
import { TweenMax, TimelineMax } from "gsap/TweenMax";
import EventEmitter from 'events';

const opening = document.querySelector(".js-opening");
const openingttl1 = document.querySelector(".js-openingttl1");
const openingttl2 = document.querySelector(".js-openingttl2");
const openingsubttl = document.querySelector(".js-openingsubttl");
const contents = document.querySelector(".js-contents");

const openingTl = new TimelineMax();
let filterelm0 = { val: 10 };
let filterelm1 = { val: 30 };
let filterelm2 = { val: 30 };
let filterelm3 = { val: 30 };

// carousel init
const carousel = new carouselController(document.querySelector(".js-carousel"));
carousel.on('hover', () => {
    TweenMax.to(filterelm0, 1.0, 
        {
            val: 0,
            ease: Power4.easeOut,
            onUpdate: () => 
            TweenMax.set(opening, { 
                webkitFilter: "grayscale(" + filterelm0.val + ")",
                filter:"grayscale(" +  filterelm0.val + ")"}
            )
        }
    )
});
carousel.on('hoverout', () => {
    TweenMax.to(filterelm0, 1.0, 
        {
            val: 10,
            ease: Power4.easeOut,
            onUpdate: () => 
            TweenMax.set(opening, { 
                webkitFilter: "grayscale(" + filterelm0.val + ")",
                filter:"grayscale(" +  filterelm0.val + ")"}
            )
        }
    )
});

// shader init
shaderinit();

// opening animation
openingTl
    // initialize
    .set(opening, { opacity: 0 }, 0)
    .set(openingttl1, { opacity: 0 }, 0)
    .set(openingttl2, { opacity: 0 }, 0)
    .set(openingsubttl, { opacity: 0 }, 0)
    // show up and colored background
    .to(opening, 8.0, { opacity: 1 , delay: 0.7, ease: Power4.easeOut}, 1.0)
    .to(filterelm0, 7.0, { val: 0, ease: Power4.easeOut, onUpdate: () => TweenMax.set(opening, { 
        webkitFilter: "grayscale(" + filterelm0.val + ")",
        filter:"grayscale(" +  filterelm0.val + ")"
    })}, 1.0)
    // openingttl1
    .to(openingttl1, 3.0, { opacity: 1.0, scale: 1.0, ease: Power4.easeOut }, 5.0)
    .to(filterelm1, 3.0, { val: 0, ease: Power4.easeOut, onUpdate: () => TweenMax.set(openingttl1, { 
        webkitFilter: "blur(" + filterelm1.val + "px)",
        filter:"blur(" +  filterelm1.val + "px)"
    })}, 5.0)
    // openingttl2
    .to(openingttl2, 3.0, { opacity: 1.0, scale: 1.0, delay: 0.7, ease: Power4.easeOut }, 5.0)
    .to(filterelm2, 3.0, { val: 0, delay: 0.7, ease: Power4.easeOut, onUpdate: () => TweenMax.set(openingttl2, { 
        webkitFilter: "blur(" + filterelm2.val + "px)",
        filter:"blur(" +  filterelm2.val + "px)"
    })}, 5.0)
    // openingsubttl
    .to(openingsubttl, 3.0, { opacity: 1.0, scale: 1.0, delay: 0.7, ease: Power4.easeOut }, 6.0)
    .to(filterelm3, 3.0, { val: 0, delay: 0.7, ease: Power4.easeOut, onUpdate: () => TweenMax.set(openingsubttl, { 
        webkitFilter: "blur(" + filterelm3.val + "px)",
        filter:"blur(" +  filterelm3.val + "px)"
    })}, 6.0)
    .to(openingttl1, 5.0, { opacity: 0, scale: 1.2, ease: Power4.easeOut }, 11.0)
    .to(filterelm1, 5.0, { val: 50,  ease: Power4.easeOut, onUpdate: () => TweenMax.set(openingttl1, { 
        webkitFilter: "blur(" + filterelm1.val + "px)",
        filter:"blur(" +  filterelm1.val + "px)"
    })}, 11.0)
    .to(openingttl2, 5.0, { opacity: 0, scale: 1.2, ease: Power4.easeOut }, 11.0)
    .to(filterelm2, 5.0, { val: 50,  ease: Power4.easeOut, onUpdate: () => TweenMax.set(openingttl2, { 
        webkitFilter: "blur(" + filterelm2.val + "px)",
        filter:"blur(" +  filterelm2.val + "px)"
    })}, 11.0)
    .to(openingsubttl, 5.0, { opacity: 0, scale: 1.2, ease: Power4.easeOut }, 11.0)
    .to(filterelm3, 5.0, { val: 50,  ease: Power4.easeOut, onUpdate: () => TweenMax.set(openingsubttl, { 
        webkitFilter: "blur(" + filterelm3.val + "px)",
        filter:"blur(" +  filterelm3.val + "px)"})}, 11.0)
    .to(filterelm0, 8.0, { val: 10, ease: Power4.easeOut, onUpdate: () => TweenMax.set(opening, { 
        webkitFilter: "grayscale(" + filterelm0.val + ")",
        filter:"grayscale(" +  filterelm0.val + ")"})}, 11.0)
    .to(contents, 5.0, { opacity: 1, ease: Power4.easeOut, 
        onStart: () => { contents.setAttribute("data-init", "true"); },
        onComplete: () =>{ contents.setAttribute("data-show", "true"); }
    }, 13.0)
