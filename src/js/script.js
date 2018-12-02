import { BASE_DIR } from '../constants.yml';
import { carouselController } from '@/lib/carouselController';

const carousel = new carouselController(document.querySelector('.js-carousel'));
