document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll(".navbar a");
    const navbar = document.querySelector("header");

    // Custom smooth scroll function
    function smoothScroll(target, duration) {
        const targetSection = document.querySelector(target);
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); // Ensure progress doesn't exceed 1

            // Ease-in-out effect
            const ease = (progress) => {
                return progress < 0.5
                    ? 4 * progress * progress * progress
                    : (progress - 1) * (progress - 1) * (progress - 1) + 1;
            };

            window.scrollTo(0, startPosition + distance * ease(progress));

            if (progress < 1) requestAnimationFrame(animation);
        }

        requestAnimationFrame(animation);
    }

    // Smooth scroll on link click with jiggly effect
    navbarLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");

            // Add jiggle class
            navbar.classList.add("jiggle");
            setTimeout(() => {
                navbar.classList.remove("jiggle");
            }, 500); // Remove jiggle class after animation

            smoothScroll(targetId, 1000); // Adjust duration as needed (1000 ms)
        });
    });

    // Highlight active link on scroll
    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        const scrollPos = window.scrollY + 100; // Offset for active highlight

        sections.forEach((section) => {
            if (
                section.offsetTop <= scrollPos &&
                section.offsetTop + section.offsetHeight > scrollPos
            ) {
                navbarLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${section.id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
});
