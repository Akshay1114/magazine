window.onscroll = function() {
    if (window.scrollY > 30) {
        if (window.scrollY >= 55) {
            document.getElementsByTagName("header")[0].classList.add("scrollHeader");
        }
    } else {
        document.getElementsByTagName("header")[0].classList.remove("scrollHeader");
    }
}

console.log(">>>>>>>>>",window.location);
// get Elements
// let getTogleNav = document.getElementById("navBarToggle");
const getElementbyId = (id) => document.getElementById(id);

console.log(">>>>>>>>>",getElementbyId("navBarToggle"));

// EVENT listeners
getElementbyId("navBarToggle").addEventListener("click", function() {
   console.log(getElementbyId("nav-bar"));
//    getElementbyId("nav-bar").style.display = "block";
    // getNav.classList.toggle("show");
    // let getBody = document.getElementsByTagName("body")[0];
    // getBody.classList.toggle("noScroll");
});


// Functions




// CARASOULE

const buttons = document.querySelectorAll('[data-carasoule-btn]');
// console.log(buttons);
buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        const offset = btn.dataset.carasouleBtn == 'prev' ? -1 : 1;
        const slides = btn.closest('[data-carasoule]').querySelectorAll('[data-slides]');
    console.log("slides<<<<<<<<<<<<<<< ====>", slides);
        // console.log("slides ====>", [...slides.children]);
        
        const activeSlides = slides.querySelector('[data-slides]>[data-slide]');
        console.log("activeSlides ====>", activeSlides);
        let activeIndex = [...slides.children].indexOf(activeSlides) + offset;
        if (activeIndex < 0) {
            activeIndex = slides.children.length - 1;
        } else if (activeIndex >= slides.length) {
            activeIndex = 0;
        }
        slides.children[activeIndex].dataset.active = true;
        delete activeSlides.dataset.active;
    });
});