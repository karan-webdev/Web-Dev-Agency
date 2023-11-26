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

const browserElements = document.querySelectorAll('.browser');
applyHoverAnimation(browserElements);
  

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


document.addEventListener('DOMContentLoaded', function() {
  var backToTopButton = document.getElementById('back-to-top');

  window.addEventListener('scroll', function() {
      // Get the current scroll position
      var scrollPosition = window.scrollY || document.documentElement.scrollTop;

      // Set the opacity based on the scroll position
      backToTopButton.style.opacity = scrollPosition > 100 ? '1' : '0';
  });

  // Add a click event listener to scroll back to the top when the button is clicked
  backToTopButton.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});



const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.nextElementSibling;
  const icon = item.querySelector('i');

  item.addEventListener('click', () => {
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        const otherAnswer = otherItem.nextElementSibling;
        const otherIcon = otherItem.querySelector('i');

        otherAnswer.classList.remove('active');
        otherIcon.classList.remove('active');
        otherAnswer.style.maxHeight = "0";
      }
    });

    answer.classList.toggle('active');
    icon.classList.toggle('active');
    if (answer.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = "0";
    }
  });
});



