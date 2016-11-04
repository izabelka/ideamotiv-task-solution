$(document).ready(function(){
    var light = 0;
    var dark = 0;
    $( "input[type=checkbox]" ).on( "click", function() {
      var side = $(this).attr("value");
      if ($(this).is(':checked')) {
        if (side === "light_side") {
          light += 1;
        }
        else {
          dark += 1;
        }
      }
      else {
        if (side === "light_side") {
          light -= 1;
        }
        else {
          dark -=1;
        }
      }
    });
     
    $("label").empty();
    $("label").hover(function(){
          var sentence = $(this).attr("data-sentence");
          $(this).append( "<div>" + sentence + "</div>" );
        },
          function(){
            $(this).empty();
        });
                
     $("form").submit(function(e){
       if (light === 0 && dark != 0) {
         e.preventDefault();
         var audio = {};
         audio["walk"] = new Audio();
         audio["walk"].src = "../zadanie/imperial_march.mp3"
         audio["walk"].play();
       }
      });
});