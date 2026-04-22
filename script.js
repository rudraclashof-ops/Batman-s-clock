// CLOCK
function updateClock() {
  const now = new Date();

  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hr = now.getHours();

  const secDeg = sec * 6;
  const minDeg = min * 6 + sec * 0.1;
  const hrDeg = hr * 30 + min * 0.5;

  document.getElementById("second").style.transform =
    `translateX(-50%) rotate(${secDeg}deg)`;

  document.getElementById("minute").style.transform =
    `translateX(-50%) rotate(${minDeg}deg)`;

  document.getElementById("hour").style.transform =
    `translateX(-50%) rotate(${hrDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();


// PARTICLES (SMOKE / GLOW)
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

let particles = [];

for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    speed: Math.random() * 0.5,
    alpha: Math.random()
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.y -= p.speed;
    if (p.y < 0) p.y = canvas.height;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 120, 0, ${p.alpha})`;
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();
