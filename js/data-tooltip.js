(function () {
    document.addEventListener("DOMContentLoaded", () => {
        const tooltip = document.createElement("div");  // membuat-element-tooltip(div)
        tooltip.className = "tooltip";
        document.body.appendChild(tooltip);             // menempatkan-tooltip-ke-body
        let activeElement = null;
        let showTimer = null;
        let hasShowOnce = false;

        // fungsi-untuk-menampilkan-tooltip
        function showTooltip(target) {
            const text = target.getAttribute("data-tooltip");

            if (!text) return;                          // kalau-tidak-ada-text-Hentikan!
            activeElement = target;
            const delay = hasShowOnce ? 80 : 500;       // menampilkan-hover-awal-lebih-lama
            clearTimeout(showTimer);
            showTimer = setTimeout(() => {
                tooltip.textContent = text;
                if (hasShowOnce) {
                    tooltip.classList.add("fast");
                } else {
                    tooltip.classList.remove("fast");
                }

                positionTooltipBellow(target);
                tooltip.classList.add("is-visible");        //tampilkan-dalam-sementara-waktu
                hasShowOnce = true;
            }, delay);
        }

        // fungsi-untuk-menyembunyikan-tooltip
        function hideTooltip() {
            clearTimeout(showTimer);
            tooltip.classList.remove("is-visible");

            tooltip.addEventListener("transitionend", function handler(e) {
                if (e.propertyName === "opacity") {
                    activeElement = null;
                    tooltip.removeEventListener("transitionend", handler);
                }
            });
        }

        // fungsi-untuk-menghitung-dan-menempatkan-tooltip
        function positionTooltipBellow(target) {
            const rect = target.getBoundingClientRect();

            const left = rect.left + rect.width / 2;
            const top = rect.bottom + 8;

            tooltip.style.left = `${left}px`;
            tooltip.style.top = `${top}px`;
            tooltip.style.transform = "translateX(-50%) translateY(8px)";
        }

        // saat-hover-element-data-tooltip
        document.addEventListener("pointerenter", (event) => {
            const target = (event.target instanceof Element) ? event.target.closest("[data-tooltip]") : null;
            if (!target) return;
            showTooltip(target);
        }, true);

        // saat-hover-keluar-element
        document.addEventListener("pointerleave", (event) => {
            const target = (event.target instanceof Element) ? event.target.closest("[data-tooltip]") : null;
            if (!target) return;
            hideTooltip();
        }, true);

        // penyesuaian-tooltip-mengikuti-halaman
        window.addEventListener("scroll", () => {
            if (activeElement && tooltip.classList.contains("show")) {
                positionTooltipBellow(activeElement);
            }
        }, true);
        window.addEventListener("resize", () => {
            if (activeElement && tooltip.classList.contains("show")) {
                positionTooltipBellow(activeElement);
            }
        });
    });
})();