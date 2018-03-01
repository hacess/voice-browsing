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
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript;
  slide_down(transcript);
};


$( document ).ready(function() {

  recognition.start();
});



function slide_down(transcript) 

  {

      	$( document ).ready(function() 
      	   {
              var offset = 20; //Offset of 20px
              var present=check_val(transcript);
            	var result = transcript.trim();
              if (present==1 )
                {
                    $('html, body').animate({
                        scrollTop: $("#"+result).offset().top + offset
                    }, 2000);
                    toastr.success(transcript);
                }
              else{
                toastr.error(transcript+' not found');
              }
                
          });
  }

function check_val(transcript)
{
  for (var i = 0; i < menu_list.length; i++) {
    if (String(menu_list[i])==transcript.trim()) {
      return 1 ;
    }
    
  }
  return 0;

}



  var menu_list=[];
/*fetch menu item attributes */
jQuery(document).ready(function() {  

    $( "ul#menu li" ).each(function( index ) {
    menu=$( this ).find('a').attr('nav');
    menu_list.push(menu);
});
   $('#myBtn').click(function(){
      recognition.stop();
   });
   $('#myBtn2').click(function(){
      recognition.start();
   });
    $('[data-toggle="tooltip"]').tooltip(); 
});

