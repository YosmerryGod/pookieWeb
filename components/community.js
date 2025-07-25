export function renderCommunitySection() {
  const section = document.createElement('section');
  section.className = 'min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center justify-center animate-fade-in';

  // === Judul utama
  const title = document.createElement('h2');
  title.className = 'text-4xl font-bold mb-4 text-center';
  title.textContent = '🌐 Community Dominance';

  const subtitle = document.createElement('p');
  subtitle.className = 'text-lg text-gray-300 mb-10 text-center max-w-xl';
  subtitle.textContent = 'Our community drives our growth. Stay connected through Telegram and Twitter to shape the future of our project together.';

  // === Tombol komunitas
  const linksWrapper = document.createElement('div');
  linksWrapper.className = 'flex gap-6 mb-10';

  const telegramLink = document.createElement('a');
  telegramLink.href = 'https://t.me/pookieAbstract';
  telegramLink.target = '_blank';
  telegramLink.className = 'bg-green-600 hover:bg-green-700 px-5 py-2.5 rounded-full text-base font-semibold transition-colors';
  telegramLink.textContent = 'Join Telegram';

  const twitterLink = document.createElement('a');
  twitterLink.href = 'https://twitter.com/pookiedotfun';
  twitterLink.target = '_blank';
  twitterLink.className = 'bg-green-600 hover:bg-green-700 px-5 py-2.5 rounded-full text-base font-semibold transition-colors';
  twitterLink.textContent = 'Follow Twitter';

  linksWrapper.appendChild(telegramLink);
  linksWrapper.appendChild(twitterLink);

  // === Footer
  const footer = document.createElement('footer');
  footer.className = 'border-t border-gray-700 pt-4 mt-6 w-full text-center text-xs text-gray-500';
  footer.innerHTML = `&copy; ${new Date().getFullYear()} Pookie Project. All rights reserved.`;

  // === Tambahkan ke section
  section.appendChild(title);
  section.appendChild(subtitle);
  section.appendChild(linksWrapper);
  section.appendChild(footer);

  return section;
}
