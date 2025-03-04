//SOURCE - https://p5js.org/tutorials/conditionals-and-interactivity/
//Description: This tutorial teaches how to use conditionals to build an interactive sunrise animation
//Added lines marked by "JAIMEE JARA - ..."
//START

            //variables for color change
            let redVal = 0;
            let greenVal = 0;

            //variable for sun position
            let sunHeight = 600; //stopping point below horizon

            //JAIMEE JARA - Variable for menu opening/closing (sun rising/setting), and variable for canvas
            let sun = true;
            let c;
            
            //JAIMEE JARA - variables for fading text in and out + day counter
            let titleFade;
            let captionFade;
            let clickedOnce;
            let day;
            let dayFade;
            let newDay;

            function setup() {
            c = createCanvas(600, 400);
            noStroke();
            titleFade = 0;
            captionFade = 0;
            dayFade = 0;
            clickedOnce = false;
            day = 0;
            newDay = true;
            }

            function draw() {
            
            //fill background with color based on custom variable values
            background(redVal, greenVal, 0);
            
            //sun
            fill(255, 135, 5, 60);
            circle(300, sunHeight, 180);
            fill(255, 100, 0, 100);
            circle(300, sunHeight, 140);
            
            //mountains
            fill(110, 50, 18);
            triangle(200, 400, 520, 253, 800, 400);
            fill(110,95,20);
            triangle(200,400,520,253,350,400);  
            
            fill(150, 75, 0);
            triangle(-100, 400, 150, 200, 400, 400);
            fill(100, 50, 12);
            triangle(-100, 400, 150, 200, 0, 400); 
            
            fill(150, 100, 0);
            triangle(200, 400, 450, 250, 800, 400);
            fill(120, 80, 50);
            triangle(200, 400, 450, 250, 300, 400);
            
            //SOURCE - https://p5js.org/tutorials/loading-and-selecting-fonts/
            //DESCRIPTION - This tutorial teaches how to load an manipulate different fonts
            //Added lines marked by "JAIMEE JARA - ..."
            //Most lines are already changed for this project
            
            textSize(80);
            textAlign(CENTER, TOP);
            textFont('Verdana');
            fill(255, 255, 255, titleFade);
            text('Time Machine', 300, 50);
            
            // FADE IN: Only runs at the start
            if (!clickedOnce && titleFade < 255) {
                titleFade = min(titleFade + 2, 255);
            }
            
            // FADE OUT: Starts when the user clicks the first time
            if (clickedOnce && titleFade > 0) {
                titleFade = max(titleFade - 5, 0);
            }
            
            textSize(12);
            textAlign(CENTER, TOP);
            textFont('Verdana');
            fill(255, 255, 255, captionFade);
            text('Click anywhere inside the canvas to begin your adventure', 300, 140);
            
            //JAIMEE JARA - Caption fades in only AFTER title is fully visible
            if (!clickedOnce && titleFade === 255) {
                captionFade = min(captionFade + 2, 255);
            }
            
            //JAIMEE JARA - Caption fades out after the first click
            if (clickedOnce && captionFade > 0) {
                captionFade = max(captionFade - 5, 0);
            }
            

            
            //JAIMEE JARA - Menu opening and closing (Sun rising and setting) on user click
            
            c.mouseClicked(whenClicked);

            //JAIMEE JARA - placed animation in If-else statements to make the sun rise or
            //set every time the canvas is clicked

            if (sun === false)
            {
                textSize(30);
                textAlign(LEFT);
                textFont('Verdana');
                fill(255, 255, 255, dayFade);
                text('Day: ' + day, 40, 45);

                dayFade = min(dayFade + 1, 255);

                if (newDay === false)
                    {
                        day += 1;
                    }
            
                // reduce sunHeight by 2 until it reaches 140 
                if (sunHeight > 130) 
                {
                    sunHeight -= 2;
                    
                    // modify custom variables for sky color during sunrise
                
                    if (sunHeight < 480) 
                    {
                            redVal += 4;
                            greenVal += 1;
                    }

                }

                newDay = true;
            
            }

        //JAIMEE JARA - reversed the sunrise animation to create a sunset
        else
            {
                if (clickedOnce === true)
                {
                textSize(30);
                textAlign(LEFT);
                textFont('Verdana');
                fill(255, 255, 255);
                text('Day: ' + day, 40, 45);

                }

                

                if (sunHeight < 600) 
                    {
                        sunHeight += 2;
                        
                        //JAIMEE JARA - modify custom variables for sky color during sunset
                    
                        if (sunHeight >= 130) 
                        {
                                redVal = max(redVal - 4, 0); //prevents redVal from reaching negative values
                                greenVal = max(greenVal - 1, 0); //prevents greenVal from reaching negative values
                                //2 above lines ensure that sun rises to same colour each click
                        }
                    }
                    newDay = false;
            }

            }
//END

//JAIMEE JARA - toggles the sun boolean when clicked to begin rising or setting sun
function whenClicked()
{
    sun = !sun;
    //JAIMEE JARA - Trigger fade-out only on the first click
    if (!clickedOnce) {
        clickedOnce = true;
    }
}
            
            


