/* Explorer Taxi — shared site behaviour */
(function () {
  /* ---------- Language toggle ---------- */
  const root = document.documentElement;
  const savedLang = localStorage.getItem('explorer-lang') || 'en';
  root.setAttribute('data-lang', savedLang);

  function setLang(lang) {
    root.setAttribute('data-lang', lang);
    localStorage.setItem('explorer-lang', lang);
    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }
  document.addEventListener('click', e => {
    const btn = e.target.closest('.lang-toggle button');
    if (btn) setLang(btn.dataset.lang);
  });
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === savedLang);
  });

  /* ---------- Mobile menu ---------- */
  function setMenuOpen(open) {
    const menu = document.querySelector('.mobile-menu');
    if (!menu) return;
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', String(!open));
    menu.querySelectorAll('a, button').forEach(el => {
      el.setAttribute('tabindex', open ? '0' : '-1');
    });
  }
  document.addEventListener('click', e => {
    if (e.target.closest('.menu-btn')) setMenuOpen(true);
    if (e.target.closest('.menu-close')) setMenuOpen(false);
    if (e.target.closest('.mobile-menu nav a')) setMenuOpen(false);
  });
  setMenuOpen(false);

  /* ---------- FAQ ---------- */
  document.addEventListener('click', e => {
    const q = e.target.closest('.faq-q');
    if (q) {
      q.parentElement.classList.toggle('open');
    }
  });

  /* ---------- Scroll reveal ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- FAQ schema markup helper ---------- */
  /* (Optional) */
})();
