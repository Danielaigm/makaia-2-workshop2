const modal = document.querySelector('.modal-sec');
const showModalBtn = document.querySelector('.header-container__modal-btn');
const btnClose = document.querySelector('.modal-sec__btn-close')

modal.classList.add('hidden-pro')

showModalBtn.addEventListener('click', (e) => {
    modal.classList.remove('hidden-pro')
})

btnClose.addEventListener('click', () => {
    modal.classList.add('hidden-pro')
})