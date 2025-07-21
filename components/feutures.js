export function renderFeaturesSection() {
  const section = document.createElement('section');
  section.className = 'bg-black text-white px-6 py-20 flex flex-col items-center justify-center min-h-screen animate-fade-in';

  const title = document.createElement('h2');
  title.className = 'text-3xl sm:text-4xl font-bold mb-12 text-center opacity-0 animate-fade-in-down animation-delay-200';
  title.textContent = '🔧 Pookie Features';

  const grid = document.createElement('div');
  grid.className = `
    grid gap-6 sm:gap-10 max-w-5xl w-full
    grid-cols-1
    sm:grid-cols-6
    [&>*:nth-child(1)]:sm:col-span-2
    [&>*:nth-child(2)]:sm:col-span-2
    [&>*:nth-child(3)]:sm:col-span-2
    [&>*:nth-child(4)]:sm:col-span-2
    [&>*:nth-child(5)]:sm:col-span-2
  `;

  const features = [
    {
      icon: '🦊',
      title: 'Simple Wallet',
      desc: 'Manage your $POOKIE and other Abstract tokens directly in your browser — no downloads needed.'
    },
    {
      icon: '🔁',
      title: 'Trade & Bridge',
      desc: 'Instantly swap tokens and bridge assets across supported networks with minimal fees.'
    },
    {
      icon: '🤖',
      title: 'Token Analyzer (AI)',
      desc: 'Get smart insights, risk scores, and market trends powered by real-time AI analysis.'
    },
    {
      icon: '📊',
      title: 'Staking Dashboard',
      desc: 'Stake your $POOKIE to earn dynamic rewards based on the total amount staked.'
    },
    {
      icon: '📈',
      title: 'Trending Tracker',
      desc: 'Monitor trending tokens and discover what’s hot on Abstract Chain in real-time.'
    },
  ];

  let delay = 300;
  for (const f of features) {
    const box = document.createElement('div');
    box.className = `
      bg-green-900 bg-opacity-20 p-4 sm:p-6 rounded-xl shadow-md
      hover:bg-opacity-30 transition duration-300 transform hover:-translate-y-1
      opacity-0 animate-fade-in-up
    `;
    box.style.animationDelay = `${delay}ms`;
    delay += 200;

    const icon = document.createElement('div');
    icon.className = 'text-3xl sm:text-4xl mb-2 sm:mb-4';
    icon.textContent = f.icon;

    const h3 = document.createElement('h3');
    h3.className = 'text-lg sm:text-xl font-semibold mb-1 sm:mb-2';
    h3.textContent = f.title;

    const p = document.createElement('p');
    p.className = 'text-xs sm:text-sm text-gray-300';
    p.textContent = f.desc;

    box.appendChild(icon);
    box.appendChild(h3);
    box.appendChild(p);
    grid.appendChild(box);
  }

  section.appendChild(title);
  section.appendChild(grid);

  return section;
}
