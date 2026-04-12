(function () {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-track img');
    const gap = 20; // sesuaikan dengan gap di CSS
    let index = 0;

    const pause = 2; // detik berhenti
    const duration = 0.8; // durasi geser

    function getItemWidth() {
        return items[0].offsetWidth + gap;
    }

    function move() {
        index++;
        const distance = getItemWidth() * index;

        gsap.to(track, {
            x: -distance,
            duration: duration,
            ease: "power2.inOut",
            onComplete: () => {
                if (index >= items.length / 2) {
                    gsap.set(track, {
                        x: 0
                    });
                    index = 0;
                }
            }
        });
    }

    function loop() {
        gsap.delayedCall(pause, () => {
            move();
            loop();
        });
    }

    window.addEventListener('resize', () => {
        gsap.set(track, {
            x: 0
        });
        index = 0;
    });

    loop();
})();