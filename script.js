var doorImage1 = document.getElementById('door1');
var doorImage2 = document.getElementById('door2');
var doorImage3 = document.getElementById('door3');
var beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
var spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
var botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
var numClosedDoors = 3;
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
let openDoor1;
let openDoor2;
let openDoor3;
let startButton = document.getElementById('start');
let currentlyPlaying = true;

const isBot = (door) => {
  if(door.src === botDoorPath){
    return true;
  }else{
    return false;
  };
};

const isClicked = (door) =>{
  if(door.src === closedDoorPath){
    return false;
  }else{
    return true;
  }
};

const playDoor = (door) =>{
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
  }else if(isBot(door) === true){
    gameOver();
  };
};
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()* numClosedDoors);
  
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if(choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }else{
    openDoor3 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor1 = beachDoorPath;
  };
};

doorImage1.onclick = () =>{
  if(!isClicked(doorImage1) && currentlyPlaying === true){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () =>{
  if(!isClicked(doorImage2) && currentlyPlaying === true){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  };
};

doorImage3.onclick = () =>{
  if(!isClicked(doorImage3) && currentlyPlaying === true){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  };
};

const startRound = () =>{
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  randomChoreDoorGenerator();
};


startButton.onclick = () =>{
  if(currentlyPlaying === false){
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
  };
  startRound();
};

const gameOver = (status) =>{
  if (status === 'win'){
    startButton.innerHTML = 'You Win! Play again?';
  }else{
    startButton.innerHTML = 'Game Over! Play again?';
  };
  currentlyPlaying = false;
};

startRound();