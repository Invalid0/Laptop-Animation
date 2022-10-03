const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HIGHT = canvas.height = 600;
const spriteWidth = 800;
const spriteHight = 800;
let frameX = 0;
let frameY = 0;
let laptopFrame = 0;
const staggerFrames = 30;

const laptopImage = new Image();
laptopImage.src = 'WhatsApp Image 2022-10-03 at 3.06.24 PM.jpeg';
function openAndCloseAnimation(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HIGHT);
    ctx.drawImage(laptopImage,frameX*spriteWidth,frameY*spriteWidth,spriteWidth,spriteHight,0,0,CANVAS_WIDTH,CANVAS_HIGHT);
    
    if(laptopFrame % staggerFrames == 0){
        if(frameX < 1){
            frameX++;
        }
        else if(frameY < 1){
            frameX = 0;
            frameY++;
        }
        
        else{
            frameX = 0;
            frameY = 0;
        }
    }
    
    laptopFrame++;
    requestAnimationFrame(openAndCloseAnimation);
}

openAndCloseAnimation();