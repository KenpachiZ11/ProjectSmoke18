// Modal
let modal = document.getElementById('modal');
let clickMe = document.getElementById('click__me');
let close = document.getElementById('modal__close');


clickMe.addEventListener('click', () => {
    modal.style.display = "block";
});

close.addEventListener('click', () => {
    modal.style.display = "none";
});
