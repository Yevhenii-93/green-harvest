(() => {
  const refs = {
    openModalBtn: document.querySelector('[backdrop]'),
    closeModalBtn: document.querySelector('[close-modal-btn]'),
    modal: document.querySelector('[modal-menu]'),
  };

  // Открытие модального окна
  refs.openModalBtn.addEventListener('click', () => {
    refs.modal.classList.add('is-open');
  });

  // Закрытие модального окна
  refs.closeModalBtn.addEventListener('click', () => {
    refs.modal.classList.remove('is-open');
  });
})();
