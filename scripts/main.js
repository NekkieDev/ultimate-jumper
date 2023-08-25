const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');
const walking = ['../assets/walk1.png' , '../assets/walk2.png'];
let currentWalk = 0;
function playerWalk(){
   setInterval(function() {
    player.src = walking[currentWalk];
    currentWalk = (currentWalk + 1) % walking.length; 
   }, 100);
}
playerWalk();

function jump() {
   player.classList.add('jump');

   setTimeout(() => {
       player.classList.remove('jump');
   }, 800);
};
let obstacleInterval;
let obstaclePosition = 960;
function generateObstacle(){
   obstacleInterval = setInterval(() => {
      const randomGenerate = Math.random() * 2000 + 1000
      setTimeout(() => {
         obstacle.style.left = obstaclePosition + 'px';
         moveObstacle();
         
      }, randomGenerate);
   }, 1000);
}

function moveObstacle() {
   const obstacleMoveInterval = setInterval(() => {
      obstaclePosition -= 5;
      obstacle.style.left = obstaclePosition + 'px';

      if (obstaclePosition < 0) {
         clearInterval(obstacleMoveInterval);
         obstaclePosition = 960;
      }

      if (checkCollision()) {
         clearInterval(obstacleMoveInterval);
         clearInterval(obstacleInterval);
         location.reload();
      }
   }, 20);
}

function checkCollision() {
   const playerPos = player.getBoundingClientRect();
   const obstaclePos = obstacle.getBoundingClientRect() ;
   return(
      playerPos.bottom >= obstaclePos.top &&
      playerPos.top <= obstaclePos.bottom &&
      playerPos.right >= obstaclePos.left &&
      playerPos.left <= obstaclePos.right
   );
}
generateObstacle()

document.addEventListener('keydown', event => {
   if (event.key === ' ') {
      jump();
   }
});


