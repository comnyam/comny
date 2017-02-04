$(document).ready(function() {
    let at = '@';
    let email = $('.email');
    email.html('mail' + at + window.location.hostname);
    $('.email').attr('href', 'mailto:' + email.html());
    $('.top-background').flowtype({
       minimum : 1,
       maximum : 600
    });
    /*
    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

    });
    */

    var slider = $('#slider').tinycarousel({
        interval: true,
        buttons: false,
        infinite: true,
        intervalTime: 1000
    }).data('plugin_tinycarousel');

    var popover = $('[data-toggle="popover"]');
    popover.popover();
    popover.on('show.bs.popover', function () {
        slider.stop();
    });
    popover.on('hidden.bs.popover', function () {
        slider.start();
    });

    $('.fancybox-media').fancybox({
		maxWidth	: 768,
		maxHeight	: 1024,
        padding     : 2,
		fitToView	: false,
		width		: '95%',
		height		: '95%',
		autoSize	: false,
		closeClick	: true,
		openEffect	: 'fade',
		closeEffect	: 'fade',
        helpers		: {
			title	: { type : 'inside' },
			buttons	: {}
		}
	});

    var imageTpl = '<img class="fancybox-image" src="{href}" alt="" />' +
        '<div class="thumb-number">{number}</div>';
    $('.fancybox-thumbnail').fancybox({
		prevEffect	: 'fade',
		nextEffect	: 'fade',
        openEffect	: 'fade',
		closeEffect	: 'fade',
        maxWidth	: 1024,
		maxHeight	: 768,
        padding     : 0,
		helpers	    : {
			title	: {
				type: 'over'
			}
		},
        afterLoad: function() {
            var number = $(this.element).attr('data-number');
            $.extend(true, this, {
                tpl: {
                    image: imageTpl.replace('{number}', number)
                }
            });
        },
        beforeShow: function () {
            /* Disable right click */
            $.fancybox.wrap.bind('contextmenu', function (e) {
                    return false;
            });
        }
	});
    $('.fancybox-thumbnail').bind('contextmenu', function (e) {
            return false;
    });

});
