import { TimelineMax } from "gsap";
import slideController from "@/js/lib/slideController";

export default class carouselController {
    constructor(carouselElm) {
        this.carousel = {
            elm: carouselElm.querySelector(".js-slidecontainer"),
            prevbtn: carouselElm.querySelector(".js-prev"),
            nextbtn: carouselElm.querySelector(".js-next")
        };
        // 初期設定
        this.currentSlide = 0;
        this.slides = [];

        this.init();
    }

    init() {
        // スライドをセット
        Array.from(document.querySelectorAll(".js-slide"), elm => {
            return this.slides.push(new slideController(elm));
        });
        // 初期表示するスライドを設定
        this.slides[this.currentSlide].initCurent();

        // ボタンの設定
        this.carousel.nextbtn.addEventListener("click", () => this.changeSlide("next"));
        this.carousel.prevbtn.addEventListener("click", () => this.changeSlide("prev"));
    }

    changeSlide(direction) {
        if ( this.isAnimating ) return;
        this.isAnimating = true;
        
        return direction === "next" ? this.showNextSlide() : this.showPrevSlide();
    }

    showNextSlide() {
        this.slides[this.currentSlide].disableCurent("next");

        let nextSlide = this.currentSlide + 1 < this.slides.length ? this.currentSlide + 1 : 0;
        this.slides[nextSlide].enableCurent("next");

        this.currentSlide = nextSlide;
        this.isAnimating = false;
    }

    showPrevSlide() {
        this.slides[this.currentSlide].disableCurent("prev");

        let prevSlide = this.currentSlide - 1 < 0 ? this.slides.length - 1 : this.currentSlide - 1;
        this.slides[prevSlide].enableCurent("prev");

        this.currentSlide = prevSlide;
        this.isAnimating = false;
    }

    hideSlide() {
        
    }

    showSlide() {
        
    }
}
