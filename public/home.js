/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/home.js":
/*!*******************************!*\
  !*** ./src/assets/js/home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partials_gaming_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/gaming-effects */ \"./src/assets/js/partials/gaming-effects.js\");\n/* harmony import */ var _partials_scroll_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/scroll-reveal */ \"./src/assets/js/partials/scroll-reveal.js\");\n// src/assets/js/home.js\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  // ── Scroll Reveal ──────────────────────────────\n  (0,_partials_scroll_reveal__WEBPACK_IMPORTED_MODULE_1__.initScrollReveal)();\n\n  // ── Hero Particles ─────────────────────────────\n  (0,_partials_gaming_effects__WEBPACK_IMPORTED_MODULE_0__.initHeroParticles)();\n\n  // ── Product Card Effects ───────────────────────\n  (0,_partials_gaming_effects__WEBPACK_IMPORTED_MODULE_0__.initProductCardEffects)();\n\n  // ── Card Tilt ──────────────────────────────────\n  (0,_partials_gaming_effects__WEBPACK_IMPORTED_MODULE_0__.initCardTilt)();\n\n  // ── Stats Counter ──────────────────────────────\n  (0,_partials_gaming_effects__WEBPACK_IMPORTED_MODULE_0__.initStatsCounter)();\n});\n\n//# sourceURL=webpack://theme-raed/./src/assets/js/home.js?\n}");

/***/ }),

/***/ "./src/assets/js/partials/gaming-effects.js":
/*!**************************************************!*\
  !*** ./src/assets/js/partials/gaming-effects.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initCardTilt: () => (/* binding */ initCardTilt),\n/* harmony export */   initHeroParticles: () => (/* binding */ initHeroParticles),\n/* harmony export */   initProductCardEffects: () => (/* binding */ initProductCardEffects),\n/* harmony export */   initStatsCounter: () => (/* binding */ initStatsCounter)\n/* harmony export */ });\n// src/assets/js/partials/gaming-effects.js\n\n// ── Hero Particles ────────────────────────────────────────────────────────\n\nfunction initHeroParticles() {\n  var canvasId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hero-particles';\n  var canvas = document.getElementById(canvasId);\n  if (!canvas) return;\n  var ctx = canvas.getContext('2d');\n  function resize() {\n    canvas.width = canvas.offsetWidth;\n    canvas.height = canvas.offsetHeight;\n  }\n  resize();\n  var PURPLE = 'rgba(124, 58, 237, ';\n  var particles = Array.from({\n    length: 70\n  }, function () {\n    return {\n      x: Math.random() * canvas.width,\n      y: Math.random() * canvas.height,\n      r: Math.random() * 2.5 + 0.5,\n      speed: Math.random() * 0.5 + 0.1,\n      alpha: Math.random() * 0.6 + 0.1,\n      drift: (Math.random() - 0.5) * 0.4\n    };\n  });\n  function tick() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    particles.forEach(function (p) {\n      ctx.beginPath();\n      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);\n      ctx.fillStyle = PURPLE + p.alpha + ')';\n      ctx.fill();\n      p.y -= p.speed;\n      p.x += p.drift;\n      if (p.y < -4) {\n        p.y = canvas.height + 4;\n        p.x = Math.random() * canvas.width;\n      }\n      if (p.x < -4) p.x = canvas.width + 4;\n      if (p.x > canvas.width + 4) p.x = -4;\n    });\n    requestAnimationFrame(tick);\n  }\n  tick();\n  window.addEventListener('resize', function () {\n    resize();\n  }, {\n    passive: true\n  });\n}\n\n// ── Product Card Hover Effects ────────────────────────────────────────────\n\nfunction initProductCardEffects() {\n  document.querySelectorAll('.product-card').forEach(function (card) {\n    card.addEventListener('mouseenter', function () {\n      card.style.boxShadow = '0 0 24px rgba(124,58,237,0.55), 0 0 48px rgba(124,58,237,0.2)';\n    });\n    card.addEventListener('mouseleave', function () {\n      card.style.boxShadow = '';\n    });\n  });\n}\n\n// ── Category Card Tilt ────────────────────────────────────────────────────\n\nfunction initCardTilt() {\n  document.querySelectorAll('.category-card, .game-card').forEach(function (card) {\n    card.addEventListener('mousemove', function (e) {\n      var rect = card.getBoundingClientRect();\n      var x = e.clientX - rect.left;\n      var y = e.clientY - rect.top;\n      var cx = rect.width / 2;\n      var cy = rect.height / 2;\n      var rotX = (y - cy) / cy * 6;\n      var rotY = (x - cx) / cx * -6;\n      card.style.transform = \"translateY(-6px) perspective(600px) rotateX(\".concat(rotX, \"deg) rotateY(\").concat(rotY, \"deg)\");\n    });\n    card.addEventListener('mouseleave', function () {\n      card.style.transform = '';\n    });\n  });\n}\n\n// ── Stats Counter Animation ───────────────────────────────────────────────\n\nfunction initStatsCounter() {\n  var stats = document.querySelectorAll('.stat-number');\n  if (!stats.length) return;\n  var observer = new IntersectionObserver(function (entries) {\n    entries.forEach(function (entry) {\n      if (!entry.isIntersecting) return;\n      var el = entry.target;\n      var target = parseInt(el.textContent.replace(/\\D/g, ''), 10);\n      var prefix = el.textContent.includes('+') ? '+' : '';\n      var duration = 1800;\n      var start = performance.now();\n      function update(now) {\n        var elapsed = now - start;\n        var progress = Math.min(elapsed / duration, 1);\n        var ease = 1 - Math.pow(1 - progress, 3);\n        var current = Math.floor(ease * target);\n        el.textContent = prefix + current.toLocaleString('ar-SA');\n        if (progress < 1) requestAnimationFrame(update);else el.textContent = prefix + target.toLocaleString('ar-SA');\n      }\n      requestAnimationFrame(update);\n      observer.unobserve(el);\n    });\n  }, {\n    threshold: 0.5\n  });\n  stats.forEach(function (el) {\n    return observer.observe(el);\n  });\n}\n\n//# sourceURL=webpack://theme-raed/./src/assets/js/partials/gaming-effects.js?\n}");

/***/ }),

/***/ "./src/assets/js/partials/scroll-reveal.js":
/*!*************************************************!*\
  !*** ./src/assets/js/partials/scroll-reveal.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initScrollReveal: () => (/* binding */ initScrollReveal)\n/* harmony export */ });\n// src/assets/js/partials/scroll-reveal.js\n\nfunction initScrollReveal() {\n  var observer = new IntersectionObserver(function (entries) {\n    entries.forEach(function (e) {\n      if (!e.isIntersecting) return;\n      e.target.classList.add('revealed');\n      observer.unobserve(e.target);\n    });\n  }, {\n    threshold: 0.12,\n    rootMargin: '0px 0px -40px 0px'\n  });\n  document.querySelectorAll('[data-reveal]').forEach(function (el) {\n    observer.observe(el);\n  });\n}\n\n//# sourceURL=webpack://theme-raed/./src/assets/js/partials/scroll-reveal.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/home.js");
/******/ 	
/******/ })()
;