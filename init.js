let playerState = 'run';
const dropdown = document.getElementById('animation')
dropdown.addEventListener('change', function (e) {
    playerState = e.target.value;
})


const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const canvas_width = canvas.width = 600;
const canvas_height = canvas.height = 600
//for images
const playerImage = new Image()
playerImage.src = 'dog.png';
//frame
let gameFrame = 0
const spritwidth = 575;
const spritheight = 523;
const staggerFrame = 5;
const spriteAnimation = []

