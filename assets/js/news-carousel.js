/* News carousel — auto-scroll + prev/next arrows */
(function () {
  function init() {
    var scroller = document.getElementById('newsScroller');
    var prevBtn  = document.getElementById('newsPrev');
    var nextBtn  = document.getElementById('newsNext');
    if (!scroller) return;

    var cards = Array.from(scroller.children);
    if (!cards.length) return;
    cards.forEach(function (c) { scroller.appendChild(c.cloneNode(true)); });

    scroller.style.animation = 'none';

    var pos       = 0;
    var autoSpd   = 1.2;
    var paused    = false;
    var sliding   = false;
    var slideFrom = 0;
    var slideTo   = 0;
    var slideStart = 0;
    var SLIDE_MS  = 380;

    function halfW() { return scroller.scrollWidth / 2; }

    function normalize(x) {
      var h = halfW();
      if (!h) return x;
      x = x % h;
      return x < 0 ? x + h : x;
    }

    function ease(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function tick(ts) {
      if (sliding) {
        var t = Math.min((ts - slideStart) / SLIDE_MS, 1);
        pos = slideFrom + (slideTo - slideFrom) * ease(t);
        if (t >= 1) {
          pos = normalize(slideTo);
          sliding = false;
        }
      } else if (!paused) {
        pos = normalize(pos + autoSpd);
      }
      scroller.style.transform = 'translateX(-' + pos + 'px)';
      requestAnimationFrame(tick);
    }

    function stepBy(dir) {
      if (sliding) return;
      var gap   = parseFloat(window.getComputedStyle(scroller).gap) || 24;
      var cardW = (cards[0].offsetWidth || 320) + gap;
      pos = normalize(pos);
      if (dir < 0 && pos - cardW < 0) { pos += halfW(); }
      slideFrom  = pos;
      slideTo    = slideFrom + dir * cardW;
      slideStart = performance.now();
      sliding    = true;
    }

    if (prevBtn) { prevBtn.addEventListener('click', function () { stepBy(-1); }); }
    if (nextBtn) { nextBtn.addEventListener('click', function () { stepBy(1);  }); }

    var container = scroller.parentElement;
    if (container) {
      container.addEventListener('mouseenter', function () { paused = true;  });
      container.addEventListener('mouseleave', function () { paused = false; });
    }

    requestAnimationFrame(tick);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
