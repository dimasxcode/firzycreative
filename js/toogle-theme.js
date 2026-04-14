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
    });
})();