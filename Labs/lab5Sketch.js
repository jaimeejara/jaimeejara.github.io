var musicData;
var leftButton;
var rightButton;
var index = 0;
var listenLink;

function preload()
{
    musicData = loadJSON('music.json');
}

function setup() 
{
    createCanvas(windowWidth, windowHeight);
    console.log(musicData);

    albumCover = loadImage(musicData.albums[index].cover);
    
    leftButton = createButton('<==');
    rightButton = createButton('==>');

    textFont('Georgia');
    textSize(20);

    listenLink = createA(musicData.albums[index].link, 'Listen here!');
    listenLink.attribute('target', '_blank');
    listenLink.style('font-family', 'Georgia');
    listenLink.style('font-size', '20px');

    // Button actions
    leftButton.mousePressed(() => {
        index = (index - 1 + musicData.albums.length) % musicData.albums.length;
        albumCover = loadImage(musicData.albums[index].cover);
        albumCover = loadImage(musicData.albums[index].cover);
        listenLink.html('Listen here!');
        listenLink.attribute('href', musicData.albums[index].link);
    });

    rightButton.mousePressed(() => {
        index = (index + 1) % musicData.albums.length;
        albumCover = loadImage(musicData.albums[index].cover);
        listenLink.html('Listen here!');
        listenLink.attribute('href', musicData.albums[index].link);
    });

    positionButtons();
}
  
function draw() 
{
    background(247, 243, 218);
    fill(0);
    textSize(32);
    textAlign(CENTER);
    text("my fav albums", width / 2, 100);

    if (albumCover) 
    {
        let imgW = 300;
        let imgH = 300;
        image(albumCover, (width - imgW) / 2, (height - imgH) / 2, imgW, imgH);
    }
    
      // Album info
      fill(0);
      textSize(20);
      textAlign(CENTER);
      let album = musicData.albums[index];
      text(`${album.title} - ${album.artist} (${album.date})`, width / 2, height / 2 + 180);

      listenLink.position(width / 2 - listenLink.elt.offsetWidth / 2, height / 2 + 200);
}
  
function windowResized() 
{
    resizeCanvas(windowWidth, windowHeight);
    positionButtons();
    listenLink.position(width / 2 - listenLink.size().width / 2, height / 2 + 200);
}


function positionButtons() 
{
    let btnY = height / 2;
    let imgW = 300;
    let gap = 40;
  
    leftButton.position((width - imgW) / 2 - leftButton.width - gap, btnY);
    rightButton.position((width + imgW) / 2 + gap, btnY);
  }



//json will contain album art, album title,
//release year, artist name, and embedded youtube video playing the song