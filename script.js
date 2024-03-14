document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');

    mobileMenuButton.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });
});


window.addEventListener('load', function () {
    document.getElementById('accueil').style.transform = "scale(1.1)";
})

var aboutMeHeaderElement = document.querySelector('.about-me');
var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            var aboutMeHeaderTitle = document.getElementById('about-me-header-title');
            aboutMeHeaderTitle.classList.toggle('animateLeft');
            var aboutMeHeaderPicture = document.getElementById('about-me-header-picture');
            aboutMeHeaderPicture.classList.toggle('animateTop');
            var aboutMeHeaderDescription = document.getElementById('about-me-header-description');
            aboutMeHeaderDescription.classList.toggle('animateRight');
            var header = document.querySelector('header');
            header.style.visibility = 'visible';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 })
observer.observe(aboutMeHeaderElement);

var aboutMeIutElement = document.querySelector('.about-me-iut');
var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            var aboutMeHeaderTitle = document.getElementById('about-me-informations-iut');
            aboutMeHeaderTitle.classList.toggle('animateLeft');
            var aboutMeHeaderDescription = document.getElementById('about-me-picture-iut');
            aboutMeHeaderDescription.classList.toggle('animateRight');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 })
observer.observe(aboutMeIutElement);

var aboutMeCooperlElement = document.querySelector('.about-me-cooperl');
var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            var aboutMeHeaderTitle = document.getElementById('about-me-informations-cooperl');
            aboutMeHeaderTitle.classList.toggle('animateRight');
            var aboutMeHeaderDescription = document.getElementById('about-me-picture-cooperl');
            aboutMeHeaderDescription.classList.toggle('animateLeft');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 })
observer.observe(aboutMeCooperlElement);