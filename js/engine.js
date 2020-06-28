(function ($) {

    $(document).ready(function () {

        /***********************************/

        $('.menu_btn').on('click', function () {
            $('.navigation').toggleClass('navigation--scrolled');


            function explode() {
                $('.navigation__menu').toggleClass('fadeInUp');
            }

            setTimeout(explode, 200);

            $(this).toggleClass('active');
            var $button = $('#button-nav');


            if ($button.hasClass('open')) {
                $button.removeClass('open');
            } else {
                $button.addClass('open');
            }

        });
        if ($('header .sub-menu').children('li').length > 10) {
            $('header .sub-menu').children('li:nth-child(11)').parent().addClass('active');
        }


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


        const svg = document.querySelectorAll('.svg-element');
        svg.forEach(element => {
            const element_warm = new Warp(element);
            element_warm.interpolate(4);
            element_warm.transform(([x, y]) => [x, y, y]);
            let offset = 0;
            animate();

            function animate() {
                element_warm.transform(([x, y, oy]) => [x, oy + 4 * Math.sin(x / 48 + offset), oy]);
                offset += 0.2;
                requestAnimationFrame(animate);
            }
        });


        /***********************************/

    });

}(jQuery));