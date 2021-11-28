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





// _____________________________product
$(document).ready(function () {
    $('.products-list-item__btn1').click(function () {
        $('.content_block1').slideToggle(300);
        return false;
    });
});
$(document).ready(function () {
    $('.products-list-item__btn2').click(function () {
        $('.content_block2').slideToggle(300);
        return false;
    });
});
$(document).ready(function () {
    $('.products-list-item__btn3').click(function () {
        $('.content_block3').slideToggle(300);
        return false;
    });
});

// __MODAL BUY NOW__


(() => {
    const refs = {
        openModalBtn: document.querySelector('.buy-modal-open'),
        closeModalBtn: document.querySelector('.buy-modal-close'),
        modal: document.querySelector('.buy-now-modal'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();