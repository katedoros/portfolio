// Лайтбокс для галереи работ
(function () {
  const box = document.getElementById('lightbox');
  if (!box) return;
  const img = box.querySelector('img');
  const items = Array.from(document.querySelectorAll('.gallery__item img'));
  let current = 0;

  function show(i) {
    current = (i + items.length) % items.length;
    img.src = items[current].src;
    img.alt = items[current].alt;
  }
  function open(i) {
    show(i);
    box.classList.add('is-open');
    box.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    box.classList.remove('is-open');
    box.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.gallery__item').forEach(function (btn) {
    btn.addEventListener('click', function () { open(Number(btn.dataset.index)); });
  });
  box.querySelector('.lightbox__close').addEventListener('click', close);
  box.querySelector('.lightbox__prev').addEventListener('click', function () { show(current - 1); });
  box.querySelector('.lightbox__next').addEventListener('click', function () { show(current + 1); });
  box.addEventListener('click', function (e) { if (e.target === box) close(); });
  document.addEventListener('keydown', function (e) {
    if (!box.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
})();
