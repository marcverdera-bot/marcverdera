// Nav sits over the dark page hero; it turns light once the hero scrolls away.
(function () {
  var nav = document.querySelector('.nav');
  var hero = document.querySelector('.hero-x, .hero, .cs-hero');
  if (!nav || !hero) return;
  function update() {
    var h = nav.offsetHeight;
    var r = hero.getBoundingClientRect();
    // On case studies the dark band ends above the photo's lower part.
    var darkBottom = hero.classList.contains('cs-hero') ? r.bottom - 150 : r.bottom;
    nav.classList.toggle('is-dark', darkBottom > h);
  }
  update();
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
})();
