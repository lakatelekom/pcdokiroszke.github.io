document.addEventListener("DOMContentLoaded", function () {

    // ================================================================
    // 1. HERO SLIDESHOW
    // ================================================================
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".hero-dot");
    const nextBtn = document.getElementById("heroNext");

    if (slides.length) {
        let current = 0;

        function showSlide(index) {
            if (dots.length === slides.length) {
                dots.forEach(d => d.classList.remove("active"));
            }
            slides.forEach(s => s.classList.remove("active"));
            current = (index + slides.length) % slides.length;
            slides[current].classList.add("active");
            if (dots.length === slides.length) {
                dots[current].classList.add("active");
            }
        }

        dots.forEach((dot, i) => {
            dot.addEventListener("click", function (e) {
                e.stopPropagation();
                showSlide(i);
            });
        });

        if (nextBtn) {
            nextBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                showSlide(current + 1);
            });
        }

        slides.forEach((slide) => {
            slide.addEventListener("click", function () {
                showSlide(current + 1);
            });
        });

        let autoInterval = setInterval(() => {
            showSlide(current + 1);
        }, 6000);

        const heroContainer = document.querySelector(".hero-slides");
        if (heroContainer) {
            heroContainer.addEventListener("mouseenter", () => {
                clearInterval(autoInterval);
            });
            heroContainer.addEventListener("mouseleave", () => {
                autoInterval = setInterval(() => {
                    showSlide(current + 1);
                }, 6000);
            });
        }
    }

    // ================================================================
    // 2. LEBEGŐ KONTAKT WIDGET
    // ================================================================
    const contactToggle = document.getElementById("contact-toggle");
    const contactPanel = document.getElementById("contact-panel");
    const toggleIcon = document.getElementById("toggle-icon");

    if (contactToggle && contactPanel) {
        contactPanel.classList.remove("open");

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
    // 3. TELEFON ÉS EMAIL ÖSSZEÁLLÍTÁSA
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

    // ================================================================
    // 4. BRAND SUB – VÁLTAKOZÓ SZÖVEG
    // ================================================================
    const brandSub = document.getElementById("brand-sub");

    if (brandSub) {
        const phrases = [
            "Röszke · Mérnöki számítógépszerviz",
            "⚡ Gyorsítás, tisztítás, tuning",
            "📡 WiFi & hálózat optimalizálás",
            "💻 Laptop & PC javítás",
            "🛠 Helyszíni kiszállás"
        ];

        let index = 0;
        brandSub.textContent = phrases[index];

        setInterval(() => {
            index = (index + 1) % phrases.length;
            brandSub.style.opacity = "0";

            setTimeout(() => {
                brandSub.textContent = phrases[index];
                brandSub.style.opacity = "1";
            }, 250);
        }, 4000);
    }

});
