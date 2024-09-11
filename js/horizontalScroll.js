

$(document).ready(function(){
    slider = $("#practiceSlider");
    $("#1").css("background", "red")

    slider.on('scroll', function() {
        $(this).scrollLeft(100)
    })
});


