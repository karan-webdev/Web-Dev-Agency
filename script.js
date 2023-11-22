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

  


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.style.transform = `translate(${e.pageX - 10}px, ${e.pageY - 10}px)`;
});

document.addEventListener('click', () => {
    cursor.classList.add('expand');

    setTimeout(() => {
        cursor.classList.remove('expand');
    }, 500);
});

document.getElementById('custom-toggler').addEventListener('click', function () {
    // Toggle the 'active' class on the toggler button
    this.classList.toggle('active');
});


