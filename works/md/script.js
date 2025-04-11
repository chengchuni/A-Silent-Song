const comic = document.getElementById('comic');
const homepage = document.getElementById('homepage');
const startButton = document.getElementById('startButton');

const imageFiles = [
  'wln0319-1-1.jpg', 'wln0319-1-2.jpg',
  'wln0319-2-1.jpg', 'wln0319-2-2.jpg',
  'wln0319-3-1.jpg', 'wln0319-3-2.jpg',
  'wln0319-4-1.jpg', 'wln0319-4-2.jpg'
];

let preloadedImages = [];

function preloadImages() {
  return Promise.all(imageFiles.map(src => {
    return new Promise(resolve => {
      const img = document.createElement('img');
      img.src = `../../images/${src}`;
      img.onload = () => {
        preloadedImages.push(img);
        resolve();
      };
    });
  }));
}

function showImages() {
  preloadedImages.forEach((img, i) => {
    comic.appendChild(img);
    setTimeout(() => {
      img.classList.add('visible');
    }, i * 100);
  });
}

startButton.addEventListener('click', () => {
  homepage.classList.add('hidden');
  comic.classList.add('fade-in');
  showImages();
});

document.body.addEventListener('click', (e) => {
  if (!homepage.classList.contains('hidden')) return;

  const x = e.clientX;
  const middle = window.innerWidth / 2;
  const scrollAmount = window.innerWidth * 0.5;

  if (x > middle) {
    comic.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  } else {
    comic.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
});

// start loading in the background
preloadImages();

