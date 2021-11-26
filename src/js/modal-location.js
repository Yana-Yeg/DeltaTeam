(() => {
    const refs = {
        openModalBtn: document.querySelector('.our-location-opener'),
        closeModalBtn: document.querySelector('.our-location-close'),
        modal: document.querySelector('.our-location'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();
