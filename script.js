document.addEventListener("DOMContentLoaded", function () {
  const comic = document.getElementById('comic');
  const scrollAmount = window.innerWidth * 0.8; // scroll by 80% of screen width

  // Load images dynamically
  const imageFiles = [
    'wln0319-1-1.jpg',
    'wln0319-1-2.jpg',
    'wln0319-2-1.jpg',
    'wln0319-2-2.jpg',
    'wln0319-3-1.jpg',
    'wln0319-3-2.jpg',
    'wln0319-4-1.jpg',
    'wln0319-4-2.jpg',
    // Add more image filenames as needed
  ];

  imageFiles.forEach(src => {
    const img = document.createElement('img');
    img.src = `images/${src}`;
    comic.appendChild(img);
  });

  document.body.addEventListener('click', (e) => {
    const x = e.clientX;
    const middle = window.innerWidth / 2;

    if (x > middle) {
      // Tap on right side = scroll right
      comic.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      // Tap on left side = scroll left
      comic.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  });
});