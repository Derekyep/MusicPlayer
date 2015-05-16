$( document ).ready(function() {
	//This will play and stop the audio
	$('.spinner-wrap').click(function() {
		
		var $this = $(this);
			audio = $this.siblings('audio')[0];
			//This will get the beats per minute
			bpm = $this.siblings('audio').data('bpm');
			//This will take the bpm and transform it to milliseconds
			pulse = (60/bpm)*1000;
		
		if (audio.paused === false) {
			audio.pause();
			audio.currentTime = 0;
			$this.removeClass('playing');
			clearInterval(intervals);
		}
		else {
		audio.play();
		$this.addClass('playing');
		//start pulsing 		
		pulsing();
		intervals = setInterval(function() {pulsing()}, pulse);
		}
		
		
		function pulsing() {
			
			$this.addClass('pulse');
			
			setTimeout(function() {
				$this.removeClass('pulse');
				
				
			}, pulse-100);
		}
	
	
	});
    
    
 

});