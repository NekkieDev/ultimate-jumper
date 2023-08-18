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
playerWalk()


