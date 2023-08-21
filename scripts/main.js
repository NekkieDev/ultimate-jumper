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

const jump = () => {
   player.classList.add('jump');

   setTimeout(() => {
       player.classList.remove('jump');
   }, 500);
};

document.addEventListener('keydown', event => {
   if (event.key === ' ') {
      jump();
   }
});
}



