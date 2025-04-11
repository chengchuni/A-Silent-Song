document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const homepage = document.getElementById("homepage");
  const comic = document.getElementById("comic");
  const scrollAmount = window.innerWidth * 0.5;

  const imageFiles = [
    'wln0319-1-1.webp',
    'wln0319-1-2.webp',
    'wln0319-2-1.webp',
    'wln0319-2-2.webp',
    'wln0319-3-1.webp',
    'wln0319-3-2.webp',
    'wln0319-4-1.webp',
    'wln0319-4-2.webp'
  ];

  startButton.addEventListener("click", function () {
    homepage.style.opacity = '0';
    setTimeout(function () {
      homepage.style.display = "none";
      comic.style.display = "flex";
      imageFiles.forEach(src => {
        const img = document.createElement('img');
        img.src = "./image/" + src;
        comic.appendChild(img);
      });
    }, 500);
  });

  document.body.addEventListener('click', (e) => {
    if (!homepage.classList.contains('hidden')) return;
    const x = e.clientX;
    const middle = window.innerWidth / 2;
    if (x > middle) {
      comic.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      comic.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  });
});
