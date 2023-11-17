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

  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
  })

  document.addEventListener('click', () => {
      cursor.classList.add("expand");

      setTimeout(() => {
          cursor.classList.remove("expand");
      }, 500)
  })
  

  
  
  
  


