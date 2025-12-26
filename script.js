document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     CARD EXPAND (NON-PROJECTS)
  ========================== */
  const cards = document.querySelectorAll(".card:not(.project-card)");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const expanded = document.querySelector(".card.expanded");

      if (expanded && expanded !== card) {
        expanded.classList.remove("expanded");
      }

      card.classList.toggle("expanded");
    });
  });

  /* Allow links inside cards to work normally */
  document.querySelectorAll(".card a").forEach(link => {
    link.addEventListener("click", e => e.stopPropagation());
  });

 /* =========================
   PROJECT GITHUB REDIRECT
========================== */
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
  card.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent event bubbling to parent card expansion logic
    const link = card.dataset.link;
    if (link) {
      window.open(link, '_blank');
    }
  });
});

  /* =========================
     SCROLL PARALLAX (SAFE)
  ========================== */
  const hero = document.querySelector(".hero");
  const waves = document.querySelector(".waves");

  if (hero && waves) {
    let ticking = false;

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          hero.style.backgroundPositionY = scrollY * 0.2 + "px";
          waves.style.transform =
            `translateX(-25%) translateY(${scrollY * 0.15}px)`;

          ticking = false;
        });
        ticking = true;
      }
    });
  }

  /* =========================
     REDUCED MOTION SUPPORT
  ========================== */
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("reduce-motion");
  }

});

document.addEventListener("DOMContentLoaded", () => {
  const text = "IT Student • Web, Java & C Developer";
  const target = document.getElementById("typed-subtitle");
  const cursor = document.querySelector(".cursor");

  let index = 0;
  const speed = 55;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    target.textContent = text;
    cursor.style.display = "none";
    return;
  }

  function type() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
});
