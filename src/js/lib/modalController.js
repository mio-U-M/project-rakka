import slidelist from "@/config/slidelist.json";

class modalController {
    constructor() {
        this.modal = {
            elm : document.querySelector(".js-modal"),
            no : document.querySelector(".js-modalno"),
            ttl: document.querySelector(".js-modalttl"),
            txt : document.querySelector(".js-modaltxt"),
            link : document.querySelector(".js-modallink"),
            img : document.querySelector(".js-modalimg"),
        }
        this.slidedata = null;
    }

    openModal(slideid, colorid) {
        this.slidedata = slidelist[slideid];

        this.modal.no.innerHTML = "#0" + this.slidedata.no;
        this.modal.ttl.innerHTML = this.slidedata.title;
        this.modal.txt.innerHTML = this.slidedata.explain.replace(/\n/g, '<br />');
        this.modal.link.href = this.slidedata.instagramlink;
        this.modal.link.setAttribute("data-color",colorid);
        this.modal.img.setAttribute("data-img",this.slidedata.no);
        this.modal.elm.setAttribute("data-show","true");
    }

    closeModal() {
        this.modal.elm.setAttribute("data-show","false");
    }
}

const Modal = new modalController();
export default Modal;