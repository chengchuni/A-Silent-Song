document.addEventListener("DOMContentLoaded", function () {
  const comic = document.getElementById('comic');
  const scrollAmount = window.innerWidth * 0.8; // scroll by 80% of screen width

  // Load images dynamically
  const imageFiles = [
    'comic1.jpg',
    'comic2.jpg',
    'comic3.jpg',
    'comic4.jpg',
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