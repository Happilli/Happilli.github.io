   function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }

  function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var projectsContainer = document.querySelector('.projects-container');

    menuIcon.classList.toggle('open');
    projectsContainer.classList.toggle('open');
  }

  // Add a click event listener to the document
  document.addEventListener('click', function(event) {
    var menuIcon = document.querySelector('.menu-icon');
    var projectsContainer = document.querySelector('.projects-container');

    // Check if the projects container is open
    if (projectsContainer.classList.contains('open')) {
      // Check if the clicked element is outside the projects container and menu icon
      if (!projectsContainer.contains(event.target) && !menuIcon.contains(event.target)) {
        menuIcon.classList.remove('open');
        projectsContainer.classList.remove('open');
      }
    }
  });