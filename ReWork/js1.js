// Modal 

const modalTrigger = document.querySelectorAll('[data-model]'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('[data-close]');


modalTrigger.addEventListener('click', () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
});

modalTrigger.addEventListener('click', () => {
    modal.classList.add('hide');
    modal.classList.remove('show');
});