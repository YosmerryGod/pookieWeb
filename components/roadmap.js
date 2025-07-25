export function renderRoadmapSection() {
  const section = document.createElement('section');
  section.id = 'roadmap';
section.className = 'scroll-mt-28 pt-28 bg-black text-white w-full min-h-screen flex items-center justify-center px-6 py-16';

  const wrapper = document.createElement('div');
  wrapper.className = 'flex flex-col items-center justify-center w-full max-w-6xl space-y-12';

  const title = document.createElement('h2');
  title.className = 'text-green-400 text-4xl md:text-5xl font-bold tracking-wide text-center';
  title.textContent = 'POOKIE Roadmap';

  const line = document.createElement('div');
  line.className = 'w-1 h-12 bg-green-500 rounded-full my-4';

  const roadmapContainer = document.createElement('div');
  roadmapContainer.className = 'grid grid-cols-1 md:grid-cols-3 gap-6 w-full';

  const phases = [
    {
      phase: 'Phase 1: The Rise of Pookie (Q3 2025)',
      items: [
        '✅ Mascot & brand identity creation',
        '✅ Telegram AI bot deployed',
        '✅ Smart contract setup for staking, swap, analyzer',
        '✅ Website + socials launch',
        '- Meme campaigns & community formation',
        '- Token launch via Moonshot',
      ]
    },
    {
      phase: 'Phase 2: Chaos Begins (Q4 2025)',
      items: [
        '- DApp v1: Full feature release',
        '- Trending Token logic & analyzer AI',
        '- Meme-to-earn contest',
        '- NFT previews + partnership drops',
        '- AI-powered Telegram trader mode (beta)',
      ]
    },
    {
      phase: 'Phase 3: The Cult of Pookie (Q1 2026)',
      items: [
        '- Cross-chain research (BSC / Polygon)',
        '- NFT collection linked to staking',
        '- Gamified leaderboard for top meme traders',
        '- DAO experimentation',
        '- Major CEX listings & global shilling',
      ]
    }
  ];

  // Create cards
  phases.forEach((p) => {
    const card = document.createElement('div');
    card.className = 'bg-[#111] border border-green-700 rounded-2xl shadow-md p-6 flex flex-col space-y-4 hover:shadow-green-600/20 transition';

    const phaseTitle = document.createElement('h3');
    phaseTitle.className = 'text-green-400 text-xl font-semibold';
    phaseTitle.textContent = p.phase;

    const ul = document.createElement('ul');
    ul.className = 'text-sm text-gray-300 space-y-1';
    p.items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });

    card.appendChild(phaseTitle);
    card.appendChild(ul);
    roadmapContainer.appendChild(card);
  });

  // Append everything
  wrapper.appendChild(title);
  wrapper.appendChild(line);
  wrapper.appendChild(roadmapContainer);
  section.appendChild(wrapper);

  // Inject into body
  return(section);
}
