window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("logo-front");
    image.style.transform = "rotate(" + window.pageYOffset + "deg)";
}
