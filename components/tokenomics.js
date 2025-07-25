export function renderTokenomicSection() {
  const section = document.createElement('section');
  section.className = 'bg-black text-green-400 w-full min-h-screen flex items-center justify-center px-6 py-20';

  const wrapper = document.createElement('div');
  wrapper.className = 'flex flex-col items-center justify-center w-full max-w-5xl text-center space-y-10';

  // Title
  const title = document.createElement('h2');
  title.className = 'text-4xl md:text-5xl font-bold tracking-wide text-green-500';
  title.textContent = 'POOKIENOMICS';
  wrapper.appendChild(title);

  // Token info
  const supply = document.createElement('p');
  supply.className = 'text-lg md:text-xl';
  supply.textContent = 'Supply: 1,000,000,000 $POOKIE';
  wrapper.appendChild(supply);

  const dist = document.createElement('div');
  dist.className = 'flex flex-col md:flex-row items-center justify-center gap-6 text-lg md:text-xl';

  const staking = document.createElement('div');
  staking.className = 'bg-green-900/30 border border-green-500 px-6 py-4 rounded-2xl shadow-md';
  staking.textContent = '🟢 5% for Staking';
  dist.appendChild(staking);

  const community = document.createElement('div');
  community.className = 'bg-green-900/30 border border-green-500 px-6 py-4 rounded-2xl shadow-md';
  community.textContent = '🟢 95% Community / LP';
  dist.appendChild(community);

  wrapper.appendChild(dist);

  // Cards for Burn & Renounced
  const cards = document.createElement('div');
  cards.className = 'flex flex-col md:flex-row gap-6 pt-10';

  const card1 = document.createElement('div');
  card1.className = 'bg-green-950 border border-green-500 rounded-2xl p-6 flex-1 shadow-lg';
  const card1Title = document.createElement('h3');
  card1Title.className = 'text-2xl font-semibold mb-2 text-white';
  card1Title.textContent = '🔥 Liquidity Pool Burnt';
  const card1Desc = document.createElement('p');
  card1Desc.className = 'text-green-300';
  card1Desc.textContent = 'LP tokens have been sent to the burn address forever.';
  card1.appendChild(card1Title);
  card1.appendChild(card1Desc);

  const card2 = document.createElement('div');
  card2.className = 'bg-green-950 border border-green-500 rounded-2xl p-6 flex-1 shadow-lg';
  const card2Title = document.createElement('h3');
  card2Title.className = 'text-2xl font-semibold mb-2 text-white';
  card2Title.textContent = '🔓 Owner Renounced';
  const card2Desc = document.createElement('p');
  card2Desc.className = 'text-green-300';
  card2Desc.textContent = 'The contract ownership has been renounced permanently.';
  card2.appendChild(card2Title);
  card2.appendChild(card2Desc);

  cards.appendChild(card1);
  cards.appendChild(card2);

  wrapper.appendChild(cards);
  section.appendChild(wrapper);
  return(section);
}
