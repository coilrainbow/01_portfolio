$(function() {

    // start hoverEvent
    $('nav li a').hover(function() {
            $(this).css({
                color: '#6789a9',
                textDecoration: 'none'
            })
        }, function() {
            $(this).css({
                color: '#777',
                textDecoration: 'none'
            })
        })
        // end hoverEvent



    // start navBtn toggleEvent
    $('.navbar-toggle').click(function() {
        $('.collspan.navbar-collapse').slideToggle(400)
    })

    $(window).resize(function() {
        if ($('body').width() > 767) {
            $('.collspan.navbar-collapse').css({
                display: 'block'
            })
        } else if ($('body').width() < 767 || $('.collspan.navbar-collapse').css({
                display: 'none'
            })) {
            $('.collspan.navbar-collapse').css({
                display: 'block'
            })
        }
    })
    $(window).trigger('resize')

    // end navBtn toggleEvent

    //start classOn
    var idx = 0
    $('.collspan.navbar-collapse >ul li').eq(idx).addClass('on').children('a').css({
            color: '#6789a9'
        })
        //end classOn





})
