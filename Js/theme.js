function toggleTheme() {
  var body = document.getElementsByTagName('body')[0];
  var themeIcon = document.getElementsByClassName('theme-icon')[0];
  
  body.classList.toggle('dark-theme');
  themeIcon.classList.toggle('dark');

  // Save the current theme preference in localStorage
  if (body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
  } else {
      localStorage.setItem('theme', 'light');
  }
}

// Check if a theme preference is saved in localStorage and apply it on page load
document.addEventListener('DOMContentLoaded', function () {
  var savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
      toggleTheme();
  }
});
