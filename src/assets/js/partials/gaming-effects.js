// src/assets/js/partials/gaming-effects.js

// ── Hero Particles ────────────────────────────────────────────────────────

export function initHeroParticles(canvasId = 'hero-particles') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();

  const PURPLE = 'rgba(124, 58, 237, ';

  const particles = Array.from({ length: 70 }, () => ({
    x:     Math.random() * canvas.width,
    y:     Math.random() * canvas.height,
    r:     Math.random() * 2.5 + 0.5,
    speed: Math.random() * 0.5 + 0.1,
    alpha: Math.random() * 0.6 + 0.1,
    drift: (Math.random() - 0.5) * 0.4,
  }));

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = PURPLE + p.alpha + ')';
      ctx.fill();

      p.y -= p.speed;
      p.x += p.drift;

      if (p.y < -4) {
        p.y = canvas.height + 4;
        p.x = Math.random() * canvas.width;
      }
      if (p.x < -4) p.x = canvas.width + 4;
      if (p.x > canvas.width + 4) p.x = -4;
    });

    requestAnimationFrame(tick);
  }

  tick();

  window.addEventListener('resize', () => {
    resize();
  }, { passive: true });
}

// ── Product Card Hover Effects ────────────────────────────────────────────

export function initProductCardEffects() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 0 24px rgba(124,58,237,0.55), 0 0 48px rgba(124,58,237,0.2)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '';
    });
  });
}

// ── Category Card Tilt ────────────────────────────────────────────────────

export function initCardTilt() {
  document.querySelectorAll('.category-card, .game-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width  / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * 6;
      const rotY = ((x - cx) / cx) * -6;

      card.style.transform =
        `translateY(-6px) perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ── Stats Counter Animation ───────────────────────────────────────────────

export function initStatsCounter() {
  const stats = document.querySelectorAll('.stat-number');
  if (!stats.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el     = entry.target;
      const target = parseInt(el.textContent.replace(/\D/g, ''), 10);
      const prefix = el.textContent.includes('+') ? '+' : '';
      const duration = 1800;
      const start  = performance.now();

      function update(now) {
        const elapsed  = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease     = 1 - Math.pow(1 - progress, 3);
        const current  = Math.floor(ease * target);

        el.textContent = prefix + current.toLocaleString('ar-SA');

        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = prefix + target.toLocaleString('ar-SA');
      }

      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  stats.forEach(el => observer.observe(el));
}