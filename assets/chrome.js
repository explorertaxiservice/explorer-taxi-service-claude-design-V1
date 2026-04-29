/* Shared header/footer injector — keeps each page file small */
(function () {
  const lang = localStorage.getItem('explorer-lang') || 'en';
  document.documentElement.setAttribute('data-lang', lang);

  const active = document.body.dataset.page || '';

  const navItems = [
    { href: 'airport-transfers.html', en: 'Airport transfers', fr: 'Transferts aéroport', key: 'airport' },
    { href: 'disneyland.html', en: 'Disneyland', fr: 'Disneyland', key: 'disneyland' },
    { href: 'day-hire.html', en: 'Private day hire', fr: 'Journée privée', key: 'day-hire' },
    { href: 'vehicle.html', en: 'Our vehicle', fr: 'Notre véhicule', key: 'vehicle' },
    { href: 'reviews.html', en: 'Reviews', fr: 'Avis', key: 'reviews' },
    { href: 'about.html', en: 'About', fr: 'À propos', key: 'about' },
    { href: 'contact.html', en: 'Contact', fr: 'Contact', key: 'contact' },
  ];

  const navHTML = navItems.map(i => `<a href="${i.href}"${i.key === active ? ' class="active"' : ''}><span data-lang="en">${i.en}</span><span data-lang="fr">${i.fr}</span></a>`).join('');
  const mNavHTML = navItems.map(i => `<a href="${i.href}"><span data-lang="en">${i.en}</span><span data-lang="fr">${i.fr}</span></a>`).join('');

  const header = `
<header class="site-header">
  <div class="container header-inner">
    <a href="index.html" class="logo" style="gap:0;"><img src="uploads/logo/logo-wordmark.png" alt="Explorer Taxi Paris" style="height:38px;width:auto;display:block;max-width:200px;"></a>
    <nav class="nav">${navHTML}</nav>
    <div class="header-actions">
      <div class="lang-toggle" title="Language / Langue"><button data-lang="en" aria-label="English">EN</button><button data-lang="fr" aria-label="Français">FR</button></div>
      <a href="book.html" class="btn btn-marine"><span data-lang="en">Book now</span><span data-lang="fr">Réserver</span></a>
      <button class="menu-btn" aria-label="Menu"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    </div>
  </div>
</header>
<div class="mobile-menu">
  <div class="mobile-menu-head">
    <a href="index.html" class="logo"><img src="uploads/logo/logo-wordmark.png" alt="Explorer Taxi Paris" style="height:34px;width:auto;display:block;max-width:180px;"></a>
    <button class="menu-close" aria-label="Close"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
  </div>
  <nav>${mNavHTML}<a href="book.html" style="background: var(--gold); color: var(--marine); margin-top: 16px; border-radius: 999px; text-align: center;"><span data-lang="en">Book your transfer →</span><span data-lang="fr">Réserver →</span></a></nav>
</div>`;

  const footer = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="index.html" class="logo"><img src="uploads/logo/logo-white.png" alt="Explorer Taxi Paris" style="height:40px;width:auto;display:block;"></a>
        <p style="margin-top: 16px; max-width: 32ch; font-size: 14.5px;"><span data-lang="en">Wheelchair-accessible transfers in Paris and beyond. Run by Aimad — driver, not a platform.</span><span data-lang="fr">Transferts accessibles à Paris et au-delà. Géré par Aimad — un chauffeur, pas une plateforme.</span></p>
      </div>
      <div><h4>Services</h4><ul>
        <li><a href="airport-transfers.html"><span data-lang="en">Airport transfers</span><span data-lang="fr">Transferts aéroport</span></a></li>
        <li><a href="disneyland.html">Disneyland Paris</a></li>
        <li><a href="day-hire.html"><span data-lang="en">Private day hire</span><span data-lang="fr">Journée privée</span></a></li>
        <li><a href="vehicle.html"><span data-lang="en">Our vehicle</span><span data-lang="fr">Notre véhicule</span></a></li>
      </ul></div>
      <div><h4><span data-lang="en">Company</span><span data-lang="fr">Société</span></h4><ul>
        <li><a href="about.html"><span data-lang="en">About Aimad</span><span data-lang="fr">À propos</span></a></li>
        <li><a href="reviews.html"><span data-lang="en">Reviews</span><span data-lang="fr">Avis</span></a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="book.html"><span data-lang="en">Book now</span><span data-lang="fr">Réserver</span></a></li>
      </ul></div>
      <div><h4><span data-lang="en">Reach Aimad</span><span data-lang="fr">Joindre Aimad</span></h4><ul>
        <li>📞 +33 7 87 25 29 64</li>
        <li>💬 WhatsApp 24/7</li>
        <li>✉️ contact@explorertaxiservice.com</li>
        <li><span data-lang="en">First reply within 2 hours</span><span data-lang="fr">Réponse sous 2h</span></li>
      </ul></div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Explorer Taxi · Paris, France</span>
      <span><a href="#" style="margin-right: 16px;"><span data-lang="en">Privacy</span><span data-lang="fr">Confidentialité</span></a><a href="#" style="margin-right: 16px;">Terms</a><a href="#">Cookies</a></span>
    </div>
  </div>
</footer>`;

  // Inject
  const headerSlot = document.querySelector('[data-chrome="header"]');
  const footerSlot = document.querySelector('[data-chrome="footer"]');
  if (headerSlot) headerSlot.outerHTML = header;
  if (footerSlot) footerSlot.outerHTML = footer;

  // mark current lang button
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
})();
