const popup = document.getElementById("popup");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");
const heartsContainer = document.getElementById("hearts-container");

// Tombol "Tidak" kabur
noBtn.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - popup.clientWidth;
    const maxY = window.innerHeight - popup.clientHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    popup.style.left = newX + "px";
    popup.style.top = newY + "px";
});

// Fungsi love terbang
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";

    const startLeft = Math.random() * 100;
    const drift = (Math.random() * 80 - 40) + "px";

    heart.style.left = startLeft + "vw";
    heart.style.setProperty("--drift", drift);

    const size = 20 + Math.random() * 20;
    heart.style.fontSize = size + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}

// Klik "Iya"
yesBtn.addEventListener("click", () => {
    popup.style.display = "none";
    result.style.display = "block";

    const interval = setInterval(createHeart, 200);

    setTimeout(() => clearInterval(interval), 8000);
});
