export function renderNavbar(onNavigate) {
  const nav = document.createElement('nav');
  nav.className = 'nav-glass fixed w-full z-50 py-3 px-4 md:px-10 lg:px-20 flex items-center justify-between';

  const left = document.createElement('div');
  left.className = 'flex items-center';

  const logo = document.createElement('img');
  logo.src = './assets/logo.png';
  logo.alt = 'Pookie Logo';
  logo.className = 'h-10 w-10 rounded-full';

  const title = document.createElement('span');
  title.className = 'text-2xl font-bold ml-3';
  title.textContent = 'POOKIE';

  left.appendChild(logo);
  left.appendChild(title);

  const menu = document.createElement('div');
  menu.className = 'hidden md:flex items-center space-x-8';

  const sectionLinks = [
    { text: 'About', href: '#about' },
    { text: 'Features', href: '#features' },
    { text: 'Roadmap', href: '#roadmap' },
    { text: 'Tokenomics', href: '#tokenomics' },
    { text: 'Community', href: '#community' }
  ];

  sectionLinks.forEach(({ text, href }) => {
    const link = document.createElement('a');
    link.href = href;
    link.textContent = text;
    link.className = 'hover:text-green-400 transition';

    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = href.replace('#', '');
      if (onNavigate) onNavigate(targetId);
    });

    menu.appendChild(link);
  });

  const socialWrapper = document.createElement('div');
  socialWrapper.className = 'flex gap-3 ml-6';

  const iconList = [
    { name: 'Telegram', href: ' https://t.me/pookieAbstract', img: './assets/telegram.webp' },
    { name: 'X', href: 'https://x.com/pookiedotfun', img: './assets/x.webp' },
    { name: 'GitHub', href: 'https://github.com/pookieABS', img: './assets/github.webp' }
  ];

  iconList.forEach(({ href, img, name }) => {
    const a = document.createElement('a');
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.title = name;

    const image = document.createElement('img');
    image.src = img;
    image.alt = `${name} icon`;
    image.className = 'h-6 w-6 hover:scale-110 transition-transform filter brightness-0 invert';

    a.appendChild(image);
    socialWrapper.appendChild(a);
  });

  menu.appendChild(socialWrapper);

  const toggleButton = document.createElement('button');
  toggleButton.className = 'md:hidden text-white';
  toggleButton.id = 'menu-toggle';

  const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgIcon.setAttribute('class', 'h-6 w-6');
  svgIcon.setAttribute('fill', 'none');
  svgIcon.setAttribute('viewBox', '0 0 24 24');
  svgIcon.setAttribute('stroke', 'currentColor');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-linejoin', 'round');
  path.setAttribute('stroke-width', '2');
  path.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');

  svgIcon.appendChild(path);
  toggleButton.appendChild(svgIcon);

  nav.appendChild(left);
  nav.appendChild(menu);
  nav.appendChild(toggleButton);

  return { nav, links: sectionLinks };
}

export function renderSidebar(links) {
  const sidebar = document.createElement('div');
  sidebar.className = 'sidebar md:hidden';
  sidebar.id = 'sidebar';

  const menuWrapper = document.createElement('div');
  menuWrapper.className = 'menu-links';

  links.forEach(({ text, href }) => {
    const a = document.createElement('a');
    a.href = href;
    a.textContent = text;

    a.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = href.replace('#', '');
      document.getElementById('sidebar').classList.remove('open');
      document.getElementById('overlay').classList.remove('show');
      if (window.showSection) {
        window.showSection(targetId);
      }
    });

    menuWrapper.appendChild(a);
  });

  const socialWrapper = document.createElement('div');
   socialWrapper.className = 'absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6';

  const iconList = [
    { name: 'Telegram', href: ' https://t.me/pookieAbstract', img: './assets/telegram.webp' },
    { name: 'X', href: 'https://x.com/pookiedotfun', img: './assets/x.webp' },
    { name: 'GitHub', href: 'https://github.com/pookieABS', img: './assets/github.webp' }
  ];

  iconList.forEach(({ href, img, name }) => {
    const a = document.createElement('a');
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.title = name;

    const image = document.createElement('img');
    image.src = img;
    image.alt = `${name} icon`;
    image.className = 'h-6 w-6 filter brightness-0 invert';

    a.appendChild(image);
    socialWrapper.appendChild(a);
  });

  sidebar.appendChild(menuWrapper);
  sidebar.appendChild(socialWrapper);

  return sidebar;
}
