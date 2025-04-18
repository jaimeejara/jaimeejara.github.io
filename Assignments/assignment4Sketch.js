let cats = [];
let activeCatIndex = null;
let catActivatedTime = 0;
let catMessage = "";

function preload() {
  // Load images into the cats array
  const rawCats = [
    {
      name: "Shabby",
      thankYouMessage: "Yum! Now, what's for dessert...",
      bowl: "shabbyBowl.jpg",
      fullPic: "shabbyFull.gif"
    },
    {
      name: "Joy",
      thankYouMessage: "ARF ARF AR- i mean.. meow?",
      bowl: "joyBowl.jpg",
      fullPic: "joyFull.gif"
    },
    {
      name: "George",
      thankYouMessage: "That was fab.",
      bowl: "beatlesBowl.png",
      fullPic: "beatlesFull.gif"
    }
  ];

  for (let cat of rawCats) {
    cats.push
    ({
      name: cat.name,
      thankYouMessage: cat.thankYouMessage,
      bowlImg: loadImage(cat.bowl,
        img => console.log("Loaded:", cat.bowl),
        err => console.error("Failed to load:", cat.bowl)
      ),
      fullImg: loadImage(cat.fullPic,
        img => console.log("Loaded:", cat.fullPic),
        err => console.error("Failed to load:", cat.fullPic)
      ),
      isFull: false
    });
  }
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  fill(30)
}

function draw() 
{
  background(247, 243, 218);

  textSize(32);
  textAlign(CENTER);
  text("Click the bowls to feed the cats :)", width / 2, 100);

  let cols = 3;
  let rows = 2;
  let spacingX = 200;
  let spacingY = 200;
  let imgSize = 120;

  let totalWidth = (cols - 1) * spacingX;
  let totalHeight = (rows - 1) * spacingY;
  let startX = width / 2 - totalWidth / 2;
  let startY = height / 2 - totalHeight / 2 - 40;

  for (let i = 0; i < cats.length; i++) 
  {
    let col = i % cols;
    let row = Math.floor(i / cols);
    let x = startX + col * spacingX;
    let y = startY + row * spacingY;

    //Switch back after 10 seconds
    if (activeCatIndex === i && millis() - catActivatedTime > 10000) 
    {
      activeCatIndex = null;
      catMessage = "";
    }

    //Display either the bowl or the full pic
    if (activeCatIndex === i) 
      {
      image(cats[i].fullImg, x, y, imgSize, imgSize);
    } else {
      image(cats[i].bowlImg, x, y, imgSize, imgSize);
    }

    //cat names under each pic
    textSize(20);
    fill(30);
    text(cats[i].name, x, y + imgSize / 2 + 50);

    // click detection
    cats[i].x = x;
    cats[i].y = y;
    cats[i].size = imgSize;
  }

  //Draw message
  if (catMessage !== "") 
  {
    text(catMessage, width / 2, startY + rows * spacingY + 50);
  }
}

function mousePressed() 
{
  if (activeCatIndex !== null) 
  return; //Block clicks during animation

  for (let i = 0; i < cats.length; i++) 
  {
    let d = dist(mouseX, mouseY, cats[i].x, cats[i].y);//distance between mouse and cat pics

    if (d < cats[i].size / 2) 
    {
      activeCatIndex = i;
      catActivatedTime = millis();
      catMessage = `${cats[i].name} says: ${cats[i].thankYouMessage}`;
      break;
    }
  }
}

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}
