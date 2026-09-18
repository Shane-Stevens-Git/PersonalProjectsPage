(function () {
  'use strict';

  // Fade sections in as they scroll into view.
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Click any picture to see it larger.
  var dlg = document.getElementById('viewer');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  var big = dlg.querySelector('img');
  var cap = dlg.querySelector('.viewer-cap');

  document.querySelectorAll('.zoomable img').forEach(function (img) {
    img.addEventListener('click', function () {
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
      var fc = img.closest('figure') && img.closest('figure').querySelector('figcaption');
      cap.textContent = fc ? fc.textContent : '';
      dlg.showModal();
    });
  });
  // Click outside the picture closes it.
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
})();
