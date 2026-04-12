window.onscroll = function () {
    localStorage.setItem('user_scroll_pos', window.scrollY);
};

window.addEventListener('DOMContentLoaded', () => {
    const savedPos = localStorage.getItem('user_scroll_pos');

    if (savedPos) {
        setTimeout(() => {
            window.scrollTo({
                top: parseInt(savedPos),
                behavior: 'smooth'
            });
        }, 100);
    }
});