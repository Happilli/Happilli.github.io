
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('main');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const dateTimeOverlay = document.querySelector('.date-time-overlay');
    const bgm = document.getElementById('bmusic');

    loader.style.display = 'block';
    content.style.display = 'none';
    dateTimeOverlay.style.display = 'none';

    setTimeout(function() {
        loader.style.display = 'none'; 
        content.style.display = 'block';
        header.style.display = 'block'; 
        footer.style.display = 'block'; 
        dateTimeOverlay.style.display = 'block';
        updateDateTime();

        let musicStarted = false;

        function startMusic() {
            if (!musicStarted) {
                bgm.play();
                musicStarted = true;
            }
        }

        document.addEventListener('scroll', startMusic);

         document.body.addEventListener('click', startMusic);

    }, 3000);
});

function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    const formattedTime = now.toLocaleTimeString('en-US');

    document.getElementById('current-date').textContent = formattedDate;
    document.getElementById('current-time').textContent = formattedTime;
}


