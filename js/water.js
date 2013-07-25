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


        $('#pcup').click(function() {
        audioElement.play();
        });

        
        $('.pause').click(function() {
        audioElement.pause();
        });











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
	var currStream = "#clearStream1";

		
	$("#fillCup").mousedown(function() {
		console.log(currStream);
		drinkSound.play();
		$(currStream).css("top", "-30px");
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
	


/* Go Back Button */
	
	$("#fillCup").mousedown(function(e){
		e.preventDefault();
		$(".backSign").show(100).delay(900).animate(
                { top: "-50px" }, {
                    duration: '.2s',
                    easing: 'easeOutElastic'
                });
              	});
	
	
$(".goBack").click(function(){
	window.location = "../../drinkSelection/index.html";
	});

/* Arrow Animation */


setTimeout(function() {  
		        $("#threeArrow").everyTime(1000, function(){    
		                 $("#threeArrow").delay(3500).animate({height:"56px", top:"0px", left:"45px"}, 400).animate({height:"59px", top:"10px", left:"43px"}, 200).delay(500).animate({height:"56px", top:"0px", left:"45px"}, 300).animate({height:"59px", top:"10px", left:"43px"}, 200);
		          });  
		          
		         $("#fiveArrow").everyTime(1000, function(){    
		                 $("#fiveArrow").delay(3500).animate({width:"140px", left:"610px"}, 400).animate({width:"147px", left:"620px"}, 200).delay(500).animate({width:"140px", left: "610px"}, 400).animate({width:"147px", left:"620px"}, 200);
		          });  
		          
		          $("#twoArrow").everyTime(1000, function(){    
		                 $("#twoArrow").delay(3500).animate({width:"155px", right:"265px"}, 400).animate({width:"163px", right:"255px"}, 200).delay(500).animate({width:"155px", right:"265px"}, 400).animate({width:"163px", right:"255px"}, 200);
		          });   
		          
		          $("#oneArrow").everyTime(1000, function(){    
		                 $("#oneArrow").delay(3500).animate({width:"221px", left:"215px"}, 400).animate({width:"231px", left:"200px"}, 200).delay(500).animate({width:"221px", left:"215px"}, 400).animate({width:"231px", left:"200px"}, 200);
		          });   
		                      
		}, 500);





}); 