class Animation {
    constructor(nameClass = 'body',translateYorX = 'Y',dir = '', duration = .8) {
        this.sel = nameClass;
        this.xOry = translateYorX;
        this.dir = dir;
        this.duration = duration;
    }   

    scrollAnimation() {
        const element = document.querySelector(`.${this.sel}`);
        window.addEventListener('scroll', () => {
            const offsetY = window.scrollY
            element.style.transform = `translate${this.xOry}(${this.dir}${offsetY * this.duration}px)`;
        })
    }
}


const IntroHi = new Animation('textIntro', 'Y', '' , .2 );
IntroHi.scrollAnimation()

const IntroImage = new Animation('imageIntro', 'X', '' , .6);
IntroImage.scrollAnimation()

const myName = new Animation('name', 'X', '-' , .2);
myName.scrollAnimation()

const jobOne = new Animation('jobOne', 'X', '' , .2);
jobOne.scrollAnimation()

const jobTwo = new Animation('jobTwo', 'X', '-' , .2);
jobTwo.scrollAnimation()
