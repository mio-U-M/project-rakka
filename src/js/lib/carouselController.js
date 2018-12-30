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
        this.slides[this.currentSlide].enableCurent();

        // ボタンの設定
        this.carousel.prevbtn.addEventListener("click", () => {
            this.slides[this.currentSlide].disableCurent();

            let prevSlide = this.currentSlide - 1 < 0 ? this.slides.length - 1 : this.currentSlide - 1;

            this.slides[prevSlide].enableCurent();
            this.currentSlide = prevSlide;
        });

        this.carousel.nextbtn.addEventListener("click", () => {
            this.slides[this.currentSlide].disableCurent();

            let nextSlide = this.currentSlide + 1 < this.slides.length ? this.currentSlide + 1 : 0;

            this.slides[nextSlide].enableCurent();
            this.currentSlide = nextSlide;
        });
    }
}
