document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth" // Add smooth scrolling behavior
            });
        }
    }
});

const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight) {
            element.classList.add('visible');
        }
    });
};

// Listen for the scroll event and trigger animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); // Trigger animations on page load





