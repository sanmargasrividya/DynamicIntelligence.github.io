var brainAnimateInterwel = null; 
	function brainAnimation(){			
		/*//setTimeout(function(){	
				var resetLeft = (($( ".brainAnimation" ).parent().width()*0.50)+"px");
				var resetRight = (($( ".brainAnimation" ).parent().height() * 0.35)+"px");
				$( ".brain2" ).css({"left":resetLeft,
									"top":(resetRight)});	
				$( ".brain1" ).css({"left":resetLeft,
									"top":(resetRight)});	
				$( ".brain2" ).animate({ "left": "+=1px","top": "-=7px" }, {duration:500});//"slow" );
			//},2500);
			
		brainAnimateInterwel =	setInterval(function(){
				var resetLeft = (($( ".brainAnimation" ).parent().width()*0.50)+"px");
				var resetRight = (($( ".brainAnimation" ).parent().height() * 0.35)+"px");
			   $( ".brain2" ).css({"left":resetLeft,
									"top":resetRight});	
				$( ".brain1" ).css({"left":resetLeft,
									"top":resetRight});	
				$( ".brain2" ).animate({ "left": "+=1px","top": "-=7px" }, {duration:500});//"slow" );
			},1000);*/
	        
			var stepIncr =70;
			    $( "#brainDoumbles" ).css({"left":'0px',
									"top":'0px',"height":"100%"});
				$( "#brainHands" ).css({"left":'0px',
									"top":'0px',"height":"100%"});	
				$( "#brainBase" ).css({"left":'0px',
									"top":'0px',"height":"100%"});
					
				$( "#brainHands" ).animate({ "height": "+="+stepIncr+"px","top": "-="+(0.60*stepIncr)+"px" }, {duration:500});//"slow" );
				$( "#brainDoumbles" ).animate({ "top": "-="+(0.30*stepIncr)+"px" }, {duration:500});//"slow" );
			//},2500);
			
		brainAnimateInterwel = setInterval(function(){
				var stepIncr =70;
				console.log("setinterval");
			      $( "#brainDoumbles" ).css({"left":'0px',
									"top":'0px',"height":"100%"});
				$( "#brainHands" ).css({"left":'0px',
									"top":'0px',"height":"100%"});	
				$( "#brainBase" ).css({"left":'0px',
									"top":'0px',"height":"100%"});					
					
				$( "#brainHands" ).animate({ "height": "+="+stepIncr+"px","top": "-="+(0.60*stepIncr)+"px" }, {duration:500});//"slow" );
				$( "#brainDoumbles" ).animate({ "top": "-="+(0.30*stepIncr)+"px" }, {duration:500});//"slow" );
			},1000);
	}
	function removeBrainAnimation(){
		if(brainAnimateInterwel!== null && brainAnimateInterwel!== undefined)
		clearInterval(brainAnimateInterwel);	
		//console.log(brainAnimateInterwel);	
	}