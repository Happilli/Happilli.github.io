document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const timelineLine = document.querySelector(".timeline-line");
    const timelineSection = document.querySelector(".horizontal-timeline");
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                timelineItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add("visible");
                    }, index * 150);
                });
                timelineLine.classList.add("growing");
            } else {
                timelineItems.forEach((item) => {
                    item.classList.remove("visible");
                });
                timelineLine.classList.remove("growing");
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(timelineSection);
});
