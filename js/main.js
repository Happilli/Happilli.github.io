document.addEventListener('DOMContentLoaded', function() {
    const navUl = document.querySelector('nav ul');
    const sections = document.querySelectorAll('.content');
    const parallaxElement = document.querySelector('.parallax');
    const dateAndTimeOverlay = createDateTimeOverlay();
    const observer = new IntersectionObserver(animateSkillBars, { threshold: 0.5 });
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    let currentSectionIndex = 0;

    // Add event listener for hover on nav links to switch sections
    navUl.addEventListener('mouseover', function(event) {
        if (event.target.tagName === 'A') {
            const sectionId = event.target.getAttribute('data-section');
            const targetIndex = Array.from(navUl.children).findIndex(item => item.firstElementChild.getAttribute('data-section') === sectionId);
            showSection(targetIndex);
        }
    });

    // Event listener for touch swipe on nav to switch sections
    let touchstartX = 0;
    let touchendX = 0;
    navUl.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
    });

    navUl.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchendX < touchstartX) {
            // Swiped left
            showSection(currentSectionIndex + 1);
        }

        if (touchendX > touchstartX) {
            // Swiped right
            showSection(currentSectionIndex - 1);
        }
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    observer.observe(document.getElementById('skills'));

    function showSection(index) {
        const lastIndex = sections.length - 1;
    
        if (index < 0) {
            index = 0;
        } else if (index > lastIndex) {
            index = lastIndex;
        }
    
        const currentSection = sections[currentSectionIndex];
        const targetSection = sections[index];
    
        currentSection.style.display = 'none';
        targetSection.style.display = 'block';
    
        updateBackgrounds(index);
    
        currentSectionIndex = index;
        dateAndTimeOverlay.classList.toggle('translucent', ['portfolio', 'skills', 'contact'].includes(targetSection.getAttribute('id')));
    }
    

    function updateBackgrounds(index) {
        const backgrounds = {
            0: '../assets/backgroundX.jpeg',
            1: '../assets/background_x4.jpeg',
            2: '../assets/backgroundX2.jpeg',
            3: '../assets/background_x2.jpeg'
        };
        const backgroundUrl = backgrounds[index] || backgrounds[0];
    
        // Update parallax background
        parallaxElement.style.backgroundImage = `url('${backgroundUrl}')`;
        parallaxElement.style.backgroundSize = 'cover';
        parallaxElement.style.backgroundPosition = 'center';
        parallaxElement.style.padding = '1rem 0';
    
        // Update header and footer backgrounds
        const gradientOverlay = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))';
        header.style.background = `${gradientOverlay}, url('${backgroundUrl}')`;
        header.style.backgroundSize = 'cover';
        header.style.backgroundPosition = 'center';
        header.style.padding = '1rem 0';
        
        footer.style.background = `${gradientOverlay}, url('${backgroundUrl}')`;
        footer.style.backgroundSize = 'cover';
        footer.style.backgroundPosition = 'center';
        footer.style.padding = '1rem 0';
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


