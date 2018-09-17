/* Leandro Zambelli
*/

$(document).ready(function(){
            
    // Loading screen animation and duration
    function showPage() {
        $('.loading').animate({
            width: 0
        }, 500 );
    }
    
    setTimeout(function(){ showPage(); }, 500);
    
    // Loading screen on click 
    $('nav a, .js-btn-load').click(function(e){ 
        
        e.preventDefault();
        
        var url = $(this).attr('href');
        
        // Loading animation and transition
        $('.loading').animate({
            width: '100%',
        }, {
                queue: true,
                duration: 300,
                complete: function(){
                    setTimeout(function(){
                        window.location.href = url;
                    }, 500);
                }
            }
        );
    });
    
    /* Css
    */
    
    // setting css through js in case js is disabled
    $('.js-img-page').css('position', 'relative');
    $('.js-img-page').css('right', '-500px');
    $('.js-img-page').css('opacity', '0');

    $('.biker').css('right', '-100%');

    
    /*Animations
    */
    
    // right side img animation on index and services page
    $('.js-img-page').animate({
        opacity: 1,
        right: "0"
    }, 1400 );
    
    // animated biker on contact page
    $('.biker').animate({
        opacity: 1,
        right: "0"
    }, 1400 );



});