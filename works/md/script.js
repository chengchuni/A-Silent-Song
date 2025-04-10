document.addEventListener("DOMContentLoaded", function () {
  const comic = document.getElementById('comic');
  const homepage = document.getElementById('homepage');
  const startButton = document.getElementById('startButton');
  const scrollAmount = window.innerWidth * 0.5; // Scroll by 50% of screen width

  // Image files to load dynamically
  const imageFiles = [
    'wln0319-1-1.webp',
    'wln0319-1-2.webp',
    'wln0319-2-1.webp',
    'wln0319-2-2.webp',
    'wln0319-3-1.webp',
    'wln0319-3-2.webp',
    'wln0319-4-1.webp',
    'wln0319-4-2.webp',
    // Add more image filenames as needed
  ];

  // Load images dynamically into the comic container
  function loadImages() {
    imageFiles.forEach(src => {
      const img = document.createElement('img');
      img.src = `../../images/${src}`; // Load from the images folder
      img.alt = `Comic image ${src}`;
      comic.appendChild(img);
    });
  }

  // Add click event listener to the start button
  startButton.addEventListener('click', function () {
    // Fade out the homepage overlay
    homepage.classList.add('hidden');

    // Load images after the overlay fades out
    setTimeout(() => {
      loadImages();
    }, 500); // Wait for the fade-out transition to complete
  });

  // Event listener for clicking on the body to scroll left or right
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
