var paran=document.querySelectorAll('h5');
for(var i=0;i<paran.length;i++)
{
    var s="";var text=paran[i].innerText;
    for(var j=0;j<text.length;j++)
    {
       if(text[j]!='(' && text[j]!=')')
       {
          s=s+text[j];
       }
    }
    paran[i].innerText=s;
}
(function ($) {
    "use strict";
    
     // Contact us link -- scroll to footer
    
     document.querySelector(".contact").addEventListener("click", function(e){
        document.querySelector("#footer").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    })
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

   
})(jQuery);

