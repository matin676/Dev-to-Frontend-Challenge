document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const createSnowFlake = () => {
    const snowFlake = document.createElement("div");
    snowFlake.classList.add("snowflake");
    snowFlake.textContent = "❄";
    snowFlake.style.left = Math.random() * window.innerWidth + "px";
    snowFlake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowFlake.style.opacity = Math.random();
    document.body.appendChild(snowFlake);

    setTimeout(() => {
      snowFlake.remove();
    }, 5000);
  };

  setInterval(createSnowFlake, 100);

  const hamburger = document.createElement("div");
  hamburger.classList.add("hamburger");
  for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    hamburger.appendChild(span);
  }
  document.querySelector("header").appendChild(hamburger);

  const nav = document.querySelector("nav ul");
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

const style = document.createElement("style");
style.textContent = `
    .snowflake {
        position: fixed;
        top: 0;
        font-size: 1.5rem;
        color: #fff;
        user-select: none;
        pointer-events: none;
        animation: fall linear;
    }
    @keyframes fall {
        to {
            transform: translateY(100vh);
        }
    }
`;
document.head.appendChild(style);
