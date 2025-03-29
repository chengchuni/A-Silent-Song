const galleryContainer = document.querySelector('.gallery-container');
let isDragging = false;
let startX;
let scrollLeft;

galleryContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    galleryContainer.classList.add('active');
    startX = e.pageX - galleryContainer.offsetLeft;
    scrollLeft = galleryContainer.scrollLeft;
});

galleryContainer.addEventListener('mouseleave', () => {
    isDragging = false;
});

galleryContainer.addEventListener('mouseup', () => {
    isDragging = false;
});

galleryContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - galleryContainer.offsetLeft;
    const walk = (x - startX) * 2;
    galleryContainer.scrollLeft = scrollLeft - walk;
});

let touchStartX = 0;
let touchScrollLeft = 0;

galleryContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].pageX;
    touchScrollLeft = galleryContainer.scrollLeft;
});

galleryContainer.addEventListener('touchmove', (e) => {
    const touchX = e.touches[0].pageX;
    const walk = (touchX - touchStartX) * 2;
    galleryContainer.scrollLeft = touchScrollLeft - walk;
});
