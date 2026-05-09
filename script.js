// Animation staggerée des cartes profil à l'entrée dans le viewport
const profils = document.querySelectorAll('.profil');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const idx = [...profils].indexOf(entry.target);
      entry.target.style.animationDelay = `${idx * 0.07}s`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

profils.forEach(p => observer.observe(p));