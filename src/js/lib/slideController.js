import TweenMax from "gsap/TweenMax";
import { ANIMATION_CONFIG } from "@/js/lib/constant.js";

export default class slideController {
    constructor(elm) {
        this.slide = {
            elm: elm,
            container: elm.querySelector(".js-slidecontainer"),
            cover: elm.querySelector(".js-slidecover"),
            no: elm.querySelector(".js-slideno"),
            ttl: elm.querySelector(".js-slidettl")
        };

        this.showAnimOpts = {};
        this.hideAnimOpts = {};
    }

    initCurent() {
        this.slide.elm.classList.add("curent-slide");
    }

    enableCurent() {
        this.slide.elm.classList.add("curent-slide");
    }

    disableCurent() {
        this.slide.elm.classList.remove("curent-slide");
    }

    showSlide(mode) {
        return new Promise((resolve, reject) => {
            this.showAnimOpts.containerOpts = {
                opacity: 1,
                x: "0%",
                delay: ANIMATION_CONFIG.duration / 2,
                ease: ANIMATION_CONFIG.ease,
                startAt: mode === "prev" ? { opacity: 0, x: "-20%", y: "0%" } : { x: "20%", y: "0%" },
                onComplete: resolve
            };

            this.showAnimOpts.coverOpts = {
                x: mode === "prev" ? "100%" : "-100%",
                delay: ANIMATION_CONFIG.duration / 2,
                ease: ANIMATION_CONFIG.ease,
                startAt: "0%",
            };

            this.showAnimOpts.noOpts = {
                opacity: 1,
                x: "0%",
                delay: ANIMATION_CONFIG.duration / 2,
                ease: ANIMATION_CONFIG.ease,
                startAt: mode === "prev" ? { opacity: 0, x: "-100%", y: "0%" } : { x: "100%", y: "0%" },
            };

            this.showAnimOpts.ttlOpts = {
                opacity: 1,
                x: "0%",
                delay: ANIMATION_CONFIG.duration / 2,
                ease: ANIMATION_CONFIG.ease,
                startAt: mode === "prev" ? { opacity: 0, x: "-100%", y: "0%" } : { x: "100%", y: "0%" },
            };

            TweenMax.to(this.slide.container, ANIMATION_CONFIG.duration, this.showAnimOpts.containerOpts);
            TweenMax.to(this.slide.cover, ANIMATION_CONFIG.duration, this.showAnimOpts.coverOpts);
            TweenMax.to(this.slide.no, ANIMATION_CONFIG.duration, this.showAnimOpts.noOpts);
            TweenMax.to(this.slide.ttl, ANIMATION_CONFIG.duration, this.showAnimOpts.ttlOpts);
        });
    }

    hideSlide(mode) {
        return new Promise((resolve, reject) => {
            this.hideAnimOpts.containerOpts  = {
                opacity: 0,
                x: mode === "prev" ? "20%" : "-20%",
                delay: 0,
                ease: ANIMATION_CONFIG.ease,
                startAt: { opacity: 1, x: "0%", y: "0%" },
                onComplete: resolve
            };

            this.hideAnimOpts.coverOpts = {
                x: "0%",
                delay: 0,
                ease: ANIMATION_CONFIG.ease,
                startAt: mode === "prev" ? { x: "-100%" } : { x: "100%" },
            };

            this.hideAnimOpts.noOpts = {
                opacity: 0,
                x: mode === "prev" ? "100%" : "-100%",
                delay: 0,
                ease: ANIMATION_CONFIG.ease,
                startAt: { opacity: 1, x: "0%", y: "0%" }, 
            };

            this.hideAnimOpts.ttlOpts = {
                opacity: 0,
                x: mode === "prev" ? "100%" : "-100%",
                delay: 0,
                ease: ANIMATION_CONFIG.ease,
                startAt: { opacity: 1, x: "0%", y: "0%" },
            };

            TweenMax.to(this.slide.container, ANIMATION_CONFIG.duration, this.hideAnimOpts.containerOpts);
            TweenMax.to(this.slide.cover, ANIMATION_CONFIG.duration, this.hideAnimOpts.coverOpts);
            TweenMax.to(this.slide.no, ANIMATION_CONFIG.duration, this.hideAnimOpts.noOpts);
            TweenMax.to(this.slide.ttl, ANIMATION_CONFIG.duration, this.hideAnimOpts.ttlOpts);
        });
    }
}
