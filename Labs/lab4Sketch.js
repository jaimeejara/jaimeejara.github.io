var sleepy;
var awake = false;
var snore, meow;

function setup()
{
    createCanvas(windowWidth, windowHeight);

    sleepy = createImg('sleepy.jpg', 'poop');

    sleepy.position(width/2 - 150, height/2 - 150);

    sleepy.size(300, 300);

    sleepy.mousePressed(switcharoo);

    snore = createAudio('snore.mp3');

    meow = createAudio('meow.mp3');

    snore.loop();
    meow.loop();

    meow.pause();
}

function switcharoo()
{
    if(awake)
        {
            sleepy.attribute('src', 'sleepy.jpg');//changes source of image into gif without new element
            meow.pause();
            snore.stop();//restarts sound
            snore.play();
        }
    else
    {
        sleepy.attribute('src', 'awake.gif');
        snore.pause();
        meow.stop();//restarts sound
        meow.play();
    }
    awake = !awake;
}