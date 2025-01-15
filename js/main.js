const boxWrap = document.querySelector('.box-wrap');
const list = document.querySelectorAll('.box-wrap ul li');
boxWrap.onmouseenter = () => {
    list.forEach(el => {
        el.classList.add('show');
    })
}