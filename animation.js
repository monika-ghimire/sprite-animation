


function animate() {
    //clear screen
    ctx.clearRect(0, 0, canvas_width, canvas_height)

    //geting x and y form obj
    let position = Math.floor(gameFrame / staggerFrame) % spriteAnimation[playerState].loc.length
    let frameX = spritwidth * position
    let frameY = spriteAnimation[playerState].loc[position].y;

    ctx.drawImage(playerImage, frameX, frameY,
        spritwidth, spritheight, 0, 0, spritwidth, spritheight)


    gameFrame++;
    requestAnimationFrame(animate)
};
animate()





























// ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh)
    // if(gameFrame%staggerFrame==0)
    // {
    //     if(frameX<6)frameX++
    //     else frameX=0
    // }
