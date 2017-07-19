var bulbAnimationInterwel = null; 
	function bulbAnimation(){
		$('#light-bulb1').css({'opacity': '1'});
		$('#light-bulb2').css({'opacity': '0'});	
		bulbAnimationInterwel = setInterval(function(){
			var opacityVal = $('#light-bulb2').css('opacity');
			if(opacityVal == "1"){ 
				 $('#light-bulb2').css({'opacity': '0'});
			 	$('#light-bulb1').css({'opacity': '1'});}
			else {
				 $('#light-bulb2').css({'opacity': '1'});
				 $('#light-bulb1').css({'opacity': '0'});}			
			},500);
	}
	function removeBulbAnimation(){
		if(bulbAnimationInterwel!== null && bulbAnimationInterwel!== undefined)
		clearInterval(bulbAnimationInterwel);	
		//console.log(bulbAnimationInterwel);	
	}