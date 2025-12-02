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

            window.location.href = "mailto:laszlo.katona.hu@gmail.com"
                + "?subject=" + subject
                + "&body=" + body;
        });
    }

    /* Háttérzene autoplay + gomb */
    /*const music = document.getElementById("bg-music");
    const toggle = document.getElementById("music-toggle");

    setTimeout(() => {
        try {
            music.muted = false;
            music.volume = 0.08; // nagyon halk
        } catch (e) {
            console.warn("A böngésző blokkolhatja az automatikus lejátszást.");
        }
    }, 1200);

    let playing = true;

    toggle.addEventListener("click", () => {
        if (playing) {
            music.pause();
            toggle.textContent = "🎵 Zene be";
        } else {
            music.play();
            music.volume = 0.08;
            toggle.textContent = "🔇 Zene ki";
        }
        playing = !playing;
    });
    */

    /* HERO SLIDESHOW – CLICK TO NEXT */
const slides = Array.from(document.querySelectorAll(".hero-slide"));
const nextBtn = document.querySelector(".hero-next");

if (slides.length && nextBtn) {
    let current = 0;

    function showSlide(i) {
        slides[current].classList.remove("active");
        current = i;
        slides[current].classList.add("active");
    }

    // Gomb → következő slide
    nextBtn.addEventListener("click", () => {
        const next = (current + 1) % slides.length;
        showSlide(next);
    });

    // Slide-ra kattintás → ugyanaz mint a gomb
    slides.forEach((slide) => {
        slide.addEventListener("click", () => {
            const next = (current + 1) % slides.length;
            showSlide(next);
        });
    });

    // Induló állapot
    showSlide(0);
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
