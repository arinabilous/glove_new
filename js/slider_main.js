(function ($) {

    $(document).ready(function () {

        /***********************************/

        var time = 2;
        var $slick, isPause, tick, percentTime = 0;

        if ($('.main_slider').length) {
            $('.main_slider').each(function () {
                var time = 2;
                var isPause, tick, percentTime = 0;

                $slick = $(this);
                var $status = $(this).closest('.section').find('.slider-num'),
                    $current = $status.find('strong'),
                    $length = $status.find('i');

                $slick.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

                    var i = (currentSlide ? currentSlide : 0) + 1;
                    $current.html((((i) < 10) ? "0" + (i) : i));
                    $length.html('/' + (((slick.slideCount) < 10) ? "0" + (slick.slideCount) : slick.slideCount));
                    //$status.html( '<strong>' + (((i)<10) ? "0"+(i) : i) +'</strong>'+ '<small>/' + (((slick.slideCount)<10) ? "0"+(slick.slideCount) : slick.slideCount)  + '</<small>');
                });

                $slick.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: true,
                    touchMove: true,
                    draggable: true,
                    lazyLoad: 'ondemand',
                    prevArrow: '<button class="slick-prev slick-disabled"><div class="cont"><svg preserveAspectRatio="none" class="progress" viewBox="0 0 110 110"><circle class="circle-bg" r="50" cx="55" cy="55"/><circle class="circle-go" r="50" cx="55" cy="55"/></svg><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                        '<path d="M5.7779 4.60986L1.32777 0.159816C1.22485 0.0568085 1.08745 6.10352e-05 0.940948 6.10352e-05C0.794445 6.10352e-05 0.657048 0.0568085 0.554122 0.159816L0.226401 0.487455C0.0131509 0.70095 0.0131509 1.04794 0.226401 1.26111L3.96328 4.99799L0.222255 8.73901C0.119329 8.84202 0.0625 8.97934 0.0625 9.12576C0.0625 9.27234 0.119329 9.40966 0.222255 9.51275L0.549976 9.84031C0.652983 9.94331 0.790299 10.0001 0.936802 10.0001C1.0833 10.0001 1.2207 9.94331 1.32363 9.84031L5.7779 5.3862C5.88107 5.28286 5.93774 5.1449 5.93741 4.99823C5.93774 4.851 5.88107 4.71311 5.7779 4.60986Z" fill="#384262"/>\n' +
                        '</svg></div></button>',
                    nextArrow: '<button class="slick-next"><div class="cont"><svg preserveAspectRatio="none" class="progress" viewBox="0 0 110 110"><circle class="circle-bg" r="50" cx="55" cy="55"/><circle class="circle-go" r="50" cx="55" cy="55"/></svg><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                        '<path d="M5.7779 4.60986L1.32777 0.159816C1.22485 0.0568085 1.08745 6.10352e-05 0.940948 6.10352e-05C0.794445 6.10352e-05 0.657048 0.0568085 0.554122 0.159816L0.226401 0.487455C0.0131509 0.70095 0.0131509 1.04794 0.226401 1.26111L3.96328 4.99799L0.222255 8.73901C0.119329 8.84202 0.0625 8.97934 0.0625 9.12576C0.0625 9.27234 0.119329 9.40966 0.222255 9.51275L0.549976 9.84031C0.652983 9.94331 0.790299 10.0001 0.936802 10.0001C1.0833 10.0001 1.2207 9.94331 1.32363 9.84031L5.7779 5.3862C5.88107 5.28286 5.93774 5.1449 5.93741 4.99823C5.93774 4.851 5.88107 4.71311 5.7779 4.60986Z" fill="#384262"/>\n' +
                        '</svg></div></button>',
                    autoplay: true,
                    autoplaySpeed: 10000,
                    // easing: 'swing',
                });


                $slick.on({
                    mouseenter: function () {
                        isPause = true;
                    },
                    mouseleave: function () {
                        isPause = false;
                        startProgressbar();
                    },
                    mousedown: function () {
                        $rbar.fadeOut('slow');
                        percentTime = 0;
                    },
                    afterChange: function (event, slick, currentSlide, nextSlide) {
                        if (currentSlide === slick.slideCount - 1) {
                            $slick.find('.slick-prev').removeClass('slick-disabled');
                            $slick.find('.slick-next').addClass('slick-disabled');
                        }
                        console.log(currentSlide + '_' + slick.slideCount);
                    }
                });
            });
        }


        function startProgressbar() {
            clearTimeout(tick);
            isPause = false;
            tick = setInterval(interval, 40);
            $rbar.fadeIn('slow');
        }

        var $rbar = $('.circle-go');
        var rlen = 2 * Math.PI * $rbar.attr('r');

        function interval() {
            if (isPause === false) {
                percentTime += 1 / (time + 0.1);

                $rbar.css({
                    strokeDasharray: rlen,
                    strokeDashoffset: rlen * (1 - percentTime / 100)
                });
                if (percentTime >= 100) {
                    $slick.slick('slickNext');
                    percentTime = 0;
                    startProgressbar();
                }

                //console.log('S>>>' + percentTime);
            }

        }

        startProgressbar();
        /***********************************/

    });

}(jQuery));