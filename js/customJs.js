// start gnb animation
$(function() {
    $('.header').css({
            display: 'none'
        }).fadeIn(1500)
    })
// end gnb animation


// start scroll spy
var spot = [];
$(window).load(function() {

        var navHeight = $('.header').height()
        $('#fh5co-page section').each(function() {
            spot.push($(this).offset().top)
        })

        // start portfolio section clickEvent
        $('#filters li span').click(function() {
                var idx = $(this).parent().index();
                $('#filters li span').removeClass('animated pulse').eq(idx).css({
                    display: 'inline-block',
                    animationDuration: '300ms',
                }).addClass('animated pulse')
            })
            // end portfolio section clickEvent

        // start move window
        $('.nav ul a').click(function() {
                var idx = $(this).parent().index();
                $('.nav ul li.on').removeClass('on').children('a').css({color:'#464646'})
                $('.nav ul li ').eq(idx).addClass('on').children('a').css({
                  color:'rgb(29, 119, 8)'
                })
                $('.nav ul li a').removeClass('animated pulse').eq(idx).css({
                    display: 'inline-block',
                    animationDuration: '300ms',
                }).addClass('animated pulse')

                // end click animation

                $('html,body').animate({
                        scrollTop: spot[idx] - ($('.header').height() + 40)
                    })
                    // end move window

                return false
            })
            // end move window

    })
    // end scroll spy



// start set section height
$(function() {
        $('#fh5co-page section').css({
            height: $(window).height()
        })

    })
// end set section height


// start portfolio section event
$(function() {

    var filterList = {

        init: function() {

            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
                load: {
                    filter: '.all'
                }
            });

        }

    };

    // Run the show!
    filterList.init();

});


$(window).scroll(function(){


var sct = $(this).scrollTop()
$('.modalWrap .content').stop().animate({
    top:sct
},200)

    $('.portfolio-wrapper').click(function(){
        var idx =$(this).parent().index()
        //
        // function goPage() {
        //   var href = $(this).eq(idx).find('.infowrap a').text()
        //   location.href= href ;
        //   console.log(location.href)
        // }

        // var sectionPortfolioHeight = ($('#fh5co-portfolio-section').offset().top)

        $('header').fadeOut(500)
        // $('.modalWrap').css({paddingTop:sectionPortfolioHeight})

        $('.modalWrap').eq(idx).fadeIn(500)
        $('.portfolio').css({position:'inherit'})
        return false

    })
    // $('.icon-cancel-circle').click(function(){
    //     $('.modalWrap').fadeOut(500)
    //     $('header').fadeIn(500)
    //     return false
    // })
    $('.icon-cancel-circle').click(function(){
        $('.modalWrap').fadeOut(500)
        $('header').fadeIn(500)
        return false
    })
})




// end portfolio section event
