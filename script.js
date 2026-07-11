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

// wordmark appears once the cover has been left behind
function onScroll() {
  document.body.classList.toggle('scrolled', window.scrollY > window.innerHeight * 0.6);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
