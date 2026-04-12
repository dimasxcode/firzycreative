(function () {
    function renderScrollShortcut() {
        return 
    }

    scrollBtn = document.getElementById("scrollTopBtn");

    // Event scroll
    window.addEventListener("scroll", () => {
        const windowHeight = window.innerHeight;
        const scrolledFromTop = window.scrollY;
        const totalDocHeight = document.documentElement.scrollHeight;
        const tolerance = 100;

        // Cek apakah sudah di bawah halaman
        if ((windowHeight + scrolledFromTop) >= (totalDocHeight - tolerance)) {
            scrollBtn.classList.add("show"); // tampilkan tombol
        } else {
            scrollBtn.classList.remove("show"); // sembunyikan tombol
        }
    });

    // event-listener klik tombol
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
})();