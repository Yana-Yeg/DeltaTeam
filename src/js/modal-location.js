(() => {
    const refs = {
        openModalBtn: document.querySelector('.contacts-section__btnlocation'),
        closeModalBtn: document.querySelector('.our-location-close'),
        modal: document.querySelector('.our-location'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector('.contacts-section__btnfranchize'),
        closeModalBtn: document.querySelector('.our-franchize-close'),
        modal: document.querySelector('.our-franchize'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();