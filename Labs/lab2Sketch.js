var redBrick = 
{
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    xSpeed: 4,
    ySpeed: 4,
    colour: 'black',
    draw: function()
    {
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function()
    {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x < 0 || this.x > width - this.w)
        {
            this.xSpeed *= -1;
        }

        if (this.y > height - this.h || this.y < 0)
        {
            this.ySpeed *= -1;
        }

    }
};

var blueBrick = 
{
    x: 690,
    y: 0,
    w: 30,
    h: 30,
    xSpeed: 3,
    ySpeed: 3,
    colour: 'blue',
    draw: function()
    {
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function()
    {
        this.x -= this.xSpeed;
        this.y += this.ySpeed;

        if (this.x < 0 || this.x > width - this.w)
        {
            this.xSpeed *= -1;
            if (this.colour == 'red')
            {
                this.colour = 'blue';
            }
            else if (this.colour == 'blue')
            {
                this.colour = 'green';
            }
            else
            {
                this.colour = 'red';
            }
        }

        if (this.y > height - this.h || this.y < 0)
        {
            this.ySpeed *= -1;
            if (this.colour == 'red')
                {
                    this.colour = 'blue';
                }
                else if (this.colour == 'blue')
                {
                    this.colour = 'green';
                }
                else
                {
                    this.colour = 'red';
                }
        }

    }
};



function setup()
{
  
    createCanvas(720, 480);
}


function draw()
{
    background('grey');
    redBrick.draw();
    redBrick.move();
    blueBrick.draw();
    blueBrick.move();

    if(mouseX > 0 && (mouseX + 30) < 720 && mouseY > 0 && (mouseY + 30) < 480)
    {
        redBrick.x = mouseX;
        redBrick.y = mouseY;
    }
    
}