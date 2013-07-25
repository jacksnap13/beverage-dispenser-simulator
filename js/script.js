$(function(){


/* Import Audio for Ice and Drink */

        var audioElement = document.createElement('audio');
        var drinkSound = document.createElement("audio");
        var ahhSound = document.createElement("audio");
        audioElement.setAttribute('src', '../sounds/iceShort.wav');
        drinkSound.setAttribute("src", "../../sounds/drink.wav");
        ahhSound.setAttribute("src", "../../sounds/ahh.wav");
        //audioElement.load()
        $.get();
        audioElement.addEventListener("load", function() {
        audioElement.play();
        }, true);

        drinkSound.addEventListener("load", function() {
        drinkSound.play();
        }, true);
        
        ahhSound.addEventListener("load", function() {
        ahhSound.play();
        }, true);




        
        $('.pause').click(function() {
        audioElement.pause();
        });








/* Flavor Selection Pan Down and Set Stream Color */

var backCounter;

$(".flavorButton").click(function(e){
	e.preventDefault();
	var streamColor = $(this).attr("data-type");
	backCounter = 1;
	$(".wrap").css(
		{"background-position": "25px -400px",
			"background-size": "970px"
		});
	$(".selectionScreen").css("display", "none");
	$(".dispenser").animate({
		"top": "0px"
	}, 700);
	$("#fiveDir").delay(600).fadeIn(1000);
	$("#fillCup").delay(700).fadeIn(300);


/* Local Storage and Fill */

	var flavor = "";
	var fillAmount = 298;
	
	if(localStorage.getItem("cfsFillAmount")) {
		fillAmount = parseFloat(localStorage.getItem("cfsFillAmount"));
	} else {
		fillAmount = 298;
	}
	
	$(".cupFill").css("clip", "rect("+fillAmount+"px 175px 298px 0px)");

		
	
/* Push Button to Fill Cup */

	
	var count;
	var currStream = "#"+streamColor+"Stream1";

		
	$("#fillCup").mousedown(function() {
		$(".d").css("display", "none");
		drinkSound.play();
		$(currStream).css({
			"top": "-30px",
			"display": "block"
			});
		count = setInterval(performWhileMouseDown, 20);
		}).mouseup(function() {
		clearInterval(count); 
		$(currStream).css("top", "-398px");
		drinkSound.pause();	 
	});
	
	function performWhileMouseDown() {
	   if (fillAmount >= 40) { $(".cupFill").css("clip", "rect("+fillAmount+"px 175px 298px 0px)");
	    fillAmount--;
                
                localStorage.setItem("cfsFillAmount", fillAmount);
                }
                
                else {
                	fillAmount=null;
                	drinkSound.pause();
                	ahhSound.play();
                	localStorage.clear();
                	clearInterval(count);
					$("#cup").animate({width: "2124px", top: "-1300px", left: "-800px", "-webkit-filter": "blur(20px)"}, 1600);
					$("#cupUnder").animate({width: "2124px", top: "-1300px", left: "-800px", "-webkit-filter": "blur(20px)"}, 400);
					$(".disappear").css("display", "none");
					setTimeout(function() {window.location = "../../ready/index.html";}, 1600);	
					}

	} /* End performWhileMouseDown */
	

	
	}); /* End Flavorbutton click */
	
			$(".goBack").click(function(e){
				e.preventDefault();
				$(".backSign").hide(100).animate(
		                { top: "-275px" }, {
		                    duration: 'slow',
		                    easing: 'easeOutElastic'
		                });
				$(".wrap").css(
				{"background-position": "-307px top",
					"background-size": "1600px"
				});
			$(".selectionScreen").delay(400).fadeIn(200);
			$(".dispenser").animate({
				"top": "640px"
			}, 400);
			$("#fillCup").css("display", "none");
			});





/* Go Back Button */
	
	$("#fillCup").mousedown(function(e){
		e.preventDefault();
		if(backCounter==1){
		$(".backSign").show(100).delay(900).animate(
                { top: "-50px" }, {
                    duration: '.2s',
                    easing: 'easeOutElastic'
                });
                backCounter ++;
            };
	});
	
	


/* Arrow Animation */


setTimeout(function() {  
		        $("#threeArrow").everyTime(1000, function(){    
		                 $("#threeArrow").delay(3500).animate({height:"62px", top:"0px", left:"45px"}, 400).animate({height:"59px", top:"10px", left:"43px"}, 200).delay(500).animate({height:"56px", top:"0px", left:"45px"}, 300).animate({height:"59px", top:"10px", left:"43px"}, 200);
		          });  
		          
		         $("#fiveArrow").everyTime(1000, function(){    
		                 $("#fiveArrow").delay(3500).animate({width:"140px", left:"610px"}, 400).animate({width:"147px", left:"620px"}, 200).delay(500).animate({width:"140px", left: "610px"}, 400).animate({width:"147px", left:"620px"}, 200);
		          });  
		          
		          $("#twoArrow").everyTime(1000, function(){    
		                 $("#twoArrow").delay(3500).animate({width:"155px", right:"265px"}, 400).animate({width:"163px", right:"255px"}, 200).delay(500).animate({width:"155px", right:"265px"}, 400).animate({width:"163px", right:"255px"}, 200);
		          });   
		          
		          $("#oneArrow").everyTime(1000, function(){    
		                 $("#oneArrow").delay(3500).animate({width:"200px", left:"255px"}, 400).animate({width:"212px", left:"240px"}, 200).delay(500).animate({width:"200px", left:"255px"}, 400).animate({width:"212px", left:"240px"}, 200);
		          });   
		                      
		}, 500);







  
/* Ready End Page*/

$(".readySign").delay(400).animate(
                { top: "0px" }, {
                    duration: 'slow',
                    easing: 'easeOutElastic'
                });







/* Put Ice in your Cup */

var clickNum = 0;

$("#pcup").click(function(e){
	e.preventDefault();
	audioElement.play();
	$(this).scale(".98");
	$("#pcupUnder").scale(".98");
	$(".cube").animate({top:+270+"px", rotate: '780deg'}, 700);
	$(".cubeX").delay(200).animate({top:+260+"px", rotate: '860deg'}, 1000);
	$(".cubeN").animate({top:+240+"px", rotate: '950deg'}, 700);
	$(".cubeO").delay(200).animate({top:+230+"px", rotate: '840deg'}, 600);
	$(".cubeA").animate({top:+220+"px", rotate: '780deg'}, 700);
	$(".cubeB").delay(200).animate({top:+210+"px", rotate: '908deg'}, 600);
	setTimeout(function() {
		$(".pushforice").css("background-position","-307px top").css("background-size", "1600px"),
		$(".position").css("top", "724px").scale(1.2);
		$(".choose").scale(".50").animate({scale: "1", top: "-5px"}, 1000);
		$("#threeDir").delay(1000).show("drop", { direction: "left" }, 500);
		}, 1000);
/* 	setTimeout(function() {window.location = "../drinkSelection/index.html";}, 1700); */
	setTimeout(function() {$("#pcup").scale("1"), $("#pcupUnder").scale("1");}, 400);
});


$(".endTransition").animate({opacity: "0"},600);
setTimeout(function() {$(".endTransition").css("display", "none");}, 1200);




}); 