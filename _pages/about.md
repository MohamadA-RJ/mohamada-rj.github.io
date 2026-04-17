---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<!-- <div style="text-align: justify;">
I'm a PhD candidate in <span style="color: #0066cc;">Aerospace Structures and Materials</span> with focus on <span style="color: #FF6B6B;">machine learning </span> and composite materials.
</div> -->

<div style="text-align: justify;">
I'm a PhD candidate in the <a href="https://www.tudelft.nl/en/ae/organisation/departments/aerospace-structures-and-materials" style="color: #f85151; text-decoration: none; font-weight: bold;">Aerospace Structures and Materials (ASM)</a> department at <a href="https://www.tudelft.nl/en/" style="color: inherit; text-decoration: none; font-weight: bold;">T<span style="color: #00A6D6;">U</span> Delft</a>, Faculty of Aerospace Engineering. My research lies at the intersection of deep learning and computational micromechanics, with a focus on the design and analysis of large-scale aerospace-grade composite structures.
<br>
<br>
Prior to joining TU Delft, I worked as a MS researcher in the <a href="http://mdam.kaist.ac.kr/" style="color: #f85151; text-decoration: none; font-weight: bold;">Mechanical Design Lab. with Advanced Materials (MDAM)</a> at <a href="https://me.kaist.ac.kr/eng/main/main.html" style="color: inherit; text-decoration: none; font-weight: bold;"><span style="color: #0F4482;">KAIST</span></a>, South Korea where I focused on multifunctional carbon fiber-based structural batteries.
</div>

<br>

# Latest News &nbsp;<small><a href="/news/" style="font-size:0.7rem; font-weight:normal; color:#00A6D6;">View all &#8594;</a></small>
------
<div class="latest-news-container">
  <button class="news-nav news-nav-prev" id="newsPrev" type="button" aria-label="Previous news">&#10094;</button>
  <div class="news-scroll-wrapper" id="newsScroller">
    {% assign sorted_news = site.news | sort: 'date' | reverse %}
    {% for news_item in sorted_news limit:10 %}
      <div class="news-card">
        <div class="news-card-image">
          {% if news_item.image %}
            <img src="{{ news_item.image }}" alt="{{ news_item.title }}">
          {% else %}
            <img src="https://via.placeholder.com/320x200?text={{ news_item.title | replace: ' ', '+' }}" alt="{{ news_item.title }}">
          {% endif %}
        </div>
        <div class="news-card-content">
          <div class="news-card-date">{{ news_item.date | date: "%B %d, %Y" }}</div>
          <h3 class="news-card-title">{{ news_item.title }}</h3>
          <p class="news-card-excerpt">{{ news_item.excerpt | strip_html | truncatewords: 50 }}</p>
          <a href="{{ news_item.url }}" class="news-card-link">Read More &rarr;</a>
        </div>
      </div>
    {% endfor %}
  </div>
  <button class="news-nav news-nav-next" id="newsNext" type="button" aria-label="Next news">&#10095;</button>
</div>

<script>
  (function() {
    var scroller  = document.getElementById('newsScroller');
    var prevBtn   = document.getElementById('newsPrev');
    var nextBtn   = document.getElementById('newsNext');
    if (!scroller) return;

    // Clone all cards so the loop is seamless
    var cards = Array.from(scroller.children);
    if (!cards.length) return;
    cards.forEach(function(c) { scroller.appendChild(c.cloneNode(true)); });

    // JS owns the position entirely — disable any CSS animation
    scroller.style.animation = 'none';

    var pos      = 0;      // pixels translated left
    var autoSpd  = 0.5;    // px per rAF frame  (~30 px/s at 60 fps)
    var paused   = false;
    var sliding  = false;
    var slideFrom = 0, slideTo = 0, slideStart = 0;
    var SLIDE_MS  = 380;

    function halfW() { return scroller.scrollWidth / 2; }

    function normalize(x) {
      var h = halfW();
      if (!h) return x;
      x = x % h;
      return x < 0 ? x + h : x;
    }

    function ease(t) { return t < 0.5 ? 2*t*t : -1 + (4 - 2*t) * t; }

    function tick(ts) {
      if (sliding) {
        var t = Math.min((ts - slideStart) / SLIDE_MS, 1);
        pos = slideFrom + (slideTo - slideFrom) * ease(t);
        if (t >= 1) { pos = normalize(slideTo); sliding = false; }
      } else if (!paused) {
        pos = normalize(pos + autoSpd);
      }
      scroller.style.transform = 'translateX(-' + pos + 'px)';
      requestAnimationFrame(tick);
    }

    function stepBy(dir) {
      if (sliding) return; // ignore clicks mid-animation
      var gap   = parseFloat(window.getComputedStyle(scroller).gap) || 24;
      var cardW = (cards[0].offsetWidth || 320) + gap;
      pos = normalize(pos);
      // Prevent going negative when stepping backwards
      if (dir < 0 && pos - cardW < 0) pos += halfW();
      slideFrom  = pos;
      slideTo    = slideFrom + dir * cardW;
      slideStart = performance.now();
      sliding    = true;
    }

    if (prevBtn) prevBtn.addEventListener('click', function() { stepBy(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function() { stepBy(1);  });

    var container = scroller.parentElement;
    if (container) {
      container.addEventListener('mouseenter', function() { paused = true;  });
      container.addEventListener('mouseleave', function() { paused = false; });
    }

    requestAnimationFrame(tick);
  })();
</script>





# Recent Posts
------
Need to addd/link to BlogPosts tab 

