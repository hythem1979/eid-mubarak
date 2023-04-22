const urlParams = new URLSearchParams(window.location.search);
let arUserName = "";
let enUserName = "";
const lang = navigator.language || navigator.userLanguage;
let arMessageText = "";
let enMessageText = "";

if (urlParams.has("arname")) {
    arUserName = decodeURIComponent(urlParams.get("arname"));
    arMessageText = "كل عام وأنتم بخير، " + arUserName + "!<br> تقبل الله منا ومنكم صالح الأعمال وأعاده علينا وعليكم بالخير واليمن والبركات";
}

if (urlParams.has("enname")) {
    enUserName = decodeURIComponent(urlParams.get("enname"));
    enMessageText = "Eid Mubarak, " + enUserName + "!<br> May the blessings of Allah be with you and your family always.";
}

const arMessage = document.querySelector(".ar-message");
const enMessage = document.querySelector(".en-message");
const arName = document.querySelector("#ar-name");
const enName = document.querySelector("#en-name");

if (arMessageText) {
    arMessage.style.display = "block";
    arName.innerHTML = arUserName;
}

if (enMessageText) {
    enMessage.style.display = "block";
    enName.innerHTML = enUserName;
}

const fireworksContainer = document.getElementById("fireworks-container");

function createFirework() {
    const colors = ["yellow", "green", "blue", "purple", "orange", "pink"];
    const firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.left = Math.random() * 100 + "%";
    firework.style.top = Math.random() * 100 + "%";
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    fireworksContainer.appendChild(firework);
    setTimeout(() => {
        firework.parentNode.removeChild(firework);
    }, 500);
}

setInterval(createFirework, 100);
