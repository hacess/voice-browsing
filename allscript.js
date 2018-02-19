try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}
recognition.continuous = true;
recognition.onresult = function(event) {

  // event is a SpeechRecognitionEvent object.
  // It holds all the lines we have captured so far. 
  // We only need the current one.
  var current = event.resultIndex;

  // Get a transcript of what was said.
  var transcript = event.results[current][0].transcript;
  slide_down(transcript);

  // Add the current transcript to the contents of our Note.
  // There is a weird bug on mobile, where everything is repeated twice.
  // There is no official solution so far so we have to handle an edge case.
  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

  if(!mobileRepeatBug) {
    noteContent += transcript;
    noteTextarea.val(noteContent);
  }
};

$( document ).ready(function() {

   /*if (noteContent.length) {
    noteContent += ' ';
  }*/
  recognition.start();
});
function slide_down(transcript) {

	$( document ).ready(function() 
	{
  	var offset = 20; //Offset of 20px
	console.log(transcript);
	    console.log( "ready1!" );
	var result = transcript.split(' ').join('')
    $('html, body').animate({
        scrollTop: $("#"+result).offset().top + offset
    }, 2000);

});
}