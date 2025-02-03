function sketch2 (p)
{
    p.setup = function()
    {
        p.createCanvas(720, 480);
    }

    p.draw = function()
    {
        p.background(100);
        p.fill(224, 224, 224);
        p.stroke(255);
        
        //Drawing division lines using squares
        for (var i = 0; i < 64; i++)
        {
            p.rect(230 + (245* Math.floor(i/32)), (i*15) % p.height, 15, 15);
        }

        p.fill(153, 153, 255);
        
        if(p.mouseX < 230)
        {
            p.rect(p.mouseX - 50, p.mouseY - 50, 100, 100);
        }
        else if (245 < p.mouseX && p.mouseX < 475)
        {
            p.circle(p.mouseX, p.mouseY, 100);
        }
        else if (490 < p.mouseX)
        {
            p.ellipse(p.mouseX, p.mouseY, 80, 120);
        }

    }

}

new p5(sketch2);