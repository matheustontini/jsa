document.addEventListener('DOMContentLoaded', () => {

    const thickness = document.getElementById('thickness');

    let isDrawing = false;
    let x = 0;
    let y = 0;

    const draw = document.getElementById('myPics');
    const context = myPics.getContext('2d');

    const rect = myPics.getBoundingClientRect();

    draw.addEventListener('mousedown', e => {
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    isDrawing = true;
    });

    draw.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
    }
    });

    draw.addEventListener('mouseup', e => {
    if (isDrawing === true) {
        drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
        x = 0;
        y = 0;
        isDrawing = false;
    }
    });

    const drawLine = (context, x1, y1, x2, y2) => {
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = thickness.value;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
    }

});