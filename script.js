import { renderNavbar, renderSidebar } from './components/navbar.js';
import { renderHeroSection } from './components/hero.js';
import { renderAboutSection } from './components/about.js';
import { renderFeaturesSection } from './components/feutures.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  const { nav, links } = renderNavbar();
  const sidebar = renderSidebar(links);

  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  document.body.appendChild(overlay);

  app.appendChild(nav);
  document.body.appendChild(sidebar);

  // === Sections ===
  const hero = renderHeroSection();
  hero.id = 'hero';

  const about = renderAboutSection();
  about.id = 'about';
  about.classList.add('hidden');

  const feutures = renderFeaturesSection();
  feutures.id = 'feutures';
  feutures.classList.add('hidden');

  app.appendChild(hero);
  app.appendChild(about);
  app.appendChild(feutures);

  // === Sidebar toggle ===
  const toggle = document.getElementById('menu-toggle');
  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  });

  // === Scroll between hero → about → feutures ===
  let currentSection = 0;
  const sections = [hero, about, feutures];

  window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      sections[currentSection].classList.add('hidden');
      currentSection++;
      sections[currentSection].classList.remove('hidden');
    } else if (e.deltaY < 0 && currentSection > 0) {
      sections[currentSection].classList.add('hidden');
      currentSection--;
      sections[currentSection].classList.remove('hidden');
    }
  });
});
