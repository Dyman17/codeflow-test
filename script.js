// For welcome page
if (document.getElementById("welcome")) {
  const glass = document.getElementById("glass");
  const glow = document.getElementById("glow");
  const enterBtn = document.getElementById("enterBtn");

  // Fade-in glass
  window.addEventListener("load", () => {
    setTimeout(() => glass.classList.add("visible"), 300);
  });

  // Cursor-based tilt
  let glowX = 0, glowY = 0;
  window.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    glass.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    glowX += (e.clientX - glowX) * 0.1;
    glowY += (e.clientY - glowY) * 0.1;
    glow.style.transform = `translate(${glowX * 0.05}px, ${glowY * 0.05}px)`;
  });

  // Enter animation - redirect to app page
  enterBtn.addEventListener("click", e => {
    e.preventDefault();
    const welcome = document.getElementById("welcome");
    welcome.classList.add("hidden");
    setTimeout(() => {
      window.location.href = "app.html";
    }, 1200);
  });
}

// For app page (test.html content)
if (document.querySelector("header")) {
  document.addEventListener("DOMContentLoaded", () => {
    document.body.style.overflow = "auto";
    
    // Add the navigation underline functionality
    const nav = document.getElementById("nav");
    const underline = document.getElementById("underline");
    const links = nav.querySelectorAll("a");

    function moveUnderline(element) {
      const { left, width } = element.getBoundingClientRect();
      underline.style.left = `${element.offsetLeft}px`;
      underline.style.width = `${width}px`;
    }

    links.forEach(link => {
      link.addEventListener("mouseenter", e => moveUnderline(e.target));
      link.addEventListener("mouseleave", () => {
        underline.style.width = "0";
      });
    });
    
    // Add cursor glow functionality
    const glow = document.getElementById("glow");
    if (glow) {
      window.addEventListener("mousemove", e => {
        glow.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
      });
    }
  });
}