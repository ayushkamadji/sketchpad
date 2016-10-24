var sidepx = 16*30;
var height;
var $main=$('#main');

function divRow(i){
	var s="<div class=\"row r" + i + "\"></div>\n";
	return s;
}	

function divCol(j){	
	var s="<div class=\"column c" + j + "\"></div>\n";
	return s;
}

function drawGrid(size){
	var $row;
	height = (sidepx / size);//- 2;
	$("#sizing").text(size.toString() + " X " + size.toString());
	$main.css("width", (sidepx).toString() + "px");

	for(i=1;i<=size;i++){
		$main.append(divRow(i));	
		$row=$(".row.r"+ i.toString()); 
		$row.css("width","100%");
		for(j=1;j<=size;j++){
			$row.append(divCol(j));
		}
	}

	$("#main div.row").css("height", height.toString());
	$("#main div.column").css("height", height.toString());
	$("#main div.column").css("width", height.toString());
}

function removeGrid(){
	$main.empty();	
}

function reDraw(){
	removeGrid();
	var newsize = prompt("New size = ?", 16);
	drawGrid(newsize);
	funcSwitcher(2);
}

function trailer(){
	$(".column").mouseenter(function(){
		$(this).addClass("selected");
	});

	$(".column").mouseleave(function(){
		$(this).removeClass("selected");
	});

}

function randColor(){
	return ("#" + Math.round(Math.random()*0xffffff,0).toString(16));
}

function rainbow(){
	$(".column").mouseenter(function(){
		$(this).css("background",randColor());
	});

	$(".column").mouseleave(function(){
		$(this).css("background","#d2d2d2");
	});
}

function funcSwitcher(i){
	switch(i){
	case 1:
		trailer();
		break;
	case 2:
		rainbow();
		break;
	}
}

$(document).ready(function(){
	drawGrid(16);
	funcSwitcher(2);
});
