// Variables
const canvas = document.querySelector('.draw'),
      ctx = canvas.getContext('2d');
let isDrawing = false,
    pointX = 0,
    pointY = 0,
    hue = 0,
    lineSize = 1,
    direction = true;

// Initialize canvas and context
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

// Draw line
function drawLine(e){
    ctx.beginPath();
    ctx.moveTo(pointX, pointY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

// Drawing function
function draw(e){
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = lineSize;
    drawLine(e);
    [pointX, pointY] = [e.offsetX, e.offsetY];
    (hue >= 360)? hue = 0 : hue++;
    (direction)? lineSize++ : lineSize--;
    if (lineSize >= 100 || lineSize <=1) 
        direction = !direction;
}

// Listeners
canvas.addEventListener('mousedown', (e)=> {
    isDrawing = true;
    [pointX, pointY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', (e) => {
    if(isDrawing) draw(e);
});
canvas.addEventListener('mouseup', ()=> isDrawing = false );
canvas.addEventListener('mouseout', ()=> isDrawing = false ); // If mouse went out of the screen