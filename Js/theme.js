function toggleTheme() {
    var body = document.getElementsByTagName('body')[0];
    var themeIcon = document.getElementsByClassName('theme-icon')[0];
    
    body.classList.toggle('dark-theme');
    themeIcon.classList.toggle('dark');
  }