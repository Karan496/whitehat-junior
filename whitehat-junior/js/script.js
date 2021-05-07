


$(window).on('load', function() {
                $('#loading').fadeOut();
                $('#Load').delay(0).fadeOut('"slow"');
                $('body').delay(0).css({
                    'overflow': 'visible'
                });
})


        
        

        $(window).scroll(function() {
                    if ($(this).scrollTop() > 100) {
                        $('#scroll').fadeIn();
                    } else {
                        $('#scroll').fadeOut();
                    }
                });
                $('#scroll').click(function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);
                    return false;
                });