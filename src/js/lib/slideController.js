import { TweenMax } from "gsap";
import { ANIMATION_CONFIG } from "@/js/lib/constant.js";

export default class slideController {
    constructor(elm) {
        this.slide = {
            elm: elm,
            container: elm.querySelector(".js-slidecontainer"),
            img: elm.querySelector(".js-slideimg"),
            no: elm.querySelector(".js-slideno"),
            ttl: elm.querySelector("js-slidettl")
        };

        this.showAnimOpts = null;
        this.hideAnimOpts = {};
    }

    initCurent() {
        this.slide.elm.classList.add("curent-slide");
    }

    enableCurent(mode) {
        Promise.all([this.showSlide(mode)]).then(() => {
            this.slide.elm.classList.add("curent-slide");
            return;
        });
    }

    disableCurent(mode) {
        this.slide.elm.classList.remove("curent-slide");
        Promise.all([this.hideSlide(mode)]).then(() => {
            return;
        });
    }

    showSlide(mode) {
        return new Promise((resolve, reject) => {
            this.showAnimOpts = {
                x: "0%",
                delay: ANIMATION_CONFIG.duration/2,
                ease: ANIMATION_CONFIG.ease,
                startAt: mode === "prev" ? { x: "-100%", y: "0%" } : { x: "100%", y: "0%" },
                onComplete: resolve
            };

            TweenMax.to(this.slide.img, ANIMATION_CONFIG.duration, this.showAnimOpts);
            TweenMax.to(this.slide.no, ANIMATION_CONFIG.duration, this.showAnimOpts);
            TweenMax.to(this.slide.ttl, ANIMATION_CONFIG.duration, this.showAnimOpts);

        });
    }

    hideSlide(mode) {
        return new Promise((resolve, reject) => {
            this.hideAnimOpts = {
                x: mode === "prev" ? "100%" : "-100%",
                delay: 0,
                ease: ANIMATION_CONFIG.ease,
                startAt: { x: "0%", y: "0%" },
                onComplete: resolve
            };

            TweenMax.to(this.slide.img, ANIMATION_CONFIG.duration, this.hideAnimOpts);
            TweenMax.to(this.slide.no, ANIMATION_CONFIG.duration, this.hideAnimOpts);
            TweenMax.to(this.slide.ttl, ANIMATION_CONFIG.duration, this.hideAnimOpts);
        });
    }
}
