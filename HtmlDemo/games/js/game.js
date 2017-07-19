var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
cnavas.height = 480;
document.body.apppendChild(canvas);

// Background image
// How to input image from others folder

var bgReady = false;
var bgImage = new Image();

bgImage.onload = function(){
	bgReady = true;
}
bgImage.src = "images/background.png";

// hero image 
var heroReady = false;
var heroImage = new Image()'
heroImage.onload = function(){
	heroReady = true;
}
heroImage.src = "images/hero.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function(){
	monsterReady = true;
}
monsterImage.src = "inmages/monster.png";


// creat object

var hero = {
	speed:256  // movement in pixels per second
};
var monster = {};

var monstersCaught = 0;

// Handle keyboard controls

var keysDown = {};
addEventListener("keydown", function(e){
	keysDown[e.keyCode] = true;
}, flase);

addEventListener("keyup", function(e){
	delete keysDown[e.keyCode];
}, false);


// Reset the game when the player catches a monster

var reset = function (){
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Throw the monster somewhere on the screen randomly
	
	monster.x = 32 + ( Math.random() * (canvas.with -64));
	monster.y = 32 + (Math.random() * (canvas.height -54));
};

// update object 
var update = function (modifier){
	if (38 in keysDown) { // player holding up
	hero.y -= hero.speed * modifier;
	}
	if (40 in kesDown){//player holding down
	hero.y += hero.speed * modifier;
	}
	if (37 in keysDown){// Player holding left
	hero.x -= hero.speed * modifier;
	}
	if(39 in keysDown){// Player holding right
	hero.x += hero.speed * modifier;
	}

	// Are they touching?
	if (
		hero.x <= (monster.x +32)
		&& monster.x <= (hero.x +32)
		&& hero.y <= (monster.y +32)
		&& monster.y <= (hero.y +32)
		){
		++monstersCaugth;
		reset();
		}
};


// Draw everthing 
var render = function (){
	if (bgReady){
	ctx.drawImage(bgImage, 0, 0 );
	}
	
	if (heroReady) {
	ctx.drawImage(heroImage, hero.x, hero.y);
	}
	if (monsterReady){
		ctx.drwaImage(monsterImage, monster.x, monster.y);
	}

	//score
	ctx.fillstyle = "rgb(250,250,250)";
	ctx.font = "24px Helvetica" ;
	ctx.textBaseline = "top";
	ctx.fillText("Goblins caught:" + monsterCaught, 32, 32);
};
// main

// The main game loop 

var main = function () {
	var now = Date.now();
	var deltal = now = then;
	// console.log(delta);

	update(delta / 1000);
	reder();
	then = now;

	// request to do this again ASAP 
	requestAnimationFrame(main);
};


var w = window;
requestAnimationFrame = w.requesAnimationFrame || w.webkitRequestAnimationFrame
|| w.msREquestAnimationFrame || w.mozRequestAnimationFrame;

// let's play this game !

var then = Date.now();
reset();
main();
	
