(function () {
    document.addEventListener("DOMContentLoaded", () => {
        const themeToggle = document.querySelector('#theme-toggle');
        const lightIcon = document.querySelector('.light-theme');
        const nightIcon = document.querySelector('.night-theme');
        const body = document.body;

        // Fungsi untuk mengganti tampilan ikon
        function updateIcon(isDark) {
            if (isDark) {
                // Jika Gelap: Aktifkan ikon Bulan, matikan ikon Matahari
                nightIcon.classList.add('active');
                lightIcon.classList.remove('active');
            } else {
                // Jika Terang: Aktifkan ikon Matahari, matikan ikon Bulan
                lightIcon.classList.add('active');
                nightIcon.classList.remove('active');
            }
        }

        // 1. Cek memori saat halaman pertama kali dibuka
        const savedTheme = localStorage.getItem('theme-pilihan');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            updateIcon(true);
        } else {
            updateIcon(false);
        }

        // 2. Event Klik Tombol
        themeToggle.addEventListener('click', () => {
            // Balikkan kondisi dark-mode pada body
            const isDark = body.classList.toggle('dark-mode');

            // Update animasi ikon berdasarkan kondisi terbaru
            updateIcon(isDark);

            // Simpan ke LocalStorage agar permanen
            localStorage.setItem('theme-pilihan', isDark ? 'dark' : 'light');
        });
    });
})();