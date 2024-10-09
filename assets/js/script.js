document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  const typedText = document.querySelector(".typed-text");
  const phrases = [
    "Welcome to My Portfolio",
    "Explore My Projects",
    "Connect with Me",
  ];
  let index = 0;

  function type() {
    const currentPhrase = phrases[index].split("");
    typedText.innerHTML = "";
    currentPhrase.forEach((letter, i) => {
      setTimeout(() => {
        typedText.innerHTML += letter;
      }, 100 * i);
    });
    index = (index + 1) % phrases.length;
    setTimeout(() => {
      type();
    }, 3000);
  }

  type();

  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        smoothScrollTo(targetSection.offsetTop);
      }
    });
  });

  const projectButtons = document.querySelectorAll(".project-button");
  projectButtons.forEach((button) => {
    button.addEventListener("mouseover", function () {
      button.style.opacity = "0.8";
    });
    button.addEventListener("mouseout", function () {
      button.style.opacity = "1";
    });
  });

  function smoothScrollTo(targetPosition) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, startPosition + distance * progress);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  const sections = document.querySelectorAll("section");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`nav ul li a[href="#${id}"]`);
      if (entry.isIntersecting) {
        link.classList.add("active");
        link.style.fontSize = "1.2em";
      } else {
        link.classList.remove("active");
        link.style.fontSize = "1em";
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach((section) => {
    observer.observe(section);
  });

  let lastScrollTop = 0;
  const footer = document.querySelector(".footer");

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      footer.style.transform = "translate(-50%, 100%)";
    } else {
      footer.style.transform = "translate(-50%, 0)";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});
