document.addEventListener("DOMContentLoaded", function () {
  const comic = document.getElementById('comic');
  const scrollAmount = window.innerWidth * 0.5;

  const imageFiles = [
    'wln0319-1-1.jpg',
    'wln0319-1-2.jpg',
    'wln0319-2-1.jpg',
    'wln0319-2-2.jpg',
    'wln0319-3-1.jpg',
    'wln0319-3-2.jpg',
    'wln0319-4-1.jpg',
    'wln0319-4-2.jpg',
  ];

  imageFiles.forEach(src => {
    const img = document.createElement('img');
    img.src = `../../image/${src}`;
    comic.appendChild(img);
  });

  // Scroll on tap
  document.body.addEventListener('click', (e) => {
    const x = e.clientX;
    const middle = window.innerWidth / 2;

    if (x > middle) {
      comic.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      comic.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  });

  // Fade out overlay on click
  document.getElementById("startButton").addEventListener("click", function () {
    document.getElementById("homepage").classList.add("hidden");
  });
});
