import { renderNavbar, renderSidebar } from './components/navbar.js';
import { renderHeroSection } from './components/hero.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  const { nav, links } = renderNavbar();
  const sidebar = renderSidebar(links);

  // === Create overlay
  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  document.body.appendChild(overlay);

  // === Append nav & sidebar
  app.appendChild(nav);
  document.body.appendChild(sidebar);

  // === Toggle menu
  const toggle = document.getElementById('menu-toggle');
  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  });

  // === Click outside sidebar = close
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  });

  // === Append hero section
  app.appendChild(renderHeroSection());
});
