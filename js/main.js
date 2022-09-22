document.addEventListener('DOMContentLoaded', function () {
    const
        modal = document.querySelector('.form-modal'),
        overlay = document.querySelector('.modal-overlay'),
        body = document.querySelector('body'),
        buttonOpen = document.querySelector('.feedback__btn'),
        buttonClose = document.querySelector('.form-modal__close');

    buttonOpen.addEventListener('click', openModal);
    overlay.addEventListener('click', closeModal);
    buttonClose.addEventListener('click', closeModal);

    function openModal (e) {
        e.preventDefault();
        overlay.classList.add('show');
        modal.classList.add('show');
        body.style.overflow = 'hidden';
    }

    function closeModal (e) {
        e.preventDefault();
        overlay.classList.remove('show');
        modal.classList.remove('show');
        body.style.overflow = 'initial';
    }
});