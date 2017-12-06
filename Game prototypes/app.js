var canvas = null;
var context = null;
var frameRate = 1000/30;
var frame = 0;
var assets = [];
var frames = [];

var onImageLoad = (){
    console.log('image');
};

var setup = function() {
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    for (var i = 0; i < assets.length; i++) {
        frames.push(new Image());
        frames[i].onload = onImageLoad;
        frames[i].src = assets[i];
    }
    setInterval(animate, frameRate);
    
};

var animate() = {
    context.clearRect(0, 0, canvas.width, canvas.width);
    context.drawImage(frames[frame], 192, 192);
    frame = (frame + 1) % frames.length;
};

setup();