/* =========================================
   BIRTHDAY COUNTDOWN
========================================= */

const birthday = new Date("September 9, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = birthday - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        document.querySelector(".countdown-section h2").textContent =
            "It's Your Special Day! 🎂❤️";

        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================================
   SCROLL TO MESSAGE
========================================= */

function scrollToMessage() {

    document.getElementById("message").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   GIFT REVEAL
========================================= */

function openGift() {

    const message = document.getElementById("giftMessage");
    const gift = document.getElementById("gift");

    message.classList.toggle("show");

    if (message.classList.contains("show")) {

        gift.textContent = "💖";

        createHeartBurst();

    } else {

        gift.textContent = "🎁";

    }
}


/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    const hearts = ["♥", "♡", "❤", "💗", "💕"];

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        12 + Math.random() * 25 + "px";

    heart.style.animationDuration =
        6 + Math.random() * 8 + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 14000);
}

setInterval(createHeart, 900);


/* =========================================
   HEART BURST
========================================= */

function createHeartBurst() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.className = "floating-heart";

        heart.textContent = "♥";

        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.bottom = "45%";

        heart.style.color =
            `hsl(${330 + Math.random() * 40}, 100%, 75%)`;

        heart.style.fontSize =
            15 + Math.random() * 25 + "px";

        heart.style.transition =
            "all 1.5s ease";

        heart.style.zIndex = "50";

        document.body.appendChild(heart);

        const x =
            (Math.random() - 0.5) * 600;

        const y =
            (Math.random() - 0.5) * 500;

        setTimeout(() => {

            heart.style.transform =
                `translate(${x}px, ${y}px) scale(0.2)`;

            heart.style.opacity = "0";

        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 1600);
    }
}


/* =========================================
   MUSIC
========================================= */

const music =
    document.getElementById("birthdayMusic");

const musicBtn =
    document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        musicBtn.textContent = "🔊";

        playing = true;

    } else {

        music.pause();

        musicBtn.textContent = "🎵";

        playing = false;

    }

});
