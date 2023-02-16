// AOS Animation
AOS.init({
    offset: 320, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

// Slick JS
$('.slick-testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

// Cookie Banner
function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    createCookie(name, "", -1);
}
if (readCookie('cookie-notice-dismissed') == 'true') {
    // Add tracking scripts here 
    // End tracking scripts 
} else {
    document.getElementById('cookie-notice').style.display = 'block';
}
document.getElementById('cookie-notice-accept').addEventListener("click", function () {
    createCookie('cookie-notice-dismissed', 'true', 31);
    document.getElementById('cookie-notice').style.display = 'none';
    location.reload();
});
document.querySelector("#close-cookie-banner").addEventListener("click", (e) => {

    document.querySelector("#cookie-notice").style.display = 'none';
});