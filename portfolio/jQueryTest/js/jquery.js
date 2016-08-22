// A hover menu start

$(function(){
    $('nav a').hover(function(){
        $(this).css({color:'#FFF'}).stop().animate({left:'10px'},200).parent().css({
            background:'#000'
        })
    },function(){
            $(this).parent().css({background:'#CCC'}).children('a').css({color:'#000'}).stop().animate({left:'0'},200)
    })
})

// A hover menu end




// B scrollmove menu start
var spot = [];
$(window).load(function(){
    $('.content section').each(function(){
        spot.push($(this).offset().top)
    })
    // console.log(spot)
    $('nav a').click(function(){

        var idx = $(this).parent().index();
        // console.log(idx)
        $('html,body').animate({
            scrollTop:spot[idx]
        })
        return false
    })
})

// B scrollmove menu end



// C slidebanner start

$(function(){

    idx = Math.floor(Math.random()*$('.slidebanner li').size())
    $('.slidebanner li').eq(idx).addClass('on').children('img').css({
        display:'block'
    })
    var silidewidth = $('.slidebanner').width()

    // console.log(idx)
    $('.next').click(function(){
        $('.slidebanner li').eq(idx).removeClass('on').children('img').stop().animate({
            left:-silidewidth
        }).parent().next().addClass('on').children('img').css({
            display:'block',
            left:silidewidth
        }).stop().animate({
            left:0
        })

        idx++
        // console.log(idx)

        if(idx == $('.slidebanner li').length){
            idx= 0
            $('.slidebanner li').eq(idx).addClass('on').children('img').css({
                display:'block',
                left:silidewidth
            }).stop().animate({
                left:0
            })
        }

    })

    $('.prev').click(function(){
        $('.slidebanner li').eq(idx).removeClass('on').children('img').stop().animate({
            left:silidewidth
        }).parent().prev().addClass('on').children('img').css({
            display:'block',
            left:-silidewidth
        }).animate({
            left:0
        })
        idx--

        if(idx < 0){
            idx = $('.slidebanner li').size()-1
            $('.slidebanner li').eq(idx).addClass('on').children('img').css({
                display:'block',
                left:-silidewidth
            }).animate({
                left:0
            })
        }
    })


    var loof =setInterval(function(){
        $('.next').click()
    },4500)

    $('.slidebanner').mouseenter(function(){
        clearInterval(loof)
    }).mouseleave(function(){
        loof =setInterval(function(){
            $('.next').click()
        },4500)
    })

    $('.slidebanner li a').click(function(){
        idx =$(this).parent().index()
        var his =$('.slidebanner li.on').index()
        // console.log(idx)
        // console.log(his)

        if(idx > his){
            $('.slidebanner li.on').removeClass('on').children('img').animate({
                left:-silidewidth
            })
            $('.slidebanner li').eq(idx).addClass('on').children('img').css({
                display:'block',
                left:silidewidth
            }).stop().animate({
                left:0
            })
        }else if (idx < his){
            $('.slidebanner li.on').removeClass('on').children('img').animate({
                left:silidewidth
            })
            $('.slidebanner li').eq(idx).addClass('on').children('img').css({
                display:'block',
                left:-silidewidth
            }).stop().animate({
                left:0
            })
        }


        return false

    })


})

// C slidebanner end



// D fadebanner start

$(function(){

    fadeIdx = 0
    fadebannerWidth = $('.fadebanner').width()
    $('.fadebanner li').eq(fadeIdx).addClass('on')

    var fadeLoof = setInterval(function(){
        $('.fadebanner li').eq(fadeIdx).removeClass('on').children('img')
        .fadeOut(1300)
        .parent().next().addClass('on').children('img').fadeIn(1300)

        fadeIdx++

        if(fadeIdx == $('.fadebanner li').size()){
            fadeIdx = 0
            $('.fadebanner li').eq(fadeIdx).addClass('on').children('img')
            .fadeIn(1300)
        }
    },4800)

    $('.fadebanner').mouseenter(function(){
        clearInterval(fadeLoof)
    }).mouseleave(function(){
        fadeLoof = setInterval(function(){
            $('.fadebanner li').eq(fadeIdx).removeClass('on').children('img')
            .fadeOut(1300)
            .parent().next().addClass('on').children('img').fadeIn(1300)

            fadeIdx++

            if(fadeIdx == $('.fadebanner li').size()){
                fadeIdx = 0
                $('.fadebanner li').eq(fadeIdx).addClass('on').children('img')
                .fadeIn(1300)
            }
        },4800)
    })
    
    $('.fadebanner ul li a').click(function(){
        var idx = $(this).parent().index()
        
        
        $('.fadebanner ul li.on').removeClass('on').children('img').fadeOut(1300)
        $('.fadebanner ul li').eq(idx).addClass('on').children('img').fadeIn(1300)
        
    })



})


// D fadebanner end



// E sns move list gellay start

$(function(){
    var snsIdx = 0
    $('.movie-view ul li').eq(snsIdx).addClass('on')
    
    
    $('.movie-view ul li a').click(function(){

        var url =$(this).attr('href');
        var location = 'https://www.youtube.com/embed/'+url+'?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen'
        $('.view iframe').attr('src',location);
        
        $(this).parent().addClass('on').siblings().removeClass('on')

        return false
    })
    
})

// E sns move list gellay  end



// F wing banner start

    $(window).scroll(function(){
        var sct = $(this).scrollTop()
        $('.wing').stop().animate({
            top:sct
        },600)
    })

// F wing banner end



// G layout popup start

 $(function(){

    $('.btngroup button').click(function(){
        var idx = $(this).index()
        
        var bl_Tag = "";
        bl_Tag += '<div class="blind">';
        bl_Tag += '</div>';
        $('body').append(bl_Tag);
        $('.blind').fadeTo(1000,0.5);
        $('.popup').css({
            top:'25%',
            left:'50%',
            marginLeft:-($('.popup li').eq(idx).width()/2),
        })
        $('.popup li').append('<button class="closeBtn">닫기</button>')

        $('.popup li').eq(idx).slideDown(1000)
        
        $('.closeBtn').click(function(){
            $('.popup li').eq(idx).slideUp(1000);
            $('.blind').fadeOut(1000,function(){
                $(this).remove()
            })
        })    
    })
 })

// G layout popup end
