$(function(){
	var h = $("#canvas").height();
	var w = $("#canvas").width();
	if(h == 9) location.reload(false);
	console.log("window dims: width: " + w + " height: " + h);
	var c = document.getElementById("canvas");
	canvas.width  = w;
	canvas.height = h;
	var ctx = c.getContext("2d");

	ctx.fillStyle = "#CCCCCC";
	for(var i = 0; i < 16; i++){
		ctx.fillRect(Math.round(w/16 * i), 0, 1, h);
	}
	for(var i = 0; i < 9; i++){
		ctx.fillRect(0, Math.round(h/9 * i), w, 1);
	}

	var block = [[]];
	for(var i = 0; i < 16; i++){
		for(var j = 0; j < 9; j++){
			block[i, j] = {
				ocuppied : 0,
				x : Math.round(w/16 * i),
				y : Math.round(h/9  * j),
				w : Math.round(w/16),
				h : Math.round(h/9),
				draw : function(color){
					ctx.fillStyle = color;
					ctx.fillRect(this.x+1, this.y+1, this.w-1, this.h-1);
				}
			};
			console.log("[" + i + ", " + j + "]: x: " + block[i,j].x);
		}
	}

	for(var i = 0; i < 16; i++)
		for(var j = 0; j < 9; j++)
			console.log("Block[" + i +", " + j + "] x: " + block[i,j].x + ", y: " + block[i,j].y);
});
