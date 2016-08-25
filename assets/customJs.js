$(window).resize(function() {

    var winHeight = $(window).height()

    $('#home').css({
            height: winHeight
        })
        // END set firstSection height

    $('#home .container').parent().css({
        marginTop: winHeight / 2,
    })

    if ($(window).width() <= 900) {
        $('#home .container').parent().css({
            marginTop: winHeight / 2.1,
        })
    }
    //END intro word position



    var videoHeight = $('.grid figure').width()
    $('.grid figure').css({
            height: videoHeight
        }).children('img').css({
            height: videoHeight
        })
        // changing figure's width and height

})
$(window).trigger('resize')



// start videoControll
$('.videoPlay .captionOff').click(function() {
        $('.videoPlay').append('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/oM1_kZojPi4?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')
        $('.videoPlay figcaption').fadeOut(1500)
        $('.videoPlay img').fadeOut(1500)

    })
    //creating iframe and effect

$('.videoPlay a.close').click(function() {
        $('.videoPlay img').fadeIn(1000)
        $('.videoPlay figcaption').fadeIn(1000, function() {
            $('.videoPlay iframe').remove()
        })
    })
    //remove iframe and effect
    // end videoControll



$('#works a.goPassEvent').click(function() {
    return false
})
//  galleryPlugin effect OFF
