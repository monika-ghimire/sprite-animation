// animation states in object
const animationStates=[
    {
        name:'idle',
         frames:7
    },
    {
        name:'jump',
         frames:7
    },
    {
        name:'fall',
         frames:7
    },
    {
        name:'run',
         frames:9
    },
    {
        name:'dizzy',
         frames:11
    },
    {
        name:'sit',
         frames:5
    },
    {
        name:'roll',
         frames:7
    },
    {
        name:'bite',
         frames:7
    },
    {
        name:'ko',
         frames:12
    },
    {
        name:'getHit',
         frames:4
    }
];
// its give x and y state  of frame 
animationStates.forEach((state,index)=>{
    let frames={
        loc:[],
    }
    for(let j=0;j<state.frames;j++)
    {
        let positionx=j*spritwidth
        let positiony=index*spritheight
        frames.loc.push({x:positionx,y:positiony})
    }
    spriteAnimation[state.name]=frames;
});