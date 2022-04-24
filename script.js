const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

const colors = ['#6fa2dd', '#996fdd', '#d8565d', '#56d87d', '#b5d856', '#d8aa56', '#16661d', '#56d8d1', '#dd6fdd'];

function getRandomNumber (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor();
const index = Math.floor(Math.random() * colors.length);
return colors[index];

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
}