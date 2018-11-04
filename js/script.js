/*                Slider                */
const slide = document.querySelectorAll('.slider li');
const dots = document.querySelectorAll('.dots .radio');

let current = 0;
let last = 0;

const nextSlide = () => {
    slide[last].className = '';
    dots[last].checked = '';
    current += 1;
    if (current >= slide.length) current = 0;
    last = current;

    slide[current].className = 'show';
    dots[current].checked = 'checked';
};

const slideInterval = setInterval(nextSlide, 3000);

const toggle = (e) => {
    current = e - 1;
    nextSlide();
};

/*             Nav-drop-menu            */
const dropMenu = document.querySelector('nav ul');
let count = 1;

document.getElementById('tab').onclick = () => {
    if (count) {
        dropMenu.className = 'nav-drop-menu';
        count = 0;
    } else {
        dropMenu.className = '';
        count = 1;
    }
};
