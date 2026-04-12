(function () {
    // Typing Animation for text-content1
    const mainHeading = document.getElementById('main-heading');
    const cursor = document.querySelector('.cursor');
    const textArray = ['Firzy Creative.', 'Animasi', 'Ilustrasi', 'Editor Konten'];
    const typingSpeed = 150; // milliseconds per character
    const deletingSpeed = 150; // milliseconds per character
    const delayBeforeTyping = 1500; // pause after typing before deleting
    const delayAfterDeleting = 500; // pause after deleting before typing next text

    async function typeText(element, text) {
        // Ensure cursor is blinking during typing
        cursor.classList.remove('stopped');

        for (let i = 0; i < text.length; i++) {
            element.textContent += text[i];
            await new Promise(resolve => setTimeout(resolve, typingSpeed));
        }

        // Stop blinking once typing finished
        cursor.classList.add('stopped');
    }

    async function deleteText(element) {
        // Resume blinking when deletion starts
        cursor.classList.remove('stopped');

        let text = element.textContent;
        while (text.length > 0) {
            element.textContent = text.substring(0, text.length - 1);
            text = element.textContent;
            await new Promise(resolve => setTimeout(resolve, deletingSpeed));
        }
    }

    async function animateTexts() {
        while (true) {
            for (let i = 0; i < textArray.length; i++) {
                const text = textArray[i];

                // Type the text
                await typeText(mainHeading, text);

                // Wait before deleting
                await new Promise(resolve => setTimeout(resolve, delayBeforeTyping));

                // Wait after deleting
                await new Promise(resolve => setTimeout(resolve, delayAfterDeleting));

                // Delete the text
                await deleteText(mainHeading);
            }
        }
    }

    // Start animation when page loads
    window.addEventListener('load', animateTexts);
})();