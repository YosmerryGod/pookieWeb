export function renderNavbar() {
    const nav = document.createElement('nav');
    nav.className = 'nav-glass fixed w-full z-50 py-3 px-4 md:px-10 lg:px-20 flex items-center justify-between';

    // === Left: Logo & Title ===
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

    // === Middle: Desktop Menu ===
    const menu = document.createElement('div');
    menu.className = 'hidden md:flex items-center space-x-8';

    const links = ['About', 'Tokenomics', 'Roadmap'];
    links.forEach(text => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = text;
        link.className = 'hover:text-green-400 transition';
        menu.appendChild(link);
    });

    const socialWrapper = document.createElement('div');
    socialWrapper.className = 'flex gap-3 ml-6';

    const iconList = [
        {
            name: 'Telegram',
            href: 'https://t.me/yourchannel',
            img: './assets/telegram.webp',
        },
        {
            name: 'X',
            href: 'https://x.com/yourhandle',
            img: './assets/x.webp',
        },
        {
            name: 'GitHub',
            href: 'https://github.com/yourprofile',
            img: './assets/github.webp',
        }
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
        image.className = 'h-6 w-6 hover:scale-110 transition-transform';

        a.appendChild(image);
        socialWrapper.appendChild(a);
    });

    menu.appendChild(socialWrapper);

    // === Right: Mobile Toggle ===
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

    return { nav, links };
}

export function renderSidebar(links) {
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar md:hidden';
    sidebar.id = 'sidebar';

    const menuWrapper = document.createElement('div');
    menuWrapper.className = 'menu-links';

    links.forEach(text => {
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = text;
        menuWrapper.appendChild(a);
    });

    const socialWrapper = document.createElement('div');
    socialWrapper.className = 'flex gap-4 mt-4';

    const iconList = [
        {
            name: 'Telegram',
            href: 'https://t.me/yourchannel',
            img: './assets/telegram.webp',
        },
        {
            name: 'X',
            href: 'https://x.com/yourhandle',
            img: './assets/x.webp',
        },
        {
            name: 'GitHub',
            href: 'https://github.com/yourprofile',
            img: './assets/github.webp',
        }
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
        image.className = 'h-6 w-6';

        a.appendChild(image);
        socialWrapper.appendChild(a);
    });

    sidebar.appendChild(menuWrapper);
    sidebar.appendChild(socialWrapper);

    return sidebar;
}
