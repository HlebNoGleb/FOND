$('#menu a, .menu__link a').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 66;
        $('body,html').animate({
            scrollTop: top
        }, 700);
    })