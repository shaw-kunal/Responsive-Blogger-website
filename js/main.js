$(document).ready(function(){
    const responsive ={
        
        0:
        {
            items:1
        },
        310:{
            items:1
        },
        460:{
            items:2
        },
        960:
        {
            items:3
        }
    }

    $nav = $('nav');
    $toggleCollapse =$('.toggle-collapse');
    // click event on toggle 
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');

    })

    // owl crousel for blog

    $('.owl-carousel').owlCarousel({
   loop:true,
   autoplay:true,
   autoplayTimeout:3000,
   dots:false,
   nav: true,
   navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
   responsive: responsive
    });

    // click to scroll up 
    $('.move_up span').click(function(){
        $('html,body').animate({scrollTop:0}, 2000);

    })
      
    // now make the owlcarousel responsive 



});