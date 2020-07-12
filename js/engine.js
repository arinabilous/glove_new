(function ($) {

    $(document).ready(function () {

        /***********************************/
        AOS.init();
        new WOW().init();

        $('.review_slider').slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows: false,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 7000,
            speed: 1000
        });


        $('.menu_btn').on('click', function () {
            $('.navigation').toggleClass('navigation--scrolled');

            $('.navigation__menu').toggleClass('fadeInUp');

            $(this).toggleClass('active');
            let $button = $('#button-nav');


            if ($button.hasClass('open')) {
                $button.removeClass('open');
            } else {
                $button.addClass('open');
            }

        });


        if ($('header ul').children('li').length > 10) {
            $('header ul').children('li:nth-child(11)').parent().addClass('active');
        }

        $('.navigation .menu li').mouseenter(function () {
            $(this).children('ul').addClass('sub-menu')
        });
        $('.navigation .menu li').mouseleave(function () {
            $(this).children('ul').removeClass('sub-menu')
        });

        if ($('body .content').hasClass('.page')) {
            alert(5);
            $('body').find('.social').addClass('resize');
        }

        const svg = document.querySelectorAll('.svg-element');
        svg.forEach(element => {
            const element_warm = new Warp(element);
            element_warm.interpolate(6);
            element_warm.transform(([x, y]) => [x, y, y]);
            let offset = 0;
            animate();

            function animate() {
                element_warm.transform(([x, y, oy]) => [x, oy + 6 * Math.sin(x / 98 + offset), oy]);
                offset += 0.05;
                requestAnimationFrame(animate);
            }
        });

        /***********************************/

    });

}(jQuery));