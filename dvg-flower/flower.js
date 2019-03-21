let draw = SVG('picture').size(1600, 1600);

function drawellipse(x,y){
    var ellipse = draw.ellipse(150, 100).fill('pink').move(x, y)
    ellipse.radius(50,25)
}

drawellipse(110,505)
drawellipse(260,505)
drawellipse(0,505)
drawellipse(410,505)
drawellipse(560,505)
drawellipse(710,505)
drawellipse(860,505)
drawellipse(1010,505)
drawellipse(1160,505)
drawellipse(1310,505)

function drawellipse2(x,y){
    var ellipse2= draw.ellipse(150,100).fill('pink').move(x,y)
    ellipse.radius(50,25)(linear8).transform({ rotation: 315});
}

drawellipse(100,300)

drawellipse2

function drawflower(x,y){
    let circle = draw.circle(75, 75).fill('yellow').move(x+20,y+20);
var line = draw.line(0, 100, 0, 50).move(x+58,y+90)
line.stroke({ color: 'brown', width: 10, linecap: 'flat' })
}

drawflower(50,500);
drawflower(200,500);
drawflower(350,500);
drawflower(500,500);
drawflower(650,500);
drawflower(800,500);
drawflower(950,500);
drawflower(1100,500);
drawflower(1250,500);

function drawcloud(x,y){
    let circle = draw.circle(75, 75).fill('white').move(x,y)
}

drawcloud(600,100)
drawcloud(650,100)
drawcloud(700,100)
drawcloud(750,100)
drawcloud(630,40)
drawcloud(675,40)
drawcloud(720,40)
drawcloud(10,100)
drawcloud(60,100)
drawcloud(110,100)
drawcloud(160,100)
drawcloud(40,40)
drawcloud(85,40)
drawcloud(130,40)
drawcloud(1150,100)
drawcloud(1200,100)
drawcloud(1250,100)
drawcloud(1300,100)
drawcloud(1180,40)
drawcloud(1225,40)
drawcloud(1270,40)

