// NAV BAR BUTTON
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuButton.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('show');
        }
    });
});

// FADE-IN ANIMATION
document.addEventListener('DOMContentLoaded', function () {
    var heroSection = document.getElementById('beneficii-ingrijiri-section');

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (isElementInViewport(heroSection)) {
            heroSection.classList.add('show');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    
    handleScroll();

    
    window.addEventListener('scroll', handleScroll);
});

// SCALE IN ANIMATION

document.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var servicesSection = document.querySelector(".services-container-flex");

    if (scrollPosition > servicesSection.offsetTop - window.innerHeight / 2) {
        servicesSection.classList.add("show");
    } 
});


// SLIDE IN FROM RIGHT TO LEFT ANIMATION 

window.addEventListener('scroll', function () {
    var teamSection = document.getElementById('team');
    var position = teamSection.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        teamSection.classList.add('in-view');
    }
});

// SCALE IN ANIMATION FOR VIZIUNEA NOASTRA 

document.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var reservationSection = document.querySelector(".reservation");

    if (scrollPosition > reservationSection.offsetTop - window.innerHeight / 2) {
        reservationSection.classList.add("show");
    } 
});
