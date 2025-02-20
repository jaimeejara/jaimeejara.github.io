var colorPicker;
let strokeWeightSlider;
var bgColorPicker;
var blah;
var DEbuttonLabel = 'Erase';
var eraserButton;

function setup ()
{
    createCanvas(720, 480);
    colorPicker = createColorPicker('deeppink');

    strokeWeightSlider = createSlider(1, 10, 5, 1);
    // min, max, default, step^^

    bgColorPicker = createColorPicker('grey');
    
    var bgColorButton = createButton('Refresh');
    bgColorButton.mousePressed(repaint);
    bgColorPicker.changed(repaint);

    background(bgColorPicker.value());

    eraserButton = createButton(DEbuttonLabel);
    eraserButton.mousePressed(myEraser);

}

function draw ()
{
    strokeWeight(strokeWeightSlider.value());
    stroke(colorPicker.value());

    // Remixed from p5js.org/reference/mouseispressed/
    if(mouseIsPressed)
    {
        if (blah == true)
        {
            stroke(bgColorPicker.value());
        }
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function repaint()
{
    background(bgColorPicker.value());
}

function myEraser()
{
    if(DEbuttonLabel == 'Erase')
    {
        console.log(DEbuttonLabel);
        blah = true;
        DEbuttonLabel = 'Draw';
        eraserButton.html(DEbuttonLabel);
    }

    else
    {
            console.log(DEbuttonLabel);
            blah = false;
            DEbuttonLabel = 'Erase';
            eraserButton.html(DEbuttonLabel);
     }

}

