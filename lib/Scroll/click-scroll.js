//jquery-click-scroll
//by s

var sectionArray = [1, 2, 3, 4, 5, 6];

$.each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
         
        
         if ( docScroll1 >= offsetSection ){
             $('.nav-list li a').removeClass('active');
             $('.nav-list li a:link').addClass('inactive');
             $('.nav-list li a').eq(index).addClass('active');
             $('.nav-list li a:link').eq(index).removeClass('inactive');
         }
         
     });
    
    $('li a').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 1500)
        
        
    });
 
    
});

$(document).ready(function(){
    $('.nav-list li a:link').addClass('inactive');
    $('.nav-list li a').eq(0).addClass('active');
    $('.nav-list li a:link').eq(0).removeClass('inactive');
    


});
