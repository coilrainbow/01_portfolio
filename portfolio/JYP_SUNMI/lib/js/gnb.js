 $(function() {

     //start navFn
     $(window).resize(function() {
             if ($('body').width() > 767) {
                 $('.nav >a:first').css({
                     display: 'none'
                 });
                 $('.gnbList').css({
                     display: 'block'
                 })

             } else if ($('body').width() < 767) {
                 $('.nav >a:first').css({
                     display: 'block'
                 });
                 $('.nav .gnbList').css({
                     display: 'none'
                 });
                 $('.openMenu').text('Main Menu')
             }

         })
         //end navFn



     // start nav click event
     $('.nav > a').click(function() {
         $('.nav ul').toggle();
         $('.openMenu').text(function(i, v) {
             return v === 'Main Menu' ? 'Close Menu' : 'Main Menu'
                 // v가 MM이라는 조건이? true면 CM false면 MM
         });
     });
     // start nav click event
 })
