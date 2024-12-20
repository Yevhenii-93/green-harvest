const slider = document.querySelector('.slider');

slider.addEventListener('mousemove', () => {
  slider.classList.add('paused');
});

slider.addEventListener('mouseleave', () => {
  slider.classList.remove('paused');
});