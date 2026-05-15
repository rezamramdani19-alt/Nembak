let popupCount = 1;

const photos = [
    "1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg",
    "6.jpeg","7.jpeg","8.jpeg","9.jpeg","10.jpeg",
    "11.jpeg","12.jpeg","13.jpeg","14.jpeg","15.jpeg",
    "16.jpeg","17.jpeg","18.jpeg","19.jpeg","20.jpeg",
    "21.jpeg","22.jpeg"
];

function createPopup() {
    popupCount++;

    const newPopup = document.createElement("div");
    newPopup.className = "popup-duplicate popup-box";

    newPopup.innerHTML = `
        <h2>Kamu mau ga jadi pacar aku?</h2>
        <button class="yesBtn">Iya</button>
        <button class="noBtn">Tidak</button>
    `;

    newPopup.style.left = Math.random() * 70 + "vw";
    newPopup.style.top = Math.random() * 70 + "vh";

    document.body.appendChild(newPopup);

    newPopup.querySelector(".yesBtn").onclick = startSuccessSequence;
    newPopup.querySelector(".noBtn").onclick = createPopup;

    if (popupCount === 5) alert("Kamu harus pencet tombol Iya 😡");
    if (popupCount === 10) alert("Udah 10 kali loh! Pencet Iya sekarang 😤");
}

function createPhoto() {
    const div = document.createElement("div");
    div.classList.add("flying-photo");

    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    div.style.backgroundImage = `url('${randomPhoto}')`;

    div.style.left = Math.random() * 100 + "vw";

    const drift = (Math.random() * 80 - 40) + "px";
    div.style.setProperty("--drift", drift);

    const size = 80 + Math.random() * 40;
    div.style.width = size + "px";
    div.style.height = size + "px";

    document.getElementById("hearts-container").appendChild(div);

    setTimeout(() => div.remove(), 4000);
}

function startSuccessSequence() {
    alert("Akhirnya kamu pencet Iya ❤️");

    document.querySelectorAll(".popup-duplicate").forEach(p => p.remove());
    document.getElementById("popup").style.display = "none";

    const successText = document.getElementById("successText");
    successText.style.opacity = "1";
    successText.style.transform = "scale(1)";

    setInterval(createPhoto, 150);
}

document.getElementById("noBtn").onclick = createPopup;
document.getElementById("yesBtn").onclick = startSuccessSequence;
