let draw = SVG('picture').size(500, 500);



function drawflower(x,y){
    let circle = draw.circle(75, 75).fill('yellow').move(x+20,y+20);
var line = draw.line(0, 100, 0, 50).move(x+58,y+90)
line.stroke({ color: 'brown', width: 10, linecap: 'flat' })
}

drawflower(0,0);
drawflower(150,0);
drawflower(300,0);
