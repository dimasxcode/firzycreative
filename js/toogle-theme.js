(function () {
    document.addEventListener("DOMContentLoaded", () => {
        const themeToggle = document.querySelector('#theme-toggle');
        const lightIcon = document.querySelector('.light-theme');
        const nightIcon = document.querySelector('.night-theme');
        const body = document.body;

        function updateIcon(isDark) {
            if (isDark) {
                nightIcon.classList.add('active');
                lightIcon.classList.remove('active');
            } else {
                lightIcon.classList.add('active');
                nightIcon.classList.remove('active');
            }
        }

        const savedTheme = localStorage.getItem('theme-pilihan');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            updateIcon(true);
        } else {
            updateIcon(false);
        }

        themeToggle.addEventListener('click', () => {
            const isDark = body.classList.toggle('dark-mode');

            updateIcon(isDark);

            localStorage.setItem('theme-pilihan', isDark ? 'dark' : 'light');
        });
    });
})();