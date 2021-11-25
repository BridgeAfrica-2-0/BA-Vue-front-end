var v = document.getElementById("Test_Video");


var v2 = document.getElementById("Test_Video2");

var v3 = document.getElementById("Test_Video3");


v.playbackRate = 0.8;
v2.playbackRate = 0.8;
v3.playbackRate = 0.8;



const scrollElements = document.querySelectorAll(".js-scroll");


const scrollElements2 = document.querySelectorAll(".hidde");




const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    console.log(document.documentElement.clientHeight);

    return (
        elementTop <=
        (30) / dividend
        //( 100) / dividen
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");





};

const displayScrollElement2 = (element) => {
    element.classList.add("js-scrolll");





};

const hideScrollElement2 = (element) => {
    element.classList.remove("js-scrolll");

};


const hideScrollElement = (element) => {
    element.classList.remove("scrolled");

};


const handleScrollAnimation = () => {

    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);



        } else if (elementOutofView(el)) {
            hideScrollElement(el);



        }
    });


    scrollElements2.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement2(el);




        } else if (elementOutofView(el)) {
            hideScrollElement2(el);




        }
    })

}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});