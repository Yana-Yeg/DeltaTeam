(() => {
  const refs = {
    openBurgerBtn: document.querySelector('.burger-btn-open'),
    closeBurgerBtn: document.querySelector('.burger-btn-close'),
    burger: document.querySelector('.burger-menu'),
  };

  refs.openBurgerBtn.addEventListener('click', toggleBurger);
  refs.closeBurgerBtn.addEventListener('click', toggleBurger);

  function toggleBurger() {
    refs.burger.classList.toggle('visually-hidden');
  }
})();

