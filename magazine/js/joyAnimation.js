var joyAnimateInterwel = null; 
	function joyAnimation(){			
		
			//setTimeout(function(){	
				var resetLeft = (($( ".joyAnimation" ).parent().width()*0.50)+"px");
				var resetRight = (($( ".joyAnimation" ).parent().height() * 0.59)+"px");
				$( ".brain1" ).css({"left":resetLeft,
									"top":(resetRight)});	
				$( ".joy" ).animate({ "top": "-=30px" }, {duration:1000});//"slow" );
			//},2500);
			
		joyAnimateInterwel =	setInterval(function(){
				var resetLeft = (($( ".joyAnimation" ).parent().width()*0.50)+"px");
				var resetRight = (($( ".joyAnimation" ).parent().height() * 0.59)+"px");
			   $( ".joy" ).css({"left":resetLeft,
									"top":resetRight});	
				$( ".joy" ).animate({ "top": "-=30px" }, {duration:1000});//"slow" );
			},1500);
	}
	function removeJoyAnimation(){
		if(joyAnimateInterwel!== null && joyAnimateInterwel!== undefined)
		clearInterval(joyAnimateInterwel);	
		//console.log(joyAnimateInterwel);	
	}