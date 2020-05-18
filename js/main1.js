document.addEventListener('WeixinJSBridgeReady', () => {
    document.getElementById('audio').play()
}, false)

$('.audio').on('click', function () {
    var _this = $(this);
    if (_this.hasClass('rotate')) {
        _this.removeClass('rotate');
        $('#audio')[0].pause()
    } else {
        _this.addClass('rotate')
        $('#audio')[0].play()
    }
})

$('.page').on('click', '.btn', function () {
    var _this = $(this);
    _this.parent().css({ 'transform': 'translate(-100%)', 'transition': 'all 1s' })
    var currentBody = parseFloat($('body').css('background-position'))
    if (_this.hasClass('returnBtn')) {
        $('body').css({
            'background-position': 'left',
            'transition': 'all 10s'
        });
        setTimeout(function () {
            location.reload();
        }, 10000)
        return;
    }
    if (_this.hasClass('toEnd')) {
        $('body').css({
            'background-position': 'right',
            'transition': 'all 10s'
        });
        $('.boat').fadeOut();
        $('.pageEnd').fadeIn();
        setTimeout(function () {
            _this.parent().removeClass('current').next().addClass('current')
        }, 10000)
        return;
    }
    $('body').css({
        'background-position': currentBody + 6 + '%',
        'transition': 'all 5s'
    })
    setTimeout(function () {
        _this.parent().removeClass('current').next().addClass('current')
        if (_this.parent().next().hasClass('page2')) {
            $('.goose').fadeIn(2000, function () {
                $('.page2 .font').fadeIn(1000)
            });
            setTimeout(function () {
                $('.goose').css({ 'transform': 'translate(200%)', 'transition': 'all 2s' })
                $('.goose').hide(3000)
            }, 2000)
        }
    }, 4000)
})

// page1
$('.page1 .flower').fadeIn(2000, function () {
    $('.page1 .bird').fadeIn(2000, function () {
        $('.page .yun1').fadeIn(1000);
        $('.page .yun2').fadeIn(1000, function () {
            $('.page .font1').fadeIn(1000, function () {
                $('.page .font2_div').fadeIn()
            })
        })
    })
})
