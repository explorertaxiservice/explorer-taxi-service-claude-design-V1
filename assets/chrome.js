/* Shared header/footer injector — keeps each page file small */
(function () {
  const lang = localStorage.getItem('explorer-lang') || 'en';
  document.documentElement.setAttribute('data-lang', lang);

  const active = document.body.dataset.page || '';

  const navItems = [
    { href: 'airport-transfers.html', en: 'Airport & station transfers', fr: 'Aéroports & gares', key: 'airport' },
    { href: 'le-havre.html', en: 'Le Havre cruises', fr: 'Croisières Le Havre', key: 'le-havre' },
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
        <p style="margin-top: 16px; max-width: 32ch; font-size: 14.5px;"><span data-lang="en">Wheelchair-accessible transfers in Paris and beyond. A team of 5 PMR-certified drivers — not a platform.</span><span data-lang="fr">Transferts accessibles à Paris et au-delà. Une équipe de 5 chauffeurs certifiés PMR — pas une plateforme.</span></p>
      </div>
      <div><h4>Services</h4><ul>
        <li><a href="airport-transfers.html"><span data-lang="en">Airport transfers</span><span data-lang="fr">Transferts aéroport</span></a></li>
        <li><a href="le-havre.html"><span data-lang="en">Le Havre cruises</span><span data-lang="fr">Croisières Le Havre</span></a></li>
        <li><a href="disneyland.html">Disneyland Paris</a></li>
        <li><a href="day-hire.html"><span data-lang="en">Private day hire</span><span data-lang="fr">Journée privée</span></a></li>
        <li><a href="vehicle.html"><span data-lang="en">Our vehicle</span><span data-lang="fr">Notre véhicule</span></a></li>
      </ul></div>
      <div><h4><span data-lang="en">Company</span><span data-lang="fr">Société</span></h4><ul>
        <li><a href="about.html"><span data-lang="en">About Aimad</span><span data-lang="fr">À propos</span></a></li>
        <li><a href="reviews.html"><span data-lang="en">Reviews</span><span data-lang="fr">Avis</span></a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="faq.html">FAQ</a></li>
        <li><a href="book.html"><span data-lang="en">Book now</span><span data-lang="fr">Réserver</span></a></li>
      </ul></div>
      <div><h4><span data-lang="en">Reach us</span><span data-lang="fr">Nous contacter</span></h4><ul style="display:flex;flex-direction:column;gap:10px;">
        <li style="display:flex;align-items:center;gap:8px;"><span style="font-size:16px;">📞</span><a href="tel:+33787252964" style="color:inherit;font-weight:600;">+33 7 87 25 29 64</a></li>
        <li style="display:flex;align-items:center;gap:8px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366" width="18" height="18" style="flex-shrink:0;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg><a href="https://wa.me/33787252964" style="color:inherit;font-weight:600;">WhatsApp 24/7</a></li>
        <li style="display:flex;align-items:center;gap:8px;"><span style="font-size:16px;">✉️</span><a href="mailto:contact@explorertaxiservice.com" style="color:inherit;font-weight:600;word-break:break-all;">contact@explorertaxiservice.com</a></li>
        <li style="color:rgba(247,244,238,0.6);font-size:13px;"><span data-lang="en">First reply within 2 hours</span><span data-lang="fr">Réponse sous 2h</span></li>
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
