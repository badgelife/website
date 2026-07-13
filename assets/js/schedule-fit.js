// Fit the wide DC34 schedule table to the screen on phones by scaling it down
// with transform:scale(). We use transform (not CSS `zoom`) because iOS/WebKit
// did not reliably apply `zoom` to a table's width/height until Safari 26.
// This file also powers the "(Click here for Full Size)" toggle link.
//
// NOTE: keep this as an external .js file. An inline <script> in index.md gets
// run through Jekyll/Kramdown, which strips the newlines and lets these //
// comments swallow the rest of the code — silently breaking it.
(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    var MOBILE = window.matchMedia('(max-width: 600px)');
    var wrap   = document.querySelector('.table-scroll');
    var table  = wrap && wrap.querySelector('table.schedule');
    var link   = document.querySelector('[data-fit-toggle]');
    if (!table) return;

    function fit() {
      table.style.transform = '';   // reset so we measure the true (unscaled) size
      wrap.style.height = '';
      if (wrap.classList.contains('is-full-size') || !MOBILE.matches) return;
      var natural = table.offsetWidth; // unscaled layout width
      if (!natural) return;
      var scale = Math.min(1, wrap.clientWidth / natural);
      table.style.transform = 'scale(' + scale + ')';
      wrap.style.height = Math.ceil(table.offsetHeight * scale) + 'px'; // kill the gap
    }

    if (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var full = wrap.classList.toggle('is-full-size');
        link.textContent = full ? '(Click here to Fit to Screen)'
                                : '(Click here for Full Size)';
        fit();
      });
    }

    window.addEventListener('resize', fit);
    window.addEventListener('orientationchange', fit);
    if (MOBILE.addEventListener) MOBILE.addEventListener('change', fit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    fit();
  });
})();
