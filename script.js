document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');

    mobileMenuButton.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });
});

document.body.onload = function(){
    nbr = 5;
    p = 0;
    container = document.getElementById('container');
    g = document.getElementById('g');
    d = document.getElementById('d');
    container.style.width = (500*nbr)+"px";
    for(i=1;i<=nbr;i++) {
        div=document.createElement("div");
        div.className="photo";
        div.style.backgroundImage="url('images/image"+i+".jpg')";
        container.appendChild(div);
    }
    afficherMasquer();
}

g.onclick = function() {
    if(p>0){
        p--;
    }  
    container.style.transform = "translate(" + -500 * p + "px)";
    container.style.transition = "all 0.5s ease";
    afficherMasquer();
}

d.onclick = function() {
    if(p<4) {
        p++;
    } 
    container.style.transform = "translate(" + -500 * p + "px)";
    container.style.transition = "all 0.5s ease";
    afficherMasquer();
}

function afficherMasquer() {
    if(p==0) {
        g.style.visibility="hidden";
    } else {
        g.style.visibility="visible";
    }
    if(p==4) {
        d.style.visibility="hidden";
    } else {
        d.style.visibility="visible";
    }
}

window.addEventListener('load', function () {
    document.getElementById('accueil').style.transform = "scale(1.1)";
})

var aboutMeHeaderElement = document.querySelector('.about-me-header');
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
            header.style.padding = '15px';
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

var informaticSkills = document.querySelector('.informatic-skills');
var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            var informaticSkillsTitle = document.getElementById('skills-title-text');
            informaticSkillsTitle.classList.toggle('animateBottom');
            var informaticSkillsWeb = document.getElementById('informatic-skills-web');
            informaticSkillsWeb.classList.toggle('animateLeft');
            var informaticSkillsPOO = document.getElementById('informatic-skills-poo');
            informaticSkillsPOO.classList.toggle('animateFade');
            var informaticSkillsFrameworks = document.getElementById('informatic-skills-frameworks');
            informaticSkillsFrameworks.classList.toggle('animateRight');
            var informaticSkillsDatabase = document.getElementById('informatic-skills-database');
            informaticSkillsDatabase.classList.toggle('animateLeft');
            var informaticSkillsOther = document.getElementById('informatic-skills-other');
            informaticSkillsOther.classList.toggle('animateRight');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 })
observer.observe(informaticSkills);

var informaticSkillsDescriptionObserver = document.querySelector('.informatic-skills-description');
var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            var informaticSkillsDescription = document.getElementById('informatic-skills-description');
            informaticSkillsDescription.classList.toggle('animateTop');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 })
observer.observe(informaticSkillsDescriptionObserver);