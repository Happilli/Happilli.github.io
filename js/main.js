document.addEventListener('DOMContentLoaded', function() {
    const navUl = document.querySelector('nav ul');
    const parallaxElement = document.querySelector('.parallax');
    const dateAndTimeOverlay = createDateTimeOverlay();
    const observer = new IntersectionObserver(animateSkillBars, { threshold: 0.5 });

    navUl.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const sectionId = event.target.getAttribute('data-section');
            showSection(sectionId);
        }
    });

    updateDateTime();
    setInterval(updateDateTime, 1000);

    observer.observe(document.getElementById('skills'));

    function showSection(sectionId) {
        const sections = document.querySelectorAll('.content');
        sections.forEach(section => section.classList.remove('active'));

        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.classList.add('active');
            updateParallaxBackground(sectionId);
        } else {
            updateParallaxBackground('default');
            updateDateTime();
        }

        dateAndTimeOverlay.classList.toggle('translucent', ['portfolio', 'skills', 'contact'].includes(sectionId));
    }

    function updateParallaxBackground(sectionId) {
        const backgrounds = {
            'portfolio': '../assets/background_x4.jpeg',
            'skills': '../assets/backgroundX2.jpeg',
            'contact': '../assets/background_x2.jpeg',
            'default': '../assets/backgroundX.jpeg'
        };
        parallaxElement.style.backgroundImage = `url('${backgrounds[sectionId] || backgrounds['default']}')`;
    }

    function createDateTimeOverlay() {
        const dateAndTimeOverlay = document.createElement('div');
        dateAndTimeOverlay.className = 'date-time-overlay';

        const dateElement = document.createElement('div');
        dateElement.id = 'current-date';
        dateElement.className = 'date-time-text';
        dateAndTimeOverlay.appendChild(dateElement);

        const timeElement = document.createElement('div');
        timeElement.id = 'current-time';
        timeElement.className = 'date-time-text';
        dateAndTimeOverlay.appendChild(timeElement);

        document.body.appendChild(dateAndTimeOverlay);

        return dateAndTimeOverlay;
    }

    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('en-US', options);
        const formattedTime = now.toLocaleTimeString('en-US');

        dateAndTimeOverlay.querySelector('#current-date').textContent = formattedDate;
        dateAndTimeOverlay.querySelector('#current-time').textContent = formattedTime;
    }

    function animateSkillBars(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.skill-level').forEach(skill => {
                    skill.style.width = skill.textContent.match(/\d+/)[0] + '%';
                });
                observer.unobserve(entry.target);
            }
        });
    }
});
