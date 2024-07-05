// Function to toggle active section and change background image for 'About Me'
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content').forEach(function(section) {
        section.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Change background image for 'About Me' section with smooth transition
    if (sectionId === 'about') {
        const parallaxElement = document.querySelector('.parallax');
        parallaxElement.style.transition = "background-image 0.5s ease"; // Smooth transition
        parallaxElement.style.backgroundImage = "url('../assets/background_x2.jpeg')";
    } else {
        // Reset background image for other sections
        const parallaxElement = document.querySelector('.parallax');
        parallaxElement.style.transition = "background-image 0.5s ease"; // Smooth transition
        parallaxElement.style.backgroundImage = "url('../assets/backgroundX.jpeg')";
    }
}
