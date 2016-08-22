 $(function(){

    $('.nav').click(function(){
        // $('.nav > a').text('Close Menu')
        $('.nav ul').toggle(0,function(){
            $('.nav > a').text('Close Menu')    
        })
        /*$('.nav ul').slideDown(500,function(){
            $('.nav > a').text('Close Menu')    
        })*/
        
        return false
    })

    
    if($('body').width() >= 768){
        $('.nav').off()
    }
    
    
})