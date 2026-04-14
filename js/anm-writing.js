(function () {
    document.addEventListener("DOMContentLoaded", () => {
        const mainHeading = document.getElementById('main-heading');
        const cursor = document.querySelector('.cursor');
        const textArray = ['Firzy Creative.', 'Animasi', 'Ilustrasi', 'Editor Konten'];
        const typingSpeed = 150;
        const deletingSpeed = 150;
        const delayBeforeTyping = 1500;
        const delayAfterDeleting = 500;

        async function typeText(element, text) {
            cursor.classList.remove('stopped');
            for (let i = 0; i < text.length; i++) {
                element.textContent += text[i];
                await new Promise(resolve => setTimeout(resolve, typingSpeed));
            }
            cursor.classList.add('stopped');
        }

        async function deleteText(element) {
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
                    await typeText(mainHeading, text);
                    await new Promise(resolve => setTimeout(resolve, delayBeforeTyping));
                    await new Promise(resolve => setTimeout(resolve, delayAfterDeleting));
                    await deleteText(mainHeading);
                }
            }
        }
        
        window.addEventListener('load', animateTexts);
    })
})();