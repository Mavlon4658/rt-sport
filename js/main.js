const boxWrap = document.querySelector('.box-wrap');
const list = document.querySelectorAll('.box-wrap ul li');

boxWrap.onmouseenter = () => {
    list.forEach(el => {
        el.classList.add('show');
    })
}

list[1].onmouseenter = () => {
    list[0].classList.add('hidden');
}

list[1].onmouseleave = () => {
    list[0].classList.remove('hidden');
}

list[2].onmouseenter = () => {
    list[3].classList.add('hidden');
}

list[2].onmouseleave = () => {
    list[3].classList.remove('hidden');
}

list[8].onmouseenter = () => {
    list[7].classList.add('hidden');
}

list[8].onmouseleave = () => {
    list[7].classList.remove('hidden');
}

list[9].onmouseenter = () => {
    list[10].classList.add('hidden');
}

list[9].onmouseleave = () => {
    list[10].classList.remove('hidden');
}

const mbBox = document.querySelector('.mobile-box');
const mbListWrap = document.querySelector('.mobile ul');
const mbList = document.querySelectorAll('.mobile ul li');

mbBox.onclick = () => {
    mbListWrap.classList.add('active');
}

mbList.forEach(el => {
    const btn = el.querySelector('button');
    const h4 = el.querySelector('h4');
    const p = el.querySelector('p');

    btn.onclick = () => {
        p.classList.add('active');
        h4.classList.add('hidden');
    }
})