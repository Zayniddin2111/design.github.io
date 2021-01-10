$(document).ready(function(){
    $(".button a").click(function(){
        $(".overlay").fadeToggle( "slow" );
    });
});

$(document).ready(function(){
    $("#close").click(function(){
        $(".overlay").fadeToggle( "slow" );
    });
});

$(document).ready(function(){
    $("#opacity").click(function(){
        $(".overlay").hide(300);
    });
});

$(document).ready(function(){
    $(".button a").click(function(){
        $("#opacity").fadeToggle(800);
    });
});


$(document).ready(function(){
    $("#close").click(function(){
        $("#opacity").fadeToggle(300);
    });
});

$(document).ready(function(){
    $("#opacity").click(function(){
        $("#opacity").fadeToggle(300);
    });
});


(function($) {
	function mediaSize() { 

		if (window.matchMedia('(max-width: 768px)').matches) {

			
			$(document).ready(function(){
				  $('.button a').click(function(){
				    $('body').css("transform","translate(-110px)");
				    
				  });
				});

			$(document).ready(function(){
				  $('.overlay').active(function(){
				    $('body').css("transform","translate(-110px)");
				  });
				});

			$(document).ready(function(){
			  $('#close').click(function(){
			    $('body').css("transform","translate(0)");
			  });
			});

			$(document).ready(function(){
			  $('.button a').click(function(){
			    $('.overlay').css("transform","translate(0)");
			  });
			});

			$(document).ready(function(){
			  $('#opacity').click(function(){
			   $('body').css("transform","translate(0)");
			  });
			});
			} 
		else {
			$(document).ready(function(){
			  $('.button a').click(function(){
			    $('body').css("transform","translate(0)");
			  });
			});
			    $('body').css("transform","translate(0)");
			 	$("#opacity").hide(300);
			};
	};
  mediaSize();
	window.addEventListener('resize', mediaSize, false);  
})(jQuery);


//carousel
$(document).ready(function(){
		  $(".owl-carousel").owlCarousel({
		  	loop:true,
		  	dots:false,
    		smartSpeed: 1000,
		    items:1,
		    autoplay:true,
		  });
		});

//video
$(document).ready(function(){
    $(".play").click(function(){
        $("#videoPlay").fadeToggle("slow");
    });
});
$(document).ready(function(){
    $(".video").click(function(){
        $("#videoPlay").fadeToggle("slow");
    });
});

//AnimatedOnScroll
$(document).ready(function(){
 AOS.init({
      offset: false,
      duration: 1000,
      easing: 'ease-in-out',
      delay: false,
      once: true
    });
 });
//Id_scroll
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      	}, 800, function(){
        	window.location.hash = hash;
      		});
    	}
    });
});
//boshSahifaga_Button
$(document).ready(function(){
var btn = $('#button');
	$(window).scroll(function() {
	  if ($(window).scrollTop() > 800) {
	    btn.addClass('show');
	  } else {
	    btn.removeClass('show');
	  }
	});
	btn.on('click', function(e) {
	  e.preventDefault();
	  $('html, body').animate({scrollTop:0}, '800');
	});
});