document.addEventListener("DOMContentLoaded", function () {

    // ================================================================
    // 1. LEBEGŐ KONTAKT WIDGET - MINDIG NYITVA
    // ================================================================
    const contactToggle = document.getElementById("contact-toggle");
    const contactPanel = document.getElementById("contact-panel");
    const toggleIcon = document.getElementById("toggle-icon");

    // A panel alapból nyitva van (open osztály a HTML-ben)
    // A gomb csak bezárásra szolgál

    if (contactToggle && contactPanel) {
        contactToggle.addEventListener("click", function (e) {
            e.stopPropagation();
            contactPanel.classList.toggle("open");

            if (toggleIcon) {
                if (contactPanel.classList.contains("open")) {
                    toggleIcon.textContent = "✕";
                } else {
                    toggleIcon.textContent = "✉";
                }
            }
        });

        // Kattintás a panelen kívülre → bezárás
        document.addEventListener("click", function (e) {
            if (contactPanel.classList.contains("open") &&
                !contactPanel.contains(e.target) &&
                !contactToggle.contains(e.target)) {
                contactPanel.classList.remove("open");
                if (toggleIcon) {
                    toggleIcon.textContent = "✉";
                }
            }
        });

        // ESC billentyűre bezárás
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && contactPanel.classList.contains("open")) {
                contactPanel.classList.remove("open");
                if (toggleIcon) {
                    toggleIcon.textContent = "✉";
                }
            }
        });
    }

    // ================================================================
    // 2. TELEFON ÉS EMAIL ÖSSZEÁLLÍTÁSA
    // ================================================================
    const tel = "+36 30 570 1844";
    const telLink = document.getElementById("tel-link");
    if (telLink) {
        telLink.textContent = tel;
        telLink.href = "tel:+36305701844";
    }

    const user = "laszlo.katona.hu";
    const domain = "gmail.com";
    const email = user + "@" + domain;
    const mailLink = document.getElementById("mail-link");
    if (mailLink) {
        mailLink.textContent = email;
        mailLink.href = "mailto:" + email;
    }

});
