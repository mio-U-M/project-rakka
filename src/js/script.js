import { BASE_DIR } from "../constants.yml";
import "ie-buster/dist/ie-buster.min.js";
import carouselController from "@/js/lib/carouselController";

const carousel = new carouselController(document.querySelector(".js-carousel"));
