$(document).ready(function(){

function perfectfriendfadeout(){
	$("#lookingfor").animate({opacity: '0'});
	$("#perfectfriend").animate({opacity: '0'});
}

function textswap(){
	$("#lookingfor").css("display","none");
	$("#perfectfriend").css("display","none");
	$("#youvecometo").css("display","block");
	$("#rightplace").css("display","block");
}

function rightplacefadein(){
	$("#youvecometo").animate({opacity: '1'});
	$("#rightplace").animate({opacity: '1'});
	sexy.play();
	$("#sexy").bind("timeupdate", function() {
    	var currentTime = parseInt(this.currentTime, 10);
    	if(currentTime == 7) { 
        	setTimeout(startscreen,350);
        	$(this).unbind("timeupdate");
    	};
	});
	sexy.addEventListener('ended', function() {
   		exhortation();
		}, false);
}

function startscreen(){
	$("#screen1").css("display","none");
	$("#screen2").css("display","block");
	carousel();
}

function exhortation(){
	$("#screen2").css("display","none");
	$("#screen3").css("display","block");
	scream.play();
}

setTimeout(perfectfriendfadeout,5000);
setTimeout(textswap,5500);
setTimeout(rightplacefadein,5500);

});





