import { TimelineMax } from "gsap";

export default class slideController {
    constructor(elm) {
        this.slide = {
            elm: elm,
            container: elm.querySelector(".js-slidecontainer"),
            img: elm.querySelector(".js-slideimg"),
            no: elm.querySelector(".js-slideno"),
            ttl: elm.querySelector("js-slidettl")
        };
    }

    enableCurent() {
        this.slide.elm.classList.add("curent-slide");
    }

    disableCurent() {
        this.slide.elm.classList.remove("curent-slide");
    }
}
