function applyHoverAnimation(elements) {
  elements.forEach((element) => {
    element.addEventListener('mouseover', () => {
      // Scale up the element
      element.style.transform = 'scale(1.1)';
    });

    element.addEventListener('mouseout', () => {
      // Restore the original scale and background color
      element.style.transform = 'scale(1)';
      element.style.backgroundColor = 'initial';
      // Reset the transition property
      element.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
    });
  });
}

const serviceElements = document.querySelectorAll('.service');
applyHoverAnimation(serviceElements);

const testimonialElements = document.querySelectorAll('.snip1533');
applyHoverAnimation(testimonialElements);

  


  window.onscroll = function() {
    const backButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backButton.style.display = "block";
      backButton.style.opacity = 1; 
    } else {
      backButton.style.opacity = 0; 
    }
  };



  
  
  
  


