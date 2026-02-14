function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
});

const particleContainer = document.getElementById("particles");

function createParticle() {
    const p = document.createElement("div");
    p.classList.add("particle");

    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (Math.random() * 6 + 6) + "s";
    let size = Math.random() * 10 + 4;
    p.style.width = p.style.height = size + "px";

    particleContainer.appendChild(p);

    setTimeout(() => {
        p.remove();
    }, 12000);
}

setInterval(createParticle, 200);
