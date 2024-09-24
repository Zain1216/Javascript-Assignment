// Get the canvas and context
let c = document.getElementById('canva');
let ctx = c.getContext('2d');
let color = document.getElementById('color');
let ismouseclicked = false;

// Color picker change event listener
color.addEventListener('change', () => {
    console.log(color.value);
});

// Mouse down event listener - start drawing
c.addEventListener('mousedown', (event) => {
    console.log(event);
    ctx.beginPath();
    ismouseclicked = true;
    c.style.cursor = 'crosshair';  // Change cursor to crosshair when drawing
});

// Mouse up event listener - stop drawing
c.addEventListener('mouseup', () => {
    ismouseclicked = false;
    c.style.cursor = 'default';  // Revert cursor to default when not drawing
});

// Mouse move event listener for drawing
c.addEventListener('mousemove', (event) => {
    if (ismouseclicked) {
        console.log('mouse move event');
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.moveTo(event.offsetX, event.offsetY);
        ctx.stroke();
        ctx.lineCap = 'round';
        ctx.lineWidth = 3;
        ctx.strokeStyle = color.value;
    }
});

// Download button functionality
const downloadButton = document.getElementById('downloadButton');
downloadButton.addEventListener('click', () => {
    let dataURL = c.toDataURL('image/jpg');
    let link = document.createElement('a');
    link.href = dataURL;
    link.download = 'my-drawing.jpg';
    link.click();
});

// Clear button functionality
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, c.width, c.height);  // Clear the entire canvas
    c.style.cursor = 'default';  // Ensure cursor returns to default after clearing
});
