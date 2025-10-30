// For welcome page
if (document.getElementById("welcome")) {
  const glass = document.querySelector('.glass');
  const glow = document.querySelector('.glow');
  const enterBtn = document.getElementById("enterBtn");
  let rotX = 0, rotY = 0;

  // Fade-in glass
  window.addEventListener("load", () => {
    setTimeout(() => {
      if (glass) glass.style.opacity = "1";
    }, 300);
  });

  // 3D tilt and dynamic glow
  window.addEventListener('mousemove', e => {
    if (!glass || !glow) return;
    
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    rotX += (x - rotX) * 0.08;
    rotY += (y - rotY) * 0.08;

    // Наклон карточки
    glass.style.transform = `translateY(0) rotateY(${rotX}deg) rotateX(${-rotY}deg)`;

    // Подсветка, двигается за мышкой
    const percentX = (e.clientX / window.innerWidth) * 100;
    const percentY = (e.clientY / window.innerHeight) * 100;
    glow.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255,255,255,0.5), transparent 60%)`;
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