/* ==========================================
   PROJECT MOONFLOWER
========================================== */

// 🌻 LOVE NOTE JAR

const reasons = [
"I love your smile.",
"I love hearing your sleepy voice.",
"I love our late-night calls.",
"I love how you always make my day better.",
"I love your laugh.",
"I love annoying you 😭",
"I love the way you care.",
"I love how safe you make me feel.",
"I love every little thing about you.",
"There are too many reasons to fit inside one jar. ❤️"
];

const note = document.getElementById("note");
const noteButton = document.getElementById("noteButton");

if(noteButton){

    noteButton.addEventListener("click",()=>{

        const random = Math.floor(Math.random()*reasons.length);

        note.style.opacity = 0;

        setTimeout(()=>{

            note.textContent = reasons[random];

            note.style.opacity = 1;

        },200);

    });

}

/* ==========================================
      SCROLL FADE
========================================== */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }

});

});

document.querySelectorAll(".card,.photo,.dream-card,.letter-card,.jar,.quote").forEach(item=>{

observer.observe(item);

});

/* ==========================================
        MOON PARALLAX
========================================== */

const moon = document.querySelector(".moon");

document.addEventListener("mousemove",(e)=>{

if(!moon) return;

const x = (e.clientX/window.innerWidth-.5)*25;
const y = (e.clientY/window.innerHeight-.5)*25;

moon.style.transform =
`translate(${x}px,${y}px)`;

});

/* ==========================================
      SHOOTING STARS
========================================== */

function shootingStar(){

const star = document.createElement("div");

star.className = "shooting-star";

star.style.top = Math.random()*40 + "%";

star.style.left = "-150px";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},2500);

}

setInterval(shootingStar,7000);

/* ==========================================
      TOGETHER TIMER
========================================== */

const together = document.getElementById("together");

if(together){

const start = new Date("2026-06-04T00:00:00");

function updateTimer(){

const now = new Date();

const diff = now-start;

const days =
Math.floor(diff/(1000*60*60*24));

together.textContent =
`${days} days together ❤️`;

}

updateTimer();

setInterval(updateTimer,1000);

}

/* ==========================================
        SECRET
========================================== */

document.addEventListener("keydown",(e)=>{

if(e.key.toLowerCase()=="b"){

alert("🌻 B for Bujjiii ❤️");

}

});

/* ==========================================
        PAGE LOAD
========================================== */

window.onload=()=>{

document.body.style.opacity=1;

};