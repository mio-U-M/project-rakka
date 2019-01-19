import EventEmitter from 'events';
import { TweenMax } from "gsap/TweenMax";
import createjs from 'preload-js';

const MANIFEST = [
    // 画像
    {
        id  : 'img_1',
        src : '../img/img1.jpg'
    },
    {
        id  : 'img_2',
        src : '../img/img2.jpg'
    },
    {
        id  : 'img_3',
        src : '../img/img3.jpg'
    },
    {
        id  : 'img_4',
        src : '../img/img4.jpg'
    },
    {
        id  : 'img_5',
        src : '../img/img5.jpg'
    },
    {
        id  : 'img_6',
        src : '../img/img6.jpg'
    },
    {
        id  : 'img_7',
        src : '../img/slide1.jpg'
    },
    {
        id  : 'img_8',
        src : '../img/slide2.jpg'
    },
    {
        id  : 'img_9',
        src : '../img/slide3.jpg'
    },
    {
        id  : 'img_10',
        src : '../img/slide4.jpg'
    },
    {
        id  : 'img_11',
        src : '../img/slide5.jpg'
    },
    {
        id  : 'img_12',
        src : '../img/slide6.jpg'
    }
]

class PreloadManager extends EventEmitter {
    constructor() {
        super();

        // ローディング画面用のDOM
        // this.preloadDom = document.querySelector('.js-preload');
        // // 進行状況を示すDOM
        // this.percentDom = document.querySelector('.js-meter');

        this.queue = new createjs.LoadQueue(false);

        this.queue.setMaxConnections(6);
        this.queue.on('progress', e => this.handleLoading(e));
        this.queue.on('fileload', this.handleFileLoad, this);
        this.queue.on('complete', this.handleComplete, this);

        this.progress = 0
    }
    
    preload() {
        this.queue.loadManifest(MANIFEST);
        this.queue.load();
    }

    handleLoading(e) {
        // this.percentDom.style.transform = 'scaleX(' + e.progress + ')';
    }

    handleFileLoad() {
        // とりあえず今は設定なし
    }
   
    handleComplete() {
        this.emit('complete');
        // TweenMax.to(
        //     this.preloadDom,
        //     2.0,
        //     { 
        //         opacity: 0,
        //         onComplete: () => {
        //            this.preloadDom.setAttribute('data-hide','true');
        //         }
        //     }
        // )
    }
}

const Preloader = new PreloadManager();
export default Preloader;