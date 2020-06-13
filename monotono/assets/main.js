$(document).ready(function() {
    $('input[type="text"],input[type="email"],textarea').on('focus', function() {
        $(this).parent().find('label').addClass('label-active');
        $(this).parent().find('label').removeClass('blur');
        $(this).removeClass('blur-inp');
        $(this).css('border-bottom', '2px solid #222')
    });
    $('input[type="text"],input[type="email"],textarea').on('blur', function() {
        if (!$(this).val()) {
            $(this).parent().find('label').removeClass('label-active')
        } else {
            $(this).parent().find('label').addClass('blur');
            $(this).addClass('blur-inp');
            $(this).css('border-bottom', '2px solid #aaa')
        }
    });

    $('.menu').on('click', function(event) {
        $('.menu-btn').toggleClass('btn-active');
        $('.navbar').slideToggle(500);
        $('html, body').animate({
            scrollTop: $('#head').offset().top
        }, 1000);
    });
    $(window).scroll(function() {
        $('.fadeIn').each(function(i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('fadeIn up left1 right1 down left2 right2');
            }
        });
    });

    $('.more').on('click', function() {
        $(this).slideUp(500);
        $('.box:last').slideDown(1000);
    });

    $(function() {

        var inverted = 0;
        $('.theme').on('click', function() {
            $(this).toggleClass('dark');
            if (inverted == 0) {
                $('.section,.head,img').not('.recent,.main').css('filter', 'invert(100%)');
                $('.shadow').css('box-shadow', '0 0 3em #fff');
                $('.shadow-small').css('box-shadow', '2px 2px 5px #fff');
                inverted = 1;
            } else if (inverted == 1) {
                $('.section,.head,img').not('.recent,.main').css('filter', 'invert(0%)');
                $('.shadow').css('box-shadow', '0 0 3em #222');
                $('.shadow-small').css('box-shadow', '2px 2px 5px rgba(0,0,0,0.25)');
                inverted = 0;
            }
        });
    });
    autosize($('textarea'));
    $(function() {
        $("a[href*='#']:not([href='#'])").click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false
                }
            }
        })
    });

    var loaded = [];
    var images = [];

    function preload() {
        for (var j = 0; j < arguments.length; j++) {
            loaded[j] = new Image();
            loaded[j].src = preload.arguments[j];
            images[j] = preload.arguments[j];
        }
    };
    preload("images/s/slide0.jpg", "images/s/slide1.jpg", "images/s/slide2.jpg", "images/s/slide3.jpg", "images/s/slide4.jpg");
    captions = ["caption 1", "caption 2", "caption 3", "caption 4", "caption 5"];
    articles = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim, mi quis blandit ultrices, lacus diam auctor eros, eu lobortis erat eros quis ligula. Donec eget massa non ex pretium sollicitudin. Sed dolor ante, interdum vel faucibus ac, auctor eget dolor. Aliquam rutrum leo vitae metus malesuada, id ultrices elit placerat. Phasellus vitae mi eu felis ultrices sagittis in euismod ligula. Donec vitae metus erat. Maecenas scelerisque nunc diam, non vestibulum ante ullamcorper sed. Sed tristique aliquam risus sagittis interdum. Aliquam ac turpis at arcu iaculis interdum sit amet quis turpis. Mauris sit amet semper enim.", "Aliquam eget nulla venenatis, faucibus lorem a, laoreet orci. Cras molestie consectetur vehicula. Donec sollicitudin enim ornare rutrum hendrerit. Fusce vel odio sapien. Proin neque nunc, dignissim nec volutpat congue, auctor vel dui. Proin ipsum nisi, blandit sit amet efficitur ut, lobortis a lorem. Aenean pretium eu diam in iaculis. Duis non lorem massa.", "Maecenas sit amet ex a lacus mattis molestie at tristique arcu. Cras eget felis pharetra, vulputate ligula eget, luctus purus. Vivamus euismod pellentesque viverra. Integer mollis ullamcorper massa, at pharetra tortor sollicitudin ut. Vestibulum vestibulum enim non tellus ornare, ac cursus est vulputate. Cras a fringilla nisi. Praesent non accumsan odio, eget sodales justo. Fusce condimentum rutrum arcu a maximus. Vestibulum sollicitudin commodo lectus vitae vulputate. Fusce vitae enim quis mi auctor venenatis. Etiam mattis aliquam neque, elementum tincidunt libero consectetur ut.", "Etiam imperdiet facilisis ex, ac ultricies felis luctus sed. Integer non facilisis mauris, quis gravida tortor. Praesent dapibus urna risus, quis molestie diam luctus vitae. In fringilla turpis eget malesuada dapibus. Proin ac nunc tristique, fermentum orci non, consectetur est. Aliquam ut dapibus odio. Etiam tincidunt fringilla ipsum, in consectetur ante. In a orci semper, posuere velit et, tristique est. Curabitur ultricies fermentum leo, eget faucibus ligula sollicitudin eleifend. Integer venenatis sapien in lectus porttitor finibus. Duis at dolor sit amet odio hendrerit ultricies. Quisque ullamcorper aliquam diam a aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam aliquam nec leo eget aliquam.", "Etiam maximus hendrerit auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eu ante nec diam hendrerit fringilla. Aliquam vulputate eu ante ac dapibus. Nunc id justo molestie, interdum metus vestibulum, maximus odio. Integer fermentum blandit purus, vel tincidunt nunc molestie sit amet. Fusce in venenatis leo, vitae gravida nulla. Donec sit amet tellus quis mi molestie condimentum at at augue. Phasellus congue varius consectetur."];
    i = 1;

    function nextBG() {
        $('#recent').css('background-image', 'url(' + images[i] + ')');
        $('.slide-cap').fadeTo(300, 0);
        setTimeout(function() {
            $('.caption').text(captions[i]);
            $('.article').text(articles[i]);
            i++;
            $('.slide-cap').delay(900).fadeTo(200, 1);
            if (i == images.length) {
                i = 0;
            }
        }, 600);
    }

    function prevBG() {
        if (i == 0) {
            i = images.length
        }
        i--;
        $('#recent').css('background-image', 'url(' + images[i] + ')');
        $('.slide-cap').fadeTo(300, 0);
        setTimeout(function() {
            $('.caption').text(captions[i]);
            $('.article').text(articles[i]);
        }, 600);
        $('.slide-cap').delay(900).fadeTo(200, 1)
    }
    $('.next').on('click', nextBG);
    $('.prev').on('click', prevBG);
    setInterval(nextBG, 10000);
    $('.section').scrollex({
        mode: 'middle',
        top: '10vh',
        bottom: '10vh',
        enter: function() {
            id = $(this).attr('id');
            $('a[href*= "' + id + '"]').addClass('active')
        },
        leave: function() {
            id = $(this).attr('id');
            $('a[href*= "' + id + '"]').removeClass('active')
        }
    });
});