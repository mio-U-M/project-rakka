class aboutController {
    constructor() {
        this.aboutbtn = document.querySelector(".js-aboutbtn");
        this.aboutcontainer = document.querySelector(".js-about");
        this.aboutclosebtn = document.querySelector(".js-aboutclose");
    }

    init() {
        this.aboutbtn.addEventListener('click', () => {
            this.aboutcontainer.setAttribute("data-show", "true");
        })

        this.aboutclosebtn.addEventListener('click', () => {
            this.aboutcontainer.setAttribute("data-show", "false");
        })
    }
}

const About = new aboutController();
export default About;