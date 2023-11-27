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
 // Add event listener for the back option
 var backToHome = document.getElementById('back-to-home');
 backToHome.addEventListener('click', function () {
     // Replace this with the actual URL of your home page
     window.location.href = '././index';
 });

  });


  // Add this to your existing JavaScript code
document.addEventListener('DOMContentLoaded', function () {
  var projects = document.querySelectorAll('.projects-list a');
  var projectInfo = document.createElement('div');
  projectInfo.classList.add('project-info');

  document.body.appendChild(projectInfo);

  projects.forEach(function (project) {
    project.addEventListener('mouseover', function () {
      var info = this.getAttribute('data-info');
      projectInfo.textContent = info;
      projectInfo.style.display = 'block';
    });

    project.addEventListener('mouseout', function () {
      projectInfo.style.display = 'none';
    });
  });
});
