const comic = document.getElementById('comic');
const homepage = document.getElementById('homepage');
const startButton = document.getElementById('startButton');
const loader = document.querySelector('.loader');

const imageFiles = [
  'wln0319-1-1.jpg', 'wln0319-1-2.jpg',
  'wln0319-2-1.jpg', 'wln0319-2-2.jpg',
  'wln0319-3-1.jpg', 'wln0319-3-2.jpg',
  'wln0319-4-1.jpg', 'wln0319-4-2.jpg'
];

let preloadedImages = [];

// Preload images and handle potential errors
const preloadImages = () => {
  return Promise.all(imageFiles.map(src => {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img');
      img.src = `../../images/${src}`;
      
      // Success handler
      img.onload = () => {
        img.classList.add('comic-img');
        preloadedImages.push(img);
        resolve();
      };

      // Error handler
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
        reject(`Failed to load image: ${src}`);
      };
    });
  }));
};

// Show images with a staggered fade-in effect
const showImages = () => {
  preloadedImages.forEach((img, index) => {
    comic.appendChild(img);
    setTimeout(() => {
      img.classList.add('visible');  // Add class for fade-in effect
    }, index * 100); // Stagger fade-in
  });
};

// Only allow Start after all images are loaded
preloadImages().then(() => {
  loader.style.display = 'none';   // Hide loader once images are loaded
  startButton.style.display = 'block';  // Show start button
}).catch(error => {
  loader.innerHTML = 'Error loading images. Please try again later.';  // Display error message if any image fails to load
  console.error(error);
});

// Click to start the comic
startButton.addEventListener('click', () => {
  homepage.classList.add('hidden');
  comic.classList.add('fade-in');   // Add fade-in class to comic
  showImages();  // Display preloaded images
  console.log('Start button clicked');
  homepage.classList.add('hidden');
  comic.classList.add('fade-in');
  showImages();
});

// Tap to scroll functionality (on mobile)
document.body.addEventListener('click', (e) => {
  if (!homepage.classList.contains('hidden')) return;

  const x = e.clientX;  // Get the x-coordinate of the click
  const middle = window.innerWidth / 2;  // Divide the screen width in half
  const scrollAmount = window.innerWidth * 0.5;  // Set scroll amount to 50% of screen width

  // Check if the click was on the right or left side of the screen
  if (x > middle) {
    comic.scrollBy({ left: scrollAmount, behavior: 'smooth' });  // Scroll right
  } else {
    comic.scrollBy({ left: -scrollAmount, behavior: 'smooth' });  // Scroll left
  }
});
