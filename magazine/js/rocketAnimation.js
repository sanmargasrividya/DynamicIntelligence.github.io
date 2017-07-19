var recketAnimateInterwel = null; 
	function rocketAnimation(){			
		
			//setTimeout(function(){	
				var resetLeft = ($( ".animation" ).width()- $( ".rocketboy" ).width()+($( ".animation" ).parent().width()*0.10)+"px");
				var resetRight = ($( ".animation" ).height()- $( ".rocketboy" ).height()-($( ".animation" ).parent().height() * 0.19)+"px");
				$( ".rocketboy" ).css({"left":resetLeft,
									"top":resetRight});	
				$( ".rocketboy" ).animate({ "left": "-=220px","top": "-=220px" }, {duration:2000});//"slow" );
			//},2500);
			
		recketAnimateInterwel =	setInterval(function(){
				var resetLeft = ($( ".animation" ).width()- $( ".rocketboy" ).width()+($( ".animation" ).parent().width()*0.10)+"px");
				var resetRight = ($( ".animation" ).height()- $( ".rocketboy" ).height()-($( ".animation" ).parent().height() * 0.19)+"px");
				$( ".rocketboy" ).css({"left":resetLeft,
									"top":resetRight});
				$( ".rocketboy" ).animate({ "left": "-=220px","top": "-=220px" }, {duration:2000});//"slow" );
			},3000);
	}
	function removeRocketAnimation(){
		if(recketAnimateInterwel!== null && recketAnimateInterwel!== undefined)
		clearInterval(recketAnimateInterwel);	
		//console.log(recketAnimateInterwel);	
	}