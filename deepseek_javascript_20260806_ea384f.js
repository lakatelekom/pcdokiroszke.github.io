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
            // Ellenőrizzük, hogy a dot-ok száma megegyezik-e a slide-okéval
            if (dots.length === slides.length) {
                dots.forEach(d => d.classList.remove("active"));
            }

            slides.forEach(s => s.classList.remove("active"));

            // Biztonságos index
            current = (index + slides.length) % slides.length;

            slides[current].classList.add("active");

            if (dots.length === slides.length) {
                dots[current].classList.add("active");
            }
        }

        // Dot-okra kattintás
        dots.forEach((dot, i) => {
            dot.addEventListener("click", function (e) {
                e.stopPropagation();
                showSlide(i);
            });
        });

        // Következő gomb
        if (nextBtn) {
            nextBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                showSlide(current + 1);
            });
        }

        // Opcionális: kattintás a slide-ra is vált
        slides.forEach((slide) => {
            slide.addEventListener("click", function () {
                showSlide(current + 1);
            });
        });

        // Automatikus váltás 6 másodpercenként
        let autoInterval = setInterval(() => {
            showSlide(current + 1);
        }, 6000);

        // Megállítjuk az automatikus váltást, ha a felhasználó interaktál
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

    if (contactToggle && contactPanel) {
        contactToggle.addEventListener("click", function (e) {
            e.stopPropagation();
            contactPanel.classList.toggle("open");
        });

        // Kattintás a panelen kívülre → bezárás
        document.addEventListener("click", function (e) {
            if (!contactPanel.contains(e.target) && !contactToggle.contains(e.target)) {
                contactPanel.classList.remove("open");
            }
        });
    }

    // ================================================================
    // 3. TELEFON ÉS EMAIL ÖSSZEÁLLÍTÁSA (botvédelem)
    // ================================================================
    // Telefon
    const tel = "+36 30 570 1844";
    const telLink = document.getElementById("tel-link");
    if (telLink) {
        telLink.textContent = tel;
        telLink.href = "tel:+36305701844";
    }

    // E-mail (szétszedve)
    const user = "laszlo.katona.hu";
    const domain = "gmail.com";
    const email = user + "@" + domain;

    const mailLink = document.getElementById("mail-link");
    if (mailLink) {
        mailLink.textContent = email;
        mailLink.href = "mailto:" + email;
    }

    // ================================================================
    // 4. BRAND SUB – VÁLTAKOZÓ SZÖVEG (opcionális)
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