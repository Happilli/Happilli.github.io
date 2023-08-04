function toggleTheme() {
  var body = document.getElementsByTagName('body')[0];
  var themeIcon = document.getElementsByClassName('theme-icon')[0];

  body.classList.toggle('dark-theme');
  themeIcon.classList.toggle('dark');

  if (body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
  } else {
      localStorage.setItem('theme', 'light');
  }

  if (body.classList.contains('dark-theme')) {
      body.classList.remove('light-theme');
      themeIcon.style.borderColor = 'white'; // Set white border in night mode
  } else {
      body.classList.add('light-theme');
      themeIcon.style.borderColor = 'black'; // Set black border in light mode
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var savedTheme = localStorage.getItem('theme');
  var body = document.getElementsByTagName('body')[0];
  var themeIcon = document.getElementsByClassName('theme-icon')[0];

  if (savedTheme === 'dark') {
      toggleTheme();
  }

  if (savedTheme === 'light') {
      body.classList.add('light-theme');
      themeIcon.style.borderColor = 'black'; // Set black border in light mode
  }
});
