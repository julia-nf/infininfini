function setup() {
	createCanvas(630, 360);
	number_of_points = 250;
	points = [];
	for(var i=0; i<number_of_points; i++){
		points.push(new Point(i));
	}
}

function draw() {
	background(235, 235, 235);
	speed = 0.01;
	for(var i=0; i<number_of_points; i++){
		points[i].update(speed);
		points[i].display();
		speed += 0.0004;
	}
	if (mouseIsPressed) {
		for(var i=0; i<number_of_points; i++){
			points[i].a += 0.5;
	}}
	else {
		if (points[0].a > 1) {
			for(var i=0; i<number_of_points; i++){ 
				points[i].a -= 0.1; 
			}
		}
	}
}

function Point(a) {
	this.position = createVector(width/2, height/2 + 6);
	this.t = 0;
	this.a = a;

	this.update = function(speed) {
		this.t += speed;
		this.position.x = width/2 + this.a * Math.cos(this.t) / (1 + Math.pow(Math.sin(this.t), 2));
		this.position.y = height/2 - this.a * Math.sin(this.t) * Math.cos(this.t) / (1 + Math.pow(Math.sin(this.t), 2)) ;
	};


	this.display = function() {
		fill(210, 24, 134);
		ellipse(this.position.x, this.position.y, 2, 2);
	};
}