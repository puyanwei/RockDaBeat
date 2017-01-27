var song;
var button;
var amp;

function setup() {
   createCanvas(200, 200);
   song = loadSound("Juggler.mp3", loaded);
   amp = new p5.Amplitude();
   background(51);
}

function draw() {
   background(51);

   var vol = amp.getLevel();
   var diam = map(vol, 0, 0.13, 10, 100);
   print(vol);
   fill(255, 0, 255);
   ellipse(width / 2, height / 2, diam, diam);
}

function togglePlaying() {
   if (!song.isPlaying()) {
      song.play();
      song.setVolume(0.3);
      button.html("pause");
   } else {
      song.stop();
      button.html("play");
   }
}

function loaded() {
   console.log("loaded");
   button = createButton("play");
   button.mousePressed(togglePlaying);

}