$( document ).ready(function() {
  window.scrollTo(0, 0);
});


/* Click h3 to Toggle the associated Section 
    was using slideToggle
*/
$("h3").click(function() {
    $(this).next().toggle(400, function() {          
        $.scrollTo($(this).prev().position().top - 50, 400, {
            axis: 'y'
        });
    });
});


$(window).scroll(function(e) {
    var scrolled = $(window).scrollTop();
    if(scrolled < 150 ){  //stop parallax when not in view- (efficiency) 
        parallax();
    }
});

// For every pixel the user scrolls the screen, the background image only 
//scrolls half .5 as many (or whatever setting you want)
//It also shrinks, blurs and fades.
function parallax() {

    var el = document.getElementById('tagline');
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var taglineSize = parseFloat(style); 
    /*       
        Now you have a proper float for the font size
        el.style.fontSize = (fontSize + 1) + 'px';
    */

    var scrolled = $(window).scrollTop();

    $('.bg').css('top', -(scrolled * 0.3) + 'px');
    $('.bg').css('background-size', (100 - scrolled/5) + '% auto');
    $('.bg').css('opacity', 1.4-(scrolled*0.01));
    $('.bg').css('filter', 'blur(' + scrolled/20 + 'px)');
    $('.bg').css('-webkit-filter', 'blur(' + scrolled/20 + 'px)');
    $('.bg').css('-moz-filter', 'blur(' + scrolled/20 + 'px)');
    $('.bg').css('-ms-filter', 'blur(' + scrolled/20 + 'px)');
    $('.bg').css('-o-filter', 'blur(' + scrolled/20 + 'px)');

    if(scrolled < 80 ){
        $('#monkeyDiv').css('width', (48 + scrolled/5) + '%');
        $('header h1').css('font-size', 2.9 + (scrolled * 0.05) + 'rem');
    

       // $('#tagline').css('font-size', 1.6 - (scrolled * .1)/40 + 'rem');
    }/*else{
        $('#monkey').css('width', (100 + scrolled/4) + '%');
    }*/
}

/* 
function printPage() {
     var div = document.getElementById("printerDiv");
     div.innerHTML = '<iframe src="mypage.aspx" onload="this.contentWindow.print();"></iframe>';
}
*/

