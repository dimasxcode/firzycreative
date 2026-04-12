(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const phoneNumber = "6282322897591";
        const message = "Halo, saya ingin menanyakan sesuatu dari layanan Firzy Creative";

        const waButton = document.querySelector('.btn-wa-forward');
        if (waButton) {
            waButton.addEventListener('click', () => {
                const encodeMessage = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeMessage}`;
                window.open(whatsappUrl, '_blank');
            });
        }
    });
})();