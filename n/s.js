const conststart = document.querySelector('#start');
const screen = document.querySelector('.screen');
const timeList = document.querySelector('#time-list');
const timEl = document.querySelector('#time');
const board = document.querySelector('#board');



const colors = ['#6fa2dd', '#996fdd', '#dd6fdd', '#d8565d', 
  '#56d8d1', '#56d87d', '#b5d856', '#d8aa56', '#16661d']; 



  let time = 0;
  let score = 0;
  
  startBtn.addEventListeer('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');



  })

  timeList.addEventListener('click', (event)=> {
      if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttrbute('data-time'));
        startGame();
      }
  })

  board.addEventListener('click', (event)=> {
      if (event.target.classList.contains('circle')) {
          score++;
          event.target.remove();
          createRandomCircle();
      }
  })


  function getRandomNumber(min,max) {
      return Math.round(Math.random() * (max -min) + min);
  }
 function setColor (element) {
     const color = getRandomColor();
     element.style.background = color;
 }
function getRandomColor() {
    // const index = Math.floor(Math.random() * colors.length);
    const index = getRandomNumber(0, colors.length);
    return colors[index];
}

function createRandomCircle() {
    const circle =document.createElement('div');

    const size = getRandomNumber(10,60);
    
    const {width, height} = board.getBoundingClientRect();

    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    setColor(circle);

}


