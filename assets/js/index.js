window.onscroll = function() {
    if (window.scrollY > 30) {
        if (window.scrollY >= 55) {
            document.getElementsByTagName("header")[0].classList.add("scrollHeader");
        }
    } else {
        document.getElementsByTagName("header")[0].classList.remove("scrollHeader");
    }
}