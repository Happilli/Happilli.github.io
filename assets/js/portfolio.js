document.addEventListener("DOMContentLoaded", function() {
  const fadeElements = document.querySelectorAll('.fade-in');

  const fadeInOnScroll = () => {
      const windowHeight = window.innerHeight;
      fadeElements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;

          if (elementTop < windowHeight * 0.8 && elementTop > 0) {
              element.classList.add('visible');
          } else {
              element.classList.remove('visible');
          }
      });
  };

  window.addEventListener('scroll', fadeInOnScroll);
  fadeInOnScroll();
});
