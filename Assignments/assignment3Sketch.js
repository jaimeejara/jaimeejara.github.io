var tada;
var button;
var button2;
var fs;
var fsButton;
var exit = false;
var mystring = 'hello';
var numberOfClicks = 0;
var jukebox;
var choice;
var noise;
var user;

function setup(){
    createCanvas(windowWidth, windowHeight);

    fsButton = createButton('Fullscreen');
    fsButton.position(10, 10);
    fsButton.mousePressed(function(){
        fs = fullscreen();
        fullscreen(!fs);
        exit = true;

    });


    user = prompt("What is your name?");
    

    //Source - https://p5js.org/reference/p5/createRadio/
    jukebox = createRadio();
    jukebox.center();
    jukebox.class('p5-radio');
    jukebox.size(60);
    
    jukebox.option('Duck');
    jukebox.option('Piggy');
    jukebox.option('Cat');

    jukebox.changed(sound);

}


function draw(){
    background(100);
    
    textSize(40);
    textAlign(CENTER, TOP);
    textFont('Verdana');
    fill(255, 255, 255);
    text('Hi, ' + user + ', welcome to...', width/2, 100);

    textSize(80);
    textAlign(CENTER, TOP);
    textFont('Verdana');
    fill(255, 255, 255);
    text('Animal Jukebox', width/2, 150);


}



//global callback
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    updateButtonLabel();
}



function keyPressed() {
    if (keyCode === UP_ARROW && exit) {
        fs = fullscreen();
        fullscreen(!fs);
        exit = false;
    }
}

function updateButtonLabel() {
    if (fullscreen()) {
        fsButton.html("Escape (Click button or press ↑ on keyboard)"); //Change text to "escape" when fullscreen is on
    } else {
        fsButton.html("Fullscreen"); //Change text back to "poop" when fullscreen is off
    }
}

function sound()
{
    choice = jukebox.value();
    if(choice === 'Duck')
    {
        noise = createAudio('Duck quack   Sound Effect.mp3');
        noise.play();
    }
    else if(choice === 'Piggy')
    {
        noise = createAudio('Pig - Sound Effect  ProSounds.mp3');
        noise.play();
    }
    else if(choice === 'Cat')
    {
        noise = createAudio('Cat meow sound effect.mp3');
        noise.play();
    }
    else
    {

    }
}

//Jukebox with three stations (three dif songs) using the radiobox p5