// service hover animation
const serviceElements = document.querySelectorAll('.service');

  serviceElements.forEach((element) => {
    element.addEventListener('mouseover', () => {
      const randomRotation = (Math.random() * 2 - 1) * 3; // Generates a random number between -3 and 3
      element.style.transform = `scale(1.05) rotate(${randomRotation}deg)`;
    });

    element.addEventListener('mouseout', () => {
      element.style.transform = 'scale(1) rotate(0deg)';
    });
  });

  
// scroll to top button
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.onscroll = function() {
    const backButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backButton.style.display = "block";
      backButton.style.opacity = 1; 
    } else {
      backButton.style.opacity = 0; 
    }
  };

  
  
  
  
  


