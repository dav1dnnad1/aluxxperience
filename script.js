/* ── NAVBAR: hamburger toggle + scroll tint ── */
const menuToggle = document.getElementById('menuToggle');
const navMenu    = document.getElementById('navMenu');
const navbar     = document.getElementById('navbar');

menuToggle.setAttribute('aria-expanded', 'false');
menuToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  menuToggle.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 10
    ? 'rgba(255,255,255,0.92)'
    : 'rgba(255,255,255,0.75)';
}, { passive: true });


/* ── HERO SLIDESHOW ── */
(function () {
  const slides = document.querySelectorAll('.hero-bg');
  if (!slides.length) return;
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 4500);
})();


/* ── SCROLL REVEAL ── */
(function () {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    targets.forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  targets.forEach(el => observer.observe(el));
})();


/* ── CAROUSEL: CSS animation handles infinite scroll.
      JS only handles pause-on-hover (CSS :hover also
      covers it, but JS gives touch devices the same). ── */
(function () {
  const wrap  = document.getElementById('carouselWrap');
  const track = document.getElementById('carouselTrack');
  if (!wrap || !track) return;

  wrap.addEventListener('touchstart', () => {
    track.style.animationPlayState = 'paused';
  }, { passive: true });

  wrap.addEventListener('touchend', () => {
    track.style.animationPlayState = 'running';
  }, { passive: true });
})();