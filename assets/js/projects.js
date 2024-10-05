document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const movingDot = document.getElementById("moving-dot");
  const timeline = document.querySelector(".timeline");

  window.addEventListener("scroll", () => {
    const timelineRect = timeline.getBoundingClientRect();
    const scrollPos = window.scrollY + window.innerHeight / 2;
    const timelineStart = timeline.offsetTop;
    const timelineEnd = timelineStart + timeline.offsetHeight;

    if (scrollPos >= timelineStart && scrollPos <= timelineEnd) {
      const timelineProgress =
        (scrollPos - timelineStart) / (timelineEnd - timelineStart);
      const dotPosition = timeline.offsetHeight * timelineProgress;
      movingDot.style.transform = `translateY(${dotPosition}px)`;
    }

    timelineItems.forEach((item) => {
      const itemPosition = item.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (itemPosition < screenPosition) {
        item.style.opacity = 1;
        item.style.transform = "translateY(0)";
        item.style.transition = "all 0.5s ease-out";
      }
    });
  });
});
