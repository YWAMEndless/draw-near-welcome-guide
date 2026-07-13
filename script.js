// Gentle scroll reveals — Linen Hours moves at the pace of a slow breath.

// stagger direct children of any [data-stagger] group
document.querySelectorAll('[data-stagger]').forEach(function (group) {
  Array.prototype.forEach.call(group.children, function (child, i) {
    child.setAttribute('data-reveal', '');
    child.style.setProperty('--d', (i * 110) + 'ms');
  });
  // the group itself reveals instantly; its children carry the motion
  group.removeAttribute('data-reveal');
});

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -7% 0px' });

document.querySelectorAll('[data-reveal]').forEach(function (el) {
  observer.observe(el);
});

// the header settles onto the page as soon as the cover is left
function onScroll() {
  document.body.classList.toggle('scrolled', window.scrollY > 24);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// menu (small screens): one quiet panel beneath the header
var menuToggle = document.querySelector('.menu-toggle');

function closeMenu() {
  document.body.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', function () {
  var open = document.body.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.site-nav a').forEach(function (link) {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeMenu();
});
