(function ($) {

    $(document).ready(function () {

        /***********************************/

        $('.menu_btn').on('click', function () {
            $('.navigation').toggleClass('navigation--scrolled');
        });


        const svg = document.getElementById('svg-top-element');
        const warp = new Warp(svg);
        warp.interpolate(8);
        warp.transform(([x, y]) => [x, y, y]);
        let offset = 0;
        const svg_left = document.getElementById('svg-left-element');
        const warp2 = new Warp(svg_left);
        warp2.interpolate(4);
        warp2.transform(([x, y]) => [x, y, y]);

        function animate() {
            warp.transform(([x, y, oy]) => [x, oy + 4 * Math.sin(x / 380 + offset), oy]);
            warp2.transform(([x, y, oy]) => [x, oy + 8 * Math.sin(x / 192 + offset), oy]);
            offset += 0.06;
            requestAnimationFrame(animate);
        }

        animate();


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


        /***********************************/

    });

}(jQuery));