import { renderNavbar, renderSidebar } from './components/navbar.js';
import { renderHeroSection } from './components/hero.js';
import { renderAboutSection } from './components/about.js';
import { renderFeaturesSection } from './components/feutures.js';
import { renderRoadmapSection } from './components/roadmap.js';
import { renderTokenomicSection } from './components/tokenomics.js';
import { renderCommunitySection } from './components/community.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // === Sections ===
  const hero = renderHeroSection();
  hero.id = 'hero';

  const about = renderAboutSection();
  about.id = 'about';
  about.classList.add('hidden');

  const features = renderFeaturesSection();
  features.id = 'features';
  features.classList.add('hidden');

  const tokenomics = renderTokenomicSection();
  tokenomics.id = 'tokenomics';
  tokenomics.classList.add('hidden');
  
  const roadmap = renderRoadmapSection();
  roadmap.id = 'roadmap';
  roadmap.classList.add('hidden');

  

  const community = renderCommunitySection();
  community.id = 'community';
  community.classList.add('hidden');

  const sections = [hero, about, features, roadmap, tokenomics, community];
  let currentSection = 0;

  function showSection(targetId) {
    sections.forEach((section, index) => {
      if (section.id === targetId) {
        section.classList.remove('hidden');
        currentSection = index;
        section.scrollIntoView({ behavior: 'smooth' });
      } else {
        section.classList.add('hidden');
      }
    });
  }

  window.showSection = showSection;

  // === Navbar & Sidebar ===
  const { nav, links } = renderNavbar(showSection);
  const sidebar = renderSidebar(links);

  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  document.body.appendChild(overlay);

  app.appendChild(nav);
  document.body.appendChild(sidebar);

  // === Tambahkan semua section ke DOM
  app.appendChild(hero);
  app.appendChild(about);
  app.appendChild(features);
  app.appendChild(roadmap);
  app.appendChild(tokenomics);
  app.appendChild(community);

  // === Sidebar toggle
  const toggle = document.getElementById('menu-toggle');
  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  });

  // === Scroll Navigation (Wheel) ===
  let scrollTimeout;
  let isScrolling = false;

  window.addEventListener('wheel', (e) => {
    if (isScrolling) return;

    const section = sections[currentSection];
    const atTop = section.scrollTop === 0;
    const atBottom = section.scrollTop + section.clientHeight >= section.scrollHeight - 1;

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (e.deltaY > 0 && atBottom && currentSection < sections.length - 1) {
        isScrolling = true;
        section.classList.add('hidden');
        currentSection++;
        sections[currentSection].classList.remove('hidden');
        sections[currentSection].scrollTop = 0;

        setTimeout(() => isScrolling = false, 800);
      } else if (e.deltaY < 0 && atTop && currentSection > 0) {
        isScrolling = true;
        section.classList.add('hidden');
        currentSection--;
        sections[currentSection].classList.remove('hidden');
        sections[currentSection].scrollTop = sections[currentSection].scrollHeight;

        setTimeout(() => isScrolling = false, 800);
      }
    }, 200);
  });
});
