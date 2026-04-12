(function () {
    const track = document.querySelector('.container-series');
    const wrapper = document.querySelector('.slider-wrapper');
    const series = document.querySelectorAll('.series');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    const firstClone = series[0].cloneNode(true);
    const lastClone = series[series.length - 1].cloneNode(true);

    track.appendChild(firstClone); // [1, 2, 3, 1*]
    track.insertBefore(lastClone, series[0]); // [3*, 1, 2, 3, 1*]

    const allSlides = document.querySelectorAll('.series');
    const totalOriginal = series.length;
    let index = 1; // Mulai dari 1 karena index 0 adalah si "Last Clone"
    let isAnimating = false;
    let autoSlideTimer;

    const getSlideWidth = () => {
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.columnGap) || 0;
        return series[0].offsetWidth + gap;
    };

    gsap.set(track, {
        x: -getSlideWidth() * index
    });

    function goToSlide(targetIndex) {
        if (isAnimating) return;
        isAnimating = true;

        const slideWidth = getSlideWidth();

        gsap.to(track, {
            x: -slideWidth * targetIndex,
            duration: 1.2,
            ease: "power3.inOut",
            onComplete: () => {
                isAnimating = false;
                index = targetIndex;

                // --- DOKUMENTASI PERUBAHAN 2: Teleportasi Seamless ---
                // Jika kita sampai di Clone Pertama (di paling akhir)
                if (index >= totalOriginal + 1) {
                    index = 1; // Balik ke Slide 1 asli
                    gsap.set(track, {
                        x: -slideWidth * index
                    });
                }
                // Jika kita sampai di Clone Terakhir (di paling awal)
                else if (index <= 0) {
                    index = totalOriginal; // Lompat ke Slide Terakhir asli
                    gsap.set(track, {
                        x: -slideWidth * index
                    });
                }
            }
        });
    }

    // Logika Auto SLide
    function startAutoSlide() {
        // Bersihkan timer lama agar tidak ganda
        stopAutoSlide();
        autoSlideTimer = setInterval(() => {
            goToSlide(index + 1);
        }, 3000); //Ganti Slide setiap 2 detik
    }

    function stopAutoSlide() {
        clearInterval(autoSlideTimer); // Menghentikan hitungan mundur antar slide
    }

    // == Event Listener (Tombol) ==
    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        goToSlide(index + 1);
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        goToSlide(index - 1);
        startAutoSlide();
    });

    //  == Swipe Mobile ==
    let startX = 0;
    wrapper.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        stopAutoSlide(); // Pause saat jari menyentuh layar
    }, {
        passive: true
    });

    wrapper.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        if (Math.abs(diff) > 50) {
            diff > 0 ?
                goToSlide(index + 1) : goToSlide(index - 1);
        }
        startAutoSlide();
    }, {
        passive: true
    });

    // == Event Listener (Hover dan berhenti geser) ==
    wrapper.addEventListener('mouseenter', stopAutoSlide); // Animasi slide 'none' saat di artikel
    wrapper.addEventListener('mouseleave', startAutoSlide); // Animasi slide 'active' saat di artikel

    // Resize handling
    window.addEventListener('resize', () => {
        gsap.set(track, {
            x: -getSlideWidth() * index
        });
    });

    // Jalankan
    startAutoSlide();
})();