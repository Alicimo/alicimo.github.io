var $root = $('html, body');
$('a').click(function() {
    var targetHeight = $( $.attr(this,'href') ).height();
    var targetTop = $( $.attr(this,'href') ).offset().top;
    var windowHeight = $(window).height();

    if (targetHeight > windowHeight){
        var position = targetTop;
    } else {
        var position = targetTop -  windowHeight/2 + targetHeight/2 + 51;
    }

    $root.animate({
        scrollTop: position
    }, 500);
    return false;
});
