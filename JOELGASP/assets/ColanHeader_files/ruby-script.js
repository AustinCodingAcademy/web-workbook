/*--------------------------------------------------------------
 INNOVATION MAN SCRIPT
 --------------------------------------------------------------*/
var innovation_ruby_site_smooth_scroll;
var innovation_ruby_site_smooth_display;
var ruby_sidebar_sticky_enable;
var innovation_ruby_site_bg_link;
var innovation_ruby_to_top;
var innovation_ruby_to_top_mobile;
var innovation_ruby_single_popup_image;
var innovation_ruby_sb_instagram_popup;
var innovation_ruby_footer_instagram_popup;
var innovation_ruby_touch_tooltip;
var innovation_ruby_popup_gallery;

(function ($) {
    "use strict";
    var ruby = {};

    ruby.blog_content = $('.ruby-content-wrap');
    ruby.html = $('html, body');
    ruby.body = $('body');
    ruby.window = $(window);
    ruby.touch = Modernizr.touch;
    ruby.ios = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
    ruby.prev_arrow = '<div class="ruby-slider-prev ruby-slider-nav"><i class="fa fa-chevron-circle-left"></i></div>';
    ruby.next_arrow = '<div class="ruby-slider-next ruby-slider-nav"><i class="fa fa-chevron-circle-right"></i></div>';
    ruby.related_prev_arrow = '<div class="ruby-slider-prev ruby-related-slider-nav"><i class="fa fa-angle-left"></i></div>';
    ruby.related_next_arrow = '<div class="ruby-slider-next ruby-related-slider-nav"><i class="fa fa-angle-right"></i></div>';


    $(document).ready(function () {
        ruby_document_ready();
        ruby_document_ready_reload();
    });


    /**-------------------------------------------------------------------------------------------------------------------------
     *  document.ready()
     */
    function ruby_document_ready() {

        //feat slider
        ruby_feat_slider_grid();
        ruby_feat_slider_fw();
        ruby_feat_slider_hw();
        ruby_feat_carousel_hw();
        ruby_feat_carousel_fw();
        ruby_feat_carousel_fw_small();

        ruby_slider_related();

        ruby_back_top();
        ruby_click_body();
        ruby_enable_smooth_scroll();

        //instagram
        ruby_instagram_popup_footer();
        ruby_instagram_popup_sidebar();

        //menu
        ruby_tooltips();
        ruby_search_button();
        ruby_responsive_menu();
        ruby_enable_sticky_sidebar();
        ruby_enable_sticky_navigation();

        //block
        ruby_slider_block_8_carousel();

    }

    /**-------------------------------------------------------------------------------------------------------------------------
     * reload after ajax
     */
    function ruby_document_ready_reload() {

        ruby_video_responsive();
        ruby_enable_smooth_display();
        ruby_remove_holder();

        ruby_post_gallery_slider();
        ruby_post_gallery_gird();
        ruby_post_gallery_popup();

        //single
        ruby_single_popup();
        ruby_single_featured_popup();
        ruby_animation_progress_bar();

        //footer
        ruby_footer_fixed_animation();

        //ajax
        ruby_ajax_load_more();
        ruby_ajax_infinite_scroll();


    }


    /**-------------------------------------------------------------------------------------------------------------------------
     *  video responsive
     */
    function ruby_video_responsive() {
        $('.entry').fitVids();
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     *  Back to top
     */
    function ruby_back_top() {
        if (1 == innovation_ruby_to_top) {
            if (1 == innovation_ruby_to_top_mobile) {
                $().UItoTop({
                    containerID: 'ruby-back-top', //fading element id
                    easingType: 'easeOutQuart',
                    text: '<i class="ruby-back-top"></i>',
                    containerHoverID: 'ruby-back-top-inner',
                    scrollSpeed: 800
                });
            } else {
                if (false === ruby.touch) {
                    $().UItoTop({
                        containerID: 'ruby-back-top', //fading element id
                        easingType: 'easeOutQuart',
                        text: '<i class="ruby-back-top"></i>',
                        containerHoverID: 'ruby-back-top-inner',
                        scrollSpeed: 800
                    });
                }
            }
        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     *  enable smooth scroll
     */
    function ruby_enable_smooth_scroll() {
        if (1 == innovation_ruby_site_smooth_scroll) {
            ruby_smooth_scroll();
        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     *  animated image
     */
    function ruby_animated_image() {
        $('.ruby-animated-image').each(function () {
            var that = $(this);
            var delay = 150 + (that.offset().left / 4);
            if ((ruby.html.width() < 1024 && true == ruby.touch)) {
                that.waypoint({
                        handler: function () {
                            that.addClass('ruby-animation');
                        },
                        offset: '90%',
                        triggerOnce: true
                    }
                )
            } else {
                that.waypoint({
                        handler: function () {
                            setTimeout(function () {
                                that.addClass('ruby-animation');
                            }, delay);
                        },
                        offset: '80%',
                        triggerOnce: true
                    }
                )
            }
        });
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     *  enable smooth display
     */
    function ruby_enable_smooth_display() {

        if (1 == innovation_ruby_site_smooth_display) {
            var ruby_smooth_flag = false;

            ruby.blog_content.imagesLoaded(function () {
                ruby_animated_image();
                ruby_smooth_flag = true;
            });

            //set timeout for slow load
            setTimeout(function () {
                if (false === ruby_smooth_flag) {
                    ruby_animated_image();
                    ruby_smooth_flag = true;
                }
            }, 2500);
        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * click on body
     */
    function ruby_click_body() {
        if (innovation_ruby_site_bg_link != undefined) {
            ruby.body.on('click', function (e) {
                if (e.target != this) {
                    return;
                }
                window.open(innovation_ruby_site_bg_link, '_blank');
            });
        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * remove holder
     */
    function ruby_remove_holder() {
        ruby.body.imagesLoaded(function () {
            $('.ruby-holder').removeClass('ruby-holder');
        });
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * sticky sidebar
     */
    function ruby_enable_sticky_sidebar() {
        ruby.window.load(function () {
            ruby.body.imagesLoaded(function () {
                if (ruby.touch === false && ruby.html.width() > 991) {
                    $('.ruby-sidebar-sticky').each(function () {
                        var ruby_sidebar_el = $(this);
                        ruby_sticky_sidebar.sticky_sidebar(ruby_sidebar_el);
                    });
                }
            })
        })
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * sticky navigation
     */
    function ruby_enable_sticky_navigation() {

        var innovation_ruby_sticky_menu = $('.is-sticky .nav-bar-outer');
        if (innovation_ruby_sticky_menu.length > 0) {
            var innovation_ruby_menu_wrap = innovation_ruby_sticky_menu.find('.nav-bar-wrap');
            innovation_ruby_sticky_menu.css('min-height', innovation_ruby_menu_wrap.height());
            ruby.html.resize(function () {
                innovation_ruby_sticky_menu.css('min-height', innovation_ruby_menu_wrap.height());
            });
            innovation_ruby_menu_wrap.css('width', '100%');
            innovation_ruby_menu_wrap.sticky({
                className: 'ruby-is-stick'
            })
        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * feat grid slider
     */
    function ruby_feat_slider_grid() {
        var innovation_ruby_feat_grid = $('.ruby-feat-grid');
        if (innovation_ruby_feat_grid.length > 0) {
            innovation_ruby_feat_grid.each(function () {

                var innovation_ruby_feat_grid_el = $(this);
                innovation_ruby_feat_grid_el.on('init', function () {
                    innovation_ruby_feat_grid_el.imagesLoaded(function () {
                        innovation_ruby_feat_grid_el.prev('.slider-loading').fadeOut(600, function () {
                            $(this).remove();
                            innovation_ruby_feat_grid_el.removeClass('slider-init');
                        });
                    });
                });

                innovation_ruby_feat_grid_el.slick({
                    dots: true,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    speed: 350,
                    adaptiveHeight: true,
                    arrows: true,
                    prevArrow: ruby.prev_arrow,
                    nextArrow: ruby.next_arrow
                });
            });
        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * feat slider fw
     */
    function ruby_feat_slider_fw() {
        var innovation_ruby_feat_slider_fw = $('.ruby-feat-slider-fw');
        if (innovation_ruby_feat_slider_fw.length > 0) {
            innovation_ruby_feat_slider_fw.each(function () {

                var innovation_ruby_feat_slider_fw_el = $(this);
                innovation_ruby_feat_slider_fw_el.on('init', function () {
                    innovation_ruby_feat_slider_fw_el.imagesLoaded(function () {
                        innovation_ruby_feat_slider_fw_el.prev('.slider-loading').fadeOut(600, function () {
                            $(this).remove();
                            innovation_ruby_feat_slider_fw_el.removeClass('slider-init');
                        });
                    });
                });

                innovation_ruby_feat_slider_fw_el.slick({
                    dots: true,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    speed: 500,
                    adaptiveHeight: true,
                    arrows: true,
                    prevArrow: ruby.prev_arrow,
                    nextArrow: ruby.next_arrow
                });
            });
        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * slider has wrapper
     */
    function ruby_feat_slider_hw() {

        var innovation_ruby_feat_slider_hw = $('.ruby-feat-slider-hw');
        if (innovation_ruby_feat_slider_hw.length > 0) {
            innovation_ruby_feat_slider_hw.each(function () {

                var innovation_ruby_feat_slider_hw_el = $(this);
                innovation_ruby_feat_slider_hw_el.on('init', function () {
                    innovation_ruby_feat_slider_hw_el.imagesLoaded(function () {
                        innovation_ruby_feat_slider_hw_el.prev('.slider-loading').fadeOut(600, function () {
                            $(this).remove();
                            innovation_ruby_feat_slider_hw_el.removeClass('slider-init');
                        });
                    });
                });

                innovation_ruby_feat_slider_hw_el.slick({
                    dots: true,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    speed: 500,
                    adaptiveHeight: true,
                    arrows: true,
                    prevArrow: ruby.prev_arrow,
                    nextArrow: ruby.next_arrow
                });
            });
        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * carousel has wrapper
     */
    function ruby_feat_carousel_hw() {

        var innovation_ruby_feat_carousel_hw = $('.ruby-feat-carousel-hw');
        if (innovation_ruby_feat_carousel_hw.length > 0) {
            innovation_ruby_feat_carousel_hw.each(function () {

                var innovation_ruby_feat_carousel_hw_el = $(this);
                innovation_ruby_feat_carousel_hw_el.on('init', function () {
                    innovation_ruby_feat_carousel_hw_el.imagesLoaded(function () {
                        innovation_ruby_feat_carousel_hw_el.prev('.slider-loading').fadeOut(600, function () {
                            $(this).remove();
                            innovation_ruby_feat_carousel_hw_el.removeClass('slider-init');
                        });
                    })
                });
                innovation_ruby_feat_carousel_hw_el.slick({
                    centerMode: false,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    speed: 350,
                    adaptiveHeight: false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    wipeToSlide: 1,
                    dots: false,
                    arrows: true,
                    prevArrow: ruby.prev_arrow,
                    nextArrow: ruby.next_arrow,
                    responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                                arrows: false,
                                slidesToScroll: 1,
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: false,
                                slidesToScroll: 1,
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: false,
                                slidesToScroll: 1,
                                slidesToShow: 1
                            }
                        }
                    ]
                });
            })

        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * featured carousel fw
     */
    function ruby_feat_carousel_fw() {
        var innovation_ruby_feat_carousel_padding1 = '300px';
        var innovation_ruby_feat_carousel_padding2 = '250px';
        var innovation_ruby_feat_carousel_padding3 = '200px';

        if (ruby.body.hasClass('is-boxed')) {
            innovation_ruby_feat_carousel_padding1 = '150px';
            innovation_ruby_feat_carousel_padding2 = '150px';
            innovation_ruby_feat_carousel_padding3 = '150px';
        }

        var innovation_ruby_feat_carousel_fw = $('.ruby-feat-carousel-fw');
        if (innovation_ruby_feat_carousel_fw.length > 0) {

            innovation_ruby_feat_carousel_fw.each(function () {

                var innovation_ruby_feat_carousel_fw_el = $(this);

                innovation_ruby_feat_carousel_fw_el.on('init', function () {
                    innovation_ruby_feat_carousel_fw_el.imagesLoaded(function () {
                        innovation_ruby_feat_carousel_fw_el.prev('.slider-loading').fadeOut(600, function () {
                            $(this).remove();
                            innovation_ruby_feat_carousel_fw_el.removeClass('slider-init');
                        });
                    });
                });
                innovation_ruby_feat_carousel_fw_el.slick({
                    centerMode: true,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    speed: 500,
                    wipeToSlide: 1,
                    centerPadding: innovation_ruby_feat_carousel_padding1,
                    adaptiveHeight: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true,
                    prevArrow: ruby.prev_arrow,
                    nextArrow: ruby.next_arrow,
                    responsive: [
                        {
                            breakpoint: 1500,
                            settings: {
                                centerMode: true,
                                dots: true,
                                arrows: true,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerPadding: innovation_ruby_feat_carousel_padding2
                            }
                        },
                        {
                            breakpoint: 1400,
                            settings: {
                                dots: true,
                                centerMode: true,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerPadding: innovation_ruby_feat_carousel_padding3
                            }
                        },
                        {
                            breakpoint: 1280,
                            settings: {
                                dots: true,
                                arrows: true,
                                centerMode: true,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerPadding: '180px'
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                dots: true,
                                arrows: true,
                                centerMode: true,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerPadding: '120px'

                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                dots: true,
                                centerMode: true,
                                arrows: false,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerPadding: '40px'
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                dots: true,
                                arrows: false,
                                centerMode: true,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerPadding: '20px'
                            }
                        }
                    ]
                });
            });
        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * ruby featured carousel fw small
     */
    function ruby_feat_carousel_fw_small() {

        var innovation_ruby_feat_carousel_small_padding1 = '200px';
        var innovation_ruby_feat_carousel_small_padding2 = '100px';

        if (ruby.body.hasClass('is-boxed')) {
            innovation_ruby_feat_carousel_small_padding1 = '85px';
            innovation_ruby_feat_carousel_small_padding2 = '85px';
        }

        var innovation_ruby_feat_carousel_small_fw = $('.ruby-feat-carousel-fw-small');
        if (innovation_ruby_feat_carousel_small_fw.length > 0) {
            innovation_ruby_feat_carousel_small_fw.each(function () {
                var innovation_ruby_feat_carousel_small_fw_el = $(this);

                innovation_ruby_feat_carousel_small_fw_el.on('init', function () {
                    innovation_ruby_feat_carousel_small_fw_el.imagesLoaded(function () {
                        innovation_ruby_feat_carousel_small_fw_el.prev('.slider-loading').fadeOut(600, function () {
                            $(this).remove();
                            innovation_ruby_feat_carousel_small_fw_el.removeClass('slider-init');
                        });
                    });
                });
                innovation_ruby_feat_carousel_small_fw_el.slick({
                    autoplaySpeed: 4000,
                    speed: 500,
                    wipeToSlide: 1,
                    adaptiveHeight: false,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true,
                    centerMode: true,
                    infinite: true,
                    autoplay: true,
                    centerPadding: innovation_ruby_feat_carousel_small_padding1,
                    slidesToShow: 3,
                    prevArrow: ruby.prev_arrow,
                    nextArrow: ruby.next_arrow,
                    responsive: [
                        {
                            breakpoint: 1400,
                            settings: {
                                dots: true,
                                arrows: true,
                                centerMode: true,
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                centerPadding: innovation_ruby_feat_carousel_small_padding2
                            }
                        },
                        {
                            breakpoint: 1200,
                            settings: {
                                dots: true,
                                arrows: true,
                                centerMode: true,
                                centerPadding: '0px',
                                slidesToShow: 3
                            }
                        },

                        {
                            breakpoint: 992,
                            settings: {
                                dots: true,
                                arrows: false,
                                centerMode: true,
                                centerPadding: 0,
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                dots: true,
                                arrows: false,
                                centerMode: true,
                                centerPadding: '45px',
                                slidesToShow: 1
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                dots: true,
                                arrows: false,
                                centerMode: true,
                                centerPadding: '20px',
                                slidesToShow: 1
                            }
                        },

                        {
                            breakpoint: 360,
                            settings: {
                                dots: true,
                                arrows: false,
                                centerMode: true,
                                centerPadding: 0,
                                slidesToShow: 1
                            }
                        }
                    ]
                });
            })

        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * ruby gallery slider
     */
    function ruby_post_gallery_slider() {
        $('.post-thumb-gallery-slider').each(function () {
            var innovation_ruby_gallery = $(this);
            var innovation_ruby_nav = innovation_ruby_gallery.next('.post-thumb-gallery-slider-nav');
            var slider_nav_to_show = 4;

            if (innovation_ruby_gallery.hasClass('slick-initialized')) {
                innovation_ruby_gallery.slick('unslick');
            }

            innovation_ruby_gallery.on('init', function () {
                var slider = $(this);
                slider.imagesLoaded(function () {
                    slider.prev('.slider-loading').fadeOut(600, function () {
                        $(this).remove();
                    });
                    slider.removeClass('slider-init');
                });
            });

            if (innovation_ruby_nav.hasClass('slick-initialized')) {
                innovation_ruby_nav.slick('unslick');
            }

            innovation_ruby_nav.on('init', function () {
                innovation_ruby_nav.imagesLoaded(function () {
                    innovation_ruby_nav.removeClass('slider-init');
                });
            });

            if (400 > innovation_ruby_nav.width()) {
                slider_nav_to_show = 2;
            }

            innovation_ruby_gallery.slick({
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4000,
                speed: 500,
                adaptiveHeight: true,
                fade: true,
                asNavFor: innovation_ruby_nav,
                prevArrow: ruby.prev_arrow,
                nextArrow: ruby.next_arrow
            });

            innovation_ruby_nav.slick({
                slidesToShow: slider_nav_to_show,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                asNavFor: innovation_ruby_gallery,
                centerMode: false,
                focusOnSelect: true
            });
        });
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * post gallery grid
     */
    function ruby_post_gallery_gird() {
        $('.post-thumb-gallery-grid').each(function () {
            var innovation_ruby_gallery_grid = $(this);
            innovation_ruby_gallery_grid.fadeIn(300).justifiedGallery({
                lastRow: 'justify',
                rowHeight: 168,
                maxRowHeight: 300,
                rel: 'gallery',
                waitThumbnailsLoad: true,
                margins: 2,
                captions: false,
                refreshTime: 250,
                imagesAnimationDuration: 300,
                randomize: false,
                sizeRangeSuffixes: {lt100: "", lt240: "", lt320: "", lt500: "", lt640: "", lt1024: ""}
            }).on('jg.complete', function () {

                //remove loading class
                innovation_ruby_gallery_grid.imagesLoaded(function () {
                    innovation_ruby_gallery_grid.removeClass('slider-init');
                    innovation_ruby_gallery_grid.prev('.slider-loading').fadeOut(600, function () {
                        $(this).remove();

                    });
                });
            });
        });
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * post gallery popup
     */
    function ruby_post_gallery_popup() {
        if (1 == innovation_ruby_popup_gallery) {
            $('.post-thumb.is-gallery').find('a').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: true,
                // Delay in milliseconds before popup is removed
                removalDelay: 500,
                // Class that is added to popup wrapper and background
                // make it unique to apply your CSS animations just to this exact popup
                mainClass: 'mfp-fade',
                zoom: {
                    enabled: true,
                    duration: 500, // duration of the effect, in milliseconds
                    easing: 'ease', // CSS transition easing function
                    opener: function (element) {
                        return element.find('img');
                    }
                },
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                }
            });
        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * gallery single popup
     */
    function ruby_single_popup() {

        if (1 == innovation_ruby_single_popup_image) {
            var innovation_ruby_single_entry = $('.single .entry');

            if (innovation_ruby_single_entry.length > 0) {
                var ruby_single_popup_last_item = null;

                innovation_ruby_single_entry.find('a img').each(function () {
                    var image_wrap = $(this).parent();
                    var image_link = image_wrap.attr('href');
                    if (image_link.indexOf('wp-content/uploads') > 0) {
                        image_wrap.addClass('single-popup');
                    }
                })
            }

            innovation_ruby_single_entry.magnificPopup({
                type: 'image',
                removalDelay: 500,
                mainClass: 'mfp-fade ruby-single-popup-image',
                delegate: '.single-popup',
                closeOnContentClick: true,
                closeBtnInside: true,
                gallery: {
                    // options for gallery
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 500, // duration of the effect, in milliseconds
                    easing: 'ease' // CSS transition easing function
                },
                callbacks: {
                    change: function (item) {
                        ruby_single_popup_last_item = item.el;
                        ruby_scroll_view(item.el);
                    },
                    beforeClose: function () {
                        if (ruby_single_popup_last_item) {
                            ruby_scroll_view(ruby_single_popup_last_item);
                        }
                    }
                }
            });

        }
    }


    function ruby_single_featured_popup() {
        $('.single .single-thumb.is-image a').magnificPopup({
            type: 'image',
            removalDelay: 500,
            mainClass: 'mfp-fade tn-single-popup-image',
            closeOnContentClick: true,
            closeBtnInside: true,
            zoom: {
                enabled: true,
                duration: 500, // duration of the effect, in milliseconds
                easing: 'ease' // CSS transition easing function
            }
        });
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * scrolling into view
     * @param element
     */
    function ruby_scroll_view(element) {

        if (true === ruby.touch) {
            return;
        }

        ruby.html.stop();
        ruby.body.stop();


        var destination = element.offset().top;
        destination = destination - 160;

        var distance = Math.abs(ruby.html.scrollTop() - destination);

        var scrolling_time = distance / 5;

        //go to destination
        ruby.body.animate(
            {scrollTop: destination},
            {
                duration: 700 + scrolling_time,
                easing: 'easeInOutQuart'
            }
        );
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * progress bar animation
     */
    function ruby_animation_progress_bar() {

        var progress_bar = $('.score-bar');
        progress_bar.each(function () {
            $(this).addClass('score-remove');
        });

        progress_bar.each(function () {
            var that = $(this);
            that.waypoint({
                    handler: function () {
                        that.removeClass('score-remove');
                        that.addClass('score-animation');
                    },
                    offset: '85%'
                }
            )
        });
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * slider related slider
     */
    function ruby_slider_related() {
        var innovation_ruby_related_carousel = $('#ruby-related-carousel');
        var innovation_ruby_related_slider_to_show = 3;
        if (0 < $('.is-sidebar-none').length) {
            innovation_ruby_related_slider_to_show = 4;
        }
        if (innovation_ruby_related_carousel.length > 0) {
            innovation_ruby_related_carousel.on('init', function () {
                innovation_ruby_related_carousel.imagesLoaded(function () {
                    innovation_ruby_related_carousel.prev('.slider-loading').fadeOut(600, function () {
                        $(this).remove();
                        innovation_ruby_related_carousel.removeClass('slider-init');
                    });
                });
            });
            innovation_ruby_related_carousel.slick({
                centerMode: false,
                infinite: true,
                autoplay: false,
                adaptiveHeight: false,
                slidesToShow: innovation_ruby_related_slider_to_show,
                slidesToScroll: 1,
                speed: 350,
                dots: false,
                arrows: true,
                prevArrow: ruby.related_prev_arrow,
                nextArrow: ruby.related_next_arrow,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            centerMode: false,
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerMode: false,
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * block 8 carousel
     */
    function ruby_slider_block_8_carousel() {
        var innovation_ruby_block_8_carousel = $('.ruby-block-post-8-carousel');

        if (innovation_ruby_block_8_carousel.length > 0) {
            innovation_ruby_block_8_carousel.each(function () {

                var innovation_ruby_related_carousel_el = $(this);

                innovation_ruby_related_carousel_el.on('init', function () {
                    innovation_ruby_related_carousel_el.imagesLoaded(function () {
                        innovation_ruby_related_carousel_el.prev('.slider-loading').fadeOut(600, function () {
                            $(this).remove();
                            innovation_ruby_related_carousel_el.removeClass('slider-init');
                        });
                    });
                });
                innovation_ruby_related_carousel_el.slick({
                    centerMode: false,
                    infinite: true,
                    autoplay: false,
                    adaptiveHeight: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed: 350,
                    dots: false,
                    arrows: true,
                    prevArrow: ruby.related_prev_arrow,
                    nextArrow: ruby.related_next_arrow,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: false,
                                centerMode: false,
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: false,
                                centerMode: false,
                                slidesToShow: 1
                            }
                        }
                    ]
                });
            })
        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * ruby tooltips
     */
    function ruby_tooltips() {
        if (false === ruby.ios && ((false === ruby.touch) || (1 === innovation_ruby_touch_tooltip))) {
            $('.social-link-info').find('a').tipsy({fade: true});
            $('.text-count').find('a').tipsy({fade: true});
        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * ruby search button
     */
    function ruby_search_button() {

        var innovation_ruby_search_button = $('.ruby-ajax-form-search');
        //add tooltip
        if (false === ruby.ios && ((false === ruby.touch) || (1 === innovation_ruby_touch_tooltip))) {
            innovation_ruby_search_button.tipsy({fade: true});
        }
        innovation_ruby_search_button.click(function (e) {
            var innovation_ruby_search_form = $(this).next('.nav-search-from');
            innovation_ruby_search_form.toggle('300');
            e.preventDefault();
        });
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * responsive menu
     */
    function ruby_responsive_menu() {
        var innovation_ruby_aside_nav_button = $('.ruby-trigger');
        var innovation_ruby_aside_close_button = $('#ruby-close-aside-bar');

        //add tooltip
        if (false === ruby.ios && ((false === ruby.touch) || (1 === innovation_ruby_touch_tooltip))) {
            innovation_ruby_aside_nav_button.tipsy({fade: true});
        }
        var innovation_ruby_aside_mask = $('.side-area-mask');
        innovation_ruby_aside_nav_button.click(function () {
            ruby.body.toggleClass('mobile-js-menu');
            return false;
        });
        innovation_ruby_aside_mask.click(function () {
            ruby.body.toggleClass('mobile-js-menu');
            return false;
        });

        innovation_ruby_aside_close_button.click(function () {
            ruby.body.toggleClass('mobile-js-menu');
            return false;
        });

        var innovation_ruby_mobile_nav = $('.mobile-nav-wrap');
        var innovation_ruby_sub_mobile_a = innovation_ruby_mobile_nav.find('li.menu-item-has-children >a');
        innovation_ruby_sub_mobile_a.append('<span class="explain-menu"><span class="explain-menu-inner"><i class="add-button"></i></span></span>');
        var innovation_ruby_explain_mobile_menu = $('.explain-menu');
        innovation_ruby_explain_mobile_menu.click(function () {
            $(this).closest('.menu-item-has-children ').toggleClass('show-sub-menu');
            return false;
        });
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * footer fixed animation
     */
    function ruby_footer_fixed_animation() {
        var innovation_ruby_fixed_footer = $('.footer-wrap.is-fixed');
        var innovation_ruby_fixed_footer_mobile = $('.footer-wrap.is-fixed.enable-fixed-mobile');
        var innovation_ruby_main_site_outer = $('.site-wrap-outer');
        if (0 < innovation_ruby_fixed_footer.length) {
            if (ruby.html.width() > 991 || 0 < innovation_ruby_fixed_footer_mobile.length) {
                innovation_ruby_main_site_outer.css('margin-bottom', innovation_ruby_fixed_footer.outerHeight());
                innovation_ruby_fixed_footer.imagesLoaded(function () {
                    innovation_ruby_main_site_outer.css('margin-bottom', innovation_ruby_fixed_footer.outerHeight());
                });
            }

            if (ruby.body.hasClass('is-boxed')) {
                var innovation_ruby_boxed_width = $('.main-site-outer').width();
                innovation_ruby_fixed_footer.css('width', innovation_ruby_boxed_width);
                //resize
                ruby.html.resize(function () {
                    var innovation_ruby_boxed_width = $('.main-site-outer').width();
                    innovation_ruby_fixed_footer.css('width', innovation_ruby_boxed_width);
                })
            }

            ruby.html.resize(function () {
                if (ruby.html.width() > 991 || 0 < innovation_ruby_fixed_footer_mobile.length) {
                    innovation_ruby_main_site_outer.css('margin-bottom', innovation_ruby_fixed_footer.outerHeight());
                } else {
                    innovation_ruby_main_site_outer.css('margin-bottom', 0);
                }
            })
        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * footer instagram
     */
    function ruby_instagram_popup_footer() {
        if (1 == innovation_ruby_footer_instagram_popup) {
            $('.footer-instagram-widget .instagram-popup-el').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom',
                image: {
                    verticalFit: true
                },
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 600, // duration of the effect, in milliseconds
                    easing: 'ease', // CSS transition easing function
                    opener: function (element) {
                        return element.find('img');
                    }
                }
            });
        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * sidebar instagram popup images
     */
    function ruby_instagram_popup_sidebar() {

        if (1 == innovation_ruby_sb_instagram_popup) {
            $('.sb-instagram-widget .instagram-popup-el').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom',
                image: {
                    verticalFit: true
                },
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 600, // duration of the effect, in milliseconds
                    easing: 'ease', // CSS transition easing function
                    opener: function (element) {
                        return element.find('img');
                    }
                }
            });
        }
    }


    /*--------------------------------------------------------------
     INNOVATION AJAX
     --------------------------------------------------------------*/
    function ruby_ajax_load_more() {
        var ruby_pagination_ajax = $('.ruby-pagination-ajax');
        var ruby_ajax_load_more_wrap = ruby_pagination_ajax.find('.pagination-load-more');

        if (ruby_ajax_load_more_wrap.length > 0) {

            var load_more_btn = ruby_ajax_load_more_wrap.find('.btn-load-more');
            var load_more_animation = ruby_ajax_load_more_wrap.find('.load-more-animation');

            var page_next = ruby_pagination_ajax.data('page-next');
            var page_max = ruby_pagination_ajax.data('page-max');

            if (page_next <= page_max) {
                load_more_btn.show();
            } else {
                load_more_btn.hide();
            }

            // on click initialize ajax pagination
            load_more_btn.off('click').on('click', function (e) {

                e.preventDefault();
                e.stopPropagation();
                load_more_btn.animate({opacity: 0}, 200);
                load_more_animation.css({'display': 'block'});
                setTimeout(function () {
                    load_more_animation.css({'visibility': 'visible'});
                    load_more_animation.animate({opacity: 1}, 200);
                }, 100);

                setTimeout(function () {
                    ruby_ajax_process(ruby_pagination_ajax);
                }, 700);
            })
        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * ajax infinite scroll
     */
    function ruby_ajax_infinite_scroll() {
        var ruby_pagination_ajax = $('.ruby-pagination-ajax');
        var ruby_infinite_scroll = ruby_pagination_ajax.find('.pagination-infinite-scroll');

        if (ruby_infinite_scroll.length > 0) {

            var load_more_animation = ruby_infinite_scroll.find('.load-more-animation');


            var page_next = ruby_pagination_ajax.data('page-next');
            var page_max = ruby_pagination_ajax.data('page-max');

            if (page_next <= page_max) {

                load_more_animation.show();
                var check_infinite_scroll = new Waypoint({

                        element: load_more_animation,
                        handler: function (direction) {
                            if ('down' == direction) {

                                check_infinite_scroll.destroy();

                                load_more_animation.css({'display': 'block'});

                                setTimeout(function () {
                                    load_more_animation.css({'visibility': 'visible'});
                                    load_more_animation.animate({opacity: 1}, 200);
                                }, 100);

                                setTimeout(function () {
                                    ruby_ajax_process(ruby_pagination_ajax);
                                }, 700);
                            }
                        },

                        offset: '99%'
                    }
                );

            } else {
                ruby_infinite_scroll.remove();
            }
        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * ajax load more processing
     * @param container
     */
    function ruby_ajax_process(container) {

        var post_num = container.data('post-num');
        var page_next = container.data('page-next');
        var page_max = container.data('page-max');
        var blog_layout = container.data('blog-layout');
        var big_first = container.data('big-first');
        var cate_id = container.data('cate-id');

        if (page_next <= page_max) {
            $.ajax({
                type: 'POST',
                url: ruby_ajax_url,
                data: {
                    action: 'innovation_ruby_ajax_load_more',
                    blog_layout: blog_layout,
                    post_num: post_num,
                    big_first: big_first,
                    page_next: page_next,
                    cate_id: cate_id
                },
                success: function (data) {
                    page_next++;
                    container.data('page-next', page_next);

                    var load_more_animation = container.find('.load-more-animation');
                    load_more_animation.css({'display': 'none'});
                    load_more_animation.css({'visibility': 'hidden'});
                    load_more_animation.css({'opacity': 0});

                    ruby_ajax_post_response(container, data);

                    container.find('.btn-load-more').delay(600).animate({opacity: 1}, 200);

                }
            });
        }
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * add response data
     * @param container
     * @param data
     */
    function ruby_ajax_post_response(container, data) {

        var post_data = $.parseJSON(data);

        //append content
        container.find('.ruby-ajax-wrap:last').after(post_data);

        setTimeout(function () {
            ruby_reinitiate_function();
        }, 600);
    }


    /**-------------------------------------------------------------------------------------------------------------------------
     * re initiate all function after ajax
     */
    function ruby_reinitiate_function() {

        //remove event handle
        $(document).off();
        ruby.html.off();

        //recall function
        ruby_document_ready_reload();
    }

})(jQuery);
