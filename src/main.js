const modalBtnOpen = document.querySelector('.js-open-modal');
const modalBtnClose = document.querySelector('.js-close-modal');
const modal = document.querySelector('.js-modal');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-open');
}