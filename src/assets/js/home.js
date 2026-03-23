// src/assets/js/home.js

import { initHeroParticles, initProductCardEffects, initCardTilt, initStatsCounter } from './partials/gaming-effects';
import { initScrollReveal } from './partials/scroll-reveal';

document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll Reveal ──────────────────────────────
  initScrollReveal();

  // ── Hero Particles ─────────────────────────────
  initHeroParticles();

  // ── Product Card Effects ───────────────────────
  initProductCardEffects();

  // ── Card Tilt ──────────────────────────────────
  initCardTilt();

  // ── Stats Counter ──────────────────────────────
  initStatsCounter();

});