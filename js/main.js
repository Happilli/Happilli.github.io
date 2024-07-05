function showSection(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');

    // Change background image for About Me section
    if (sectionId === 'about') {
        document.querySelector('.parallax').style.backgroundImage = "url('../assets/background_x2.jpeg')";
    } else {
        // Reset background image for other sections
        document.querySelector('.parallax').style.backgroundImage = "url('../assets/backgroundX.jpeg')";
    }
}
