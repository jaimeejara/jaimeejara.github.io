var x = 0;
var y = 0;
var a = 720;
var b = 480;



function setup()
{
    createCanvas(720, 480);
}

function draw()
{
    background("#AAA44F");
    rect(x,y,10,10);
    x = x+1;
    x = x % 720;// modulo/remainder operator
    y = y+3;
    y = y % 480;
    rect(a,b, 10,10);
    a = a-1;
    if (a <= 0)
    {
        a = 720;
    }
    b = b-3;
    if (b <= 0)
    {
        b = 480;
    }
    
    

}