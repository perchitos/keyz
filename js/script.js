(function($) {
    "use strict";

    //set selectmenu
    var select = $('.js-select');
    if ($(select).length) {
        $(select).selectmenu();
    }

    $('.j-bg-image').each(function() {
        var imgSrc = $(this).children('img').attr('src');
        if (typeof imgSrc !== typeof undefined) {
            $(this).css('background-image', 'url("' + imgSrc + '")').children('img').hide();
            $(this).css('background-size', 'cover');
        }
    });


    //  Sliders
    var sliders = {
        '.j-main-slider':{
            slider: 'superslides',
            options:{
                animation: 'fade',
                pagination: false,
                inherit_height_from: $('body')
            }
        },
        '.slider':{
            slider: 'slick',
            options:{
                dots: false,
                infinite: true,
                centerMode: true,
                slidesToShow: 3,
                centerPadding: '0px',
                slidesToScroll: 1,
                touchMove: true,
                variableWidth: false,
                // adaptiveHeight: true,
                focusOnSelect: true
                // autoplay: true,
                // autoplaySpeed: 4000
            }
        }
    };
    // Init sliders
    $.each( sliders, function( name, settings ) {
        if( settings.slider == 'superslides' ){
            $(name).superslides(settings.options);
        }else if( settings.slider == 'slick' ){
            $(name).slick(settings.options);
        }
    });


    $('.j-toggle-form').click(function () {
        $('.search, .search-extended').slideToggle();
    });

}(jQuery));