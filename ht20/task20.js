window.onload = function(){  

const ball = document.getElementById('ball');
let targetX, targetY;


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function moveBallToTarget() {
  return new Promise(resolve => {
    const x = ball.offsetLeft;
    const y = ball.offsetTop;

    
    const distance = Math.sqrt(Math.pow(targetX - x, 2) + Math.pow(targetY - y, 2));

    
    const time = distance / 10;

    
    ball.style.transition = `left ${time}s linear, top ${time}s linear`;
    ball.style.left = `${targetX}px`;
    ball.style.top = `${targetY}px`;

    
    setTimeout(() => {
      resolve();
    }, time * 1000);
  });
}


function handleClick(event) {
  if (event.target === ball) return;

  
  targetX = event.clientX;
  targetY = event.clientY;

 
  if (ball.style.left && ball.style.top) {
    moveBallToTarget().then(() => {
      moveBallToTarget();
    });
  } else {
   
    moveBallToTarget();
  }
}


const startX = getRandomNumber(0, window.innerWidth - ball.offsetWidth);
const startY = getRandomNumber(0, window.innerHeight - ball.offsetHeight);
ball.style.left = `${startX}px`;
ball.style.top = `${startY}px`;


document.addEventListener('click', handleClick);
}