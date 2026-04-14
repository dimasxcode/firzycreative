(function () {
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
})();