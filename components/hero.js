export function renderHeroSection() {
  const section = document.createElement('section');
  section.className = `
    relative h-screen flex items-center justify-center px-4 md:px-10 lg:px-20 pt-20
    bg-cover bg-center bg-no-repeat
  `;
  section.style.backgroundImage = "url('./assets/bg-hero.webp')";

  const container = document.createElement('div');
  container.className = 'max-w-6xl mx-auto text-center bg-black bg-opacity-60 p-6 rounded-lg z-10';

  const heading = document.createElement('h1');
  heading.className = 'text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-green-400';
  heading.textContent = 'POOKIE X ABSTRACT';

  const paragraph = document.createElement('p');
  paragraph.className = 'text-lg md:text-xl mb-8 text-gray-300';
  paragraph.innerHTML = `The <span class="text-green-400 font-bold">all in one</span> Web3 portal for abstract chain.`;

  const buttonGroup = document.createElement('div');
  buttonGroup.className = 'flex flex-col sm:flex-row gap-4 justify-center';

  const btnApp = document.createElement('button');
  btnApp.className = 'btn-primary text-black font-bold py-3 px-8 rounded-full';
  btnApp.textContent = 'Go to App';
  btnApp.addEventListener('click', () => {
    window.location.href = '/app'; // arahkan ke halaman app kamu
  });

  const btnDocs = document.createElement('button');
  btnDocs.className = 'btn-primary text-black font-bold py-3 px-8 rounded-full';
  btnDocs.textContent = 'Read Docs';
  btnDocs.addEventListener('click', () => {
    window.location.href = '/components/docs.html'; // arahkan ke docs.html
    // kalau hosting kamu pakai subpath: pookieabs.xyz/docs
    // ganti dengan: window.location.href = '/docs';
  });

  buttonGroup.appendChild(btnApp);
  buttonGroup.appendChild(btnDocs);

  container.appendChild(heading);
  container.appendChild(paragraph);
  container.appendChild(buttonGroup);

  const bottomImage = document.createElement('img');
  bottomImage.src = './assets/content-hero.webp';
  bottomImage.alt = 'Unicorn on Moon';
  bottomImage.className = 'absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 md:w-80 lg:w-96';

  section.appendChild(container);
  section.appendChild(bottomImage);

  return section;
}
