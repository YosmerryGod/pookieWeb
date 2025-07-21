export function renderAboutSection() {
  const section = document.createElement('section');
  section.id = 'about';
  section.className = 'relative min-h-screen bg-black flex justify-center items-center px-4 sm:px-12 overflow-hidden';

  // === Gambar untuk desktop (kiri bawah absolute)
  const imgDesktop = document.createElement('img');
  imgDesktop.src = './assets/about.webp';
  imgDesktop.alt = 'Pookie the Panda';
  imgDesktop.className = `
    hidden sm:block
    absolute z-10
    w-40 sm:w-60 md:w-80 lg:w-96
    h-auto max-h-screen
    left-0 bottom-0
    pointer-events-none
  `;

  // === Gambar untuk mobile (bottom center absolute)
  const imgMobile = document.createElement('img');
  imgMobile.src = './assets/about.webp';
  imgMobile.alt = 'Pookie the Panda';
  imgMobile.className = `
    block sm:hidden
    absolute bottom-0 left-1/2 -translate-x-1/2 z-10
    w-40
    h-auto
    pointer-events-none
  `;

  // === Kotak hijau
  const wrapper = document.createElement('div');
  wrapper.className = `
    relative z-20 bg-green-600 p-8 rounded-2xl max-w-2xl text-white animate-fade-in
    ml-0 sm:ml-40 md:ml-56
    mx-auto sm:mx-0
  `;

  const title = document.createElement('h2');
  title.textContent = 'What is Pookie';
  title.className = 'text-3xl font-bold mb-4';

  const content = document.createElement('p');
  content.textContent = `Pookie is a lighthearted meme token launched on the Abstract Chain, created to bring the crypto community together through humor and creativity. With zero tax, burned liquidity, and a community-first approach, Pookie is more than just a token — it’s a movement.

Centered around the adorable character Pookie the Panda, the ecosystem is expanding with AI-powered tools, NFTs, and smart community features like a Telegram bot and an interactive DApp.`;
  content.className = 'text-base whitespace-pre-line';

  // Masukkan konten ke dalam wrapper
  wrapper.appendChild(title);
  wrapper.appendChild(content);

  // Tambahkan elemen ke section
  section.appendChild(imgDesktop);   // Gambar kiri bawah untuk desktop
  section.appendChild(wrapper);      // Kotak hijau
  section.appendChild(imgMobile);    // Gambar bawah center untuk mobile (absolute)

  return section;
}
