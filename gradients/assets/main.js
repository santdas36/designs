$(document).ready(function() {

    $('.front').on('click', function() {
        $('.front').removeClass('f-act');
        $('.rear').removeClass('r-act');
        $(this).addClass('f-act');
        $(this).parent().children('.rear').addClass('r-act');
    });

    $('.close').on('click', function() {
        $(this).parents().eq(1).children('.front').removeClass('f-act');
        $(this).parent().removeClass('r-act');
    });

    var i_open = 0;

    $('.contact-info .down-btn').on('click', function() {
        if (i_open == 0) {
            $(this).parent().addClass('info-open');
            i_open = 1;
        } else {
            $('.info-open').removeClass('info-open');
            i_open = 0;
        }
    });

    $('input[type="text"],input[type="email"],textarea').on('focus', function() {
        $(this).parent().find('label').addClass('label-active');
        $(this).parent().find('label').removeClass('blur');
        $(this).removeClass('blur-inp');
    });

    $('input[type="text"],input[type="email"],textarea').on('blur', function() {
        if (!$(this).val()) {
            $(this).parent().find('label').removeClass('label-active')
        } else {
            $(this).parent().find('label').addClass('blur');
            $(this).addClass('blur-inp')
        }
    });

    autosize($('textarea'));

    $('label').on('click', function() {
        $(this).next().focus();
    });

    var $slide = $(".w-cont");
    $('.scroll-nav button').on('click', function() {
        $('.scroll-nav button.active').removeClass('active');
        $(this).addClass('active');
        var index = $(this).data('index') - 1;
        $slide.animate({
            scrollLeft: index * $slide.width()
        });
    });

    c = 1;
    $(function() {
        setInterval(function() {
            $slide.animate({
                scrollLeft: c % 5 * $slide.width()
            });
            c++;
            $('.scroll-nav button.active').removeClass('active');
            $('.scroll-nav button').eq((c % 5) - 1).addClass('active');
        }, 10000);
    });
        
    var st = $('.slide').offset().top;
    
    $('.header span a.mobile').on('click', function() {
        $('#home, .mobile-footer').slideUp(500);
        $("meta[name='theme-color']").attr('content', '#aa00ff');
        event.preventDefault();
        $('.nav a.active').removeClass('active');
        $('.nav a').eq(1).addClass('active');
    });

    $('.nav').hover(
        function() {
            $(this).addClass('nav-open')
        },
        function() {
            $(this).removeClass('nav-open')
        });

    $('.nav a').on('click', function() {
        var ct = $(this).data('index') - 2;
        var id = $(this).attr('href');
        var ix = $(this).data('index') - 1;
        colors = ["#fff", "#aa00ff", "#448aff", "#faa925"];
        $("meta[name='theme-color']").attr('content', colors[ix]);
        event.preventDefault();
        $('.nav a.active').removeClass('active');
        $(this).addClass('active');
        $('.front').removeClass('f-act');
        $('.rear').removeClass('r-act');
        if (id == 'home') {
            $('#home, .mobile-footer').slideDown(500);
            $('#about').fadeIn(500);
        }
        else {
            $('.box').fadeOut(500);
            $('#home, .mobile-footer').slideUp(500);
            $('div[id="' + id + '"]').fadeIn(500);
        }
    });

    $('.mobile-footer span i').hover(
        function() {
            var s = $(this).data('content');
            $('.mobile-footer .data-social').eq(s).css(
                'transform', 'translateY(75%) scale(1)').css(
                'opacity', 1);
        },
        function() {
            var s = $(this).data('content');
            $('.mobile-footer .data-social').eq(s).css(
                'transform', 'translateY(175%) scale(0)').css(
                'opacity', 0);
            setTimeout(function() {
                $('.mobile-footer .data-social').eq(s).css(
                    'transform', 'translateY(0) scale(0)');
            }, 500);
        }
    );
})