document.addEventListener("DOMContentLoaded", function () {
    /* Kapcsolat űrlap -> mailto (csak ha lenne űrlap) */
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Kérlek, tölts ki minden mezőt!");
                return;
            }

            const subject = encodeURIComponent("Üzenet a PC Doki Röszke weboldalról");
            const body = encodeURIComponent(
                "Név: " + name + "\n" +
                "Email: " + email + "\n\n" +
                "Üzenet:\n" + message
            );

            window.location.href =
                "mailto:laszlo.katona.hu@gmail.com" +
                "?subject=" + subject +
                "&body=" + body;
        });
    }

    /* Interaktív hero szöveg – váltakozó kérdések */
    const brandSub = document.getElementById("brand-sub");

    if (brandSub) {
        const phrases = [
            "Lassú a géped vagy már el sem indul?",
            "Zajos, meleg, fagyogat a laptopod?",
            "Szaggat a net vagy eltűnik a WiFi?",
            "Nem tudod, mit érdemes fejleszteni vagy venni?"
        ];

        let index = 0;
        brandSub.textContent = phrases[index];

        function showNextPhrase() {
            index = (index + 1) % phrases.length;
            brandSub.classList.add("fade-out");

            setTimeout(() => {
                brandSub.textContent = phrases[index];
                brandSub.classList.remove("fade-out");
            }, 220);
        }

        setInterval(showNextPhrase, 4000);
    }

    /* HERO SLIDESHOW – kattintásra vált */
    const slides = Array.from(document.querySelectorAll(".hero-slide"));
    const dots = Array.from(document.querySelectorAll(".hero-dot"));
    const nextBtn = document.querySelector(".hero-next");

    if (slides.length) {
        let current = 0;

        function showSlide(i) {
            slides[current].classList.remove("active");
            if (dots[current]) {
                dots[current].classList.remove("active");
            }

            current = i;

            slides[current].classList.add("active");
            if (dots[current]) {
                dots[current].classList.add("active");
            }
        }

        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));
        showSlide(0);

        if (dots.length === slides.length) {
            dots.forEach((dot, i) => {
                dot.addEventListener("click", (e) => {
                    e.stopPropagation();
                    showSlide(i);
                });
            });
        }

        slides.forEach((slide) => {
            slide.addEventListener("click", () => {
                const next = (current + 1) % slides.length;
                showSlide(next);
            });
        });

        if (nextBtn) {
            nextBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                const next = (current + 1) % slides.length;
                showSlide(next);
            });
        }
    }

    /* Lebegő kontakt widget (panel nyit/zár) */
    const contactToggle = document.getElementById("contact-toggle");
    const contactPanel = document.getElementById("contact-panel");

    if (contactToggle && contactPanel) {
        contactToggle.addEventListener("click", () => {
            contactPanel.classList.toggle("open");
        });

        document.addEventListener("click", (e) => {
            if (!contactPanel.contains(e.target) &&
                !contactToggle.contains(e.target)) {
                contactPanel.classList.remove("open");
            }
        });
    }
});
