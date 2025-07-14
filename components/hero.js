export function renderHeroSection() {
  const section = document.createElement('section');
  section.className = 'h-screen flex items-center justify-center px-4 md:px-10 lg:px-20 pt-20';

  const container = document.createElement('div');
  container.className = 'max-w-6xl mx-auto text-center';

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

  const btnDocs = document.createElement('button');
  btnDocs.className = 'btn-primary text-black font-bold py-3 px-8 rounded-full';
  btnDocs.textContent = 'Read Docs';

  buttonGroup.appendChild(btnApp);
  buttonGroup.appendChild(btnDocs);

  container.appendChild(heading);
  container.appendChild(paragraph);
  container.appendChild(buttonGroup);

  section.appendChild(container);

  return section;
}
