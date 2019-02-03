class aboutController {
    constructor() {
        this.about = document.querySelector(".js-about");
        this.aboutcontainer = document.querySelector(".js-aboutcontainer");
        this.aboutbtn = document.querySelector(".js-aboutbtn");
        this.aboutclosebtn = document.querySelector(".js-aboutclose");
    }

    init() {
        this.aboutbtn.addEventListener('click', () => {
            this.aboutcontainer.scrollTo(0, 0);
            this.about.setAttribute("data-show", "true");
        })

        this.aboutclosebtn.addEventListener('click', () => {
            this.about.setAttribute("data-show", "false");
        })
    }
}

const About = new aboutController();
export default About;