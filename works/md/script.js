document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const homepage = document.getElementById("homepage");
  const comic = document.getElementById("comic");
  const scrollAmount = window.innerWidth * 0.5; // scroll by 50% of screen width

  // Load images dynamically
  const imageFiles = [
    'wln0319-1-1.jpg',
    'wln0319-1-2.jpg',
    'wln0319-2-1.jpg',
    'wln0319-2-2.jpg',
    'wln0319-3-1.jpg',
    'wln0319-3-2.jpg',
    'wln0319-4-1.jpg',
    'wln0319-4-2.jpg'
  ];

  startButton.addEventListener("click", function () {
    homepage.style.opacity = '0';
    setTimeout(function () {
      homepage.style.display = "none";
      comic.style.display = "flex";

      imageFiles.forEach(src => {
        const img = document.createElement('img');
        img.src = `../../image/${src}`;  // ✅ updated for your folder
        comic.appendChild(img);
      });
    }, 500);
  });

  document.body.addEventListener('click', (e) => {
    const x = e.clientX;
    const middle = window.innerWidth / 2;

    if (x > middle) {
      comic.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      comic.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  });
});
