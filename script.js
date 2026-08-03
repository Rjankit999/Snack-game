const board = document.querySelector(".board");
const blockHeight = 80;
const blockWidth = 80;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

const blocks=[]
const snake=[
    {x:1,y:3},
    {x:1,y:4},
    {x:1,y:5},
    
]

let diraction='right'


for (let row = 0; row < rows; row++) {

    for (let col = 0; col < cols; col++) {
        const block = document.createElement("div");
        block.classList.add("block")
        blocks[`${row}-${col}`] = block;
        board.appendChild(block);
        block.innerText=`${row} ${col}`
    }
}

function render(){
    snake.forEach(segment=>{
        (blocks[`${segment.x}-${segment.y}`]).classList.add("fill")
    })
    
}

setInterval(()=>{
    const head=snake[snake.length-1]
    render()
},300)