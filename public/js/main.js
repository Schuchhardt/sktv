if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i ['test'](navigator['userAgent'])) {
    $('#video')['css']({
        "\x6F\x70\x61\x63\x69\x74\x79": '0.0'
    })
};
$(window)['load'](function() {
    $('.loader-icon')['delay'](500)['fadeOut']();
    $('#page-loader')['delay'](700)['fadeOut']('slow');
    setTimeout(function() {
        $('header .social-icons')['addClass']('animated fadeInDown');
        $('header .logo')['addClass']('animated fadeInDown');
        $('header .typed')['addClass']('animated fadeInUp');
        $('header p')['addClass']('animated fadeInUp');
        $('header .countdown')['addClass']('animated fadeInUp')
    })
});
$('header')['backstretch']('images/slides/background1.jpg');

$(function() {
    var _0x13c8x2 = 'Nov 31, 2017 20:39:00';
    $('.countdown')['countdown']({
        date: _0x13c8x2,
        render: function(_0x13c8x3) {
            $(this['el'])['html']('<div>' + this['leadingZeros'](_0x13c8x3['days'], 3) + ' <span>dias</span></div><div>' + this['leadingZeros'](_0x13c8x3['hours'], 2) + ' <span>horas</span></div><div>' + this['leadingZeros'](_0x13c8x3['min'], 2) + ' <span>minutos</span></div><div>' + this['leadingZeros'](_0x13c8x3['sec'], 2) + ' <span>segundos</span></div>')
        }
    })
});
$(function() {
    $('#submit')['on']('click', function() {
        $('#ajax-contact-form')['validate']({
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                msg: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: '<i class=\'fa fa-exclamation-triangle name\'></i>'
                },
                email: {
                    required: '<i class=\'fa fa-exclamation-triangle email\'></i>',
                    email: '<i class=\'fa fa-exclamation-triangle email\'></i>'
                },
                msg: {
                    required: '<i class=\'fa fa-exclamation-triangle message\'></i>'
                }
            },
            submitHandler: function(_0x13c8x4) {
                var _0x13c8x5 = $('input#name')['val']();
                var _0x13c8x6 = $('input#email')['val']();
                var _0x13c8x7 = $('textarea#msg')['val']();
                var _0x13c8x8 = '&name=' + _0x13c8x5 + '&email=' + _0x13c8x6 + '&msg=' + _0x13c8x7;
                $['ajax']({
                    type: 'POST',
                    url: 'php/contact.php',
                    data: _0x13c8x8,
                    success: function(_0x13c8x3) {
                        if (_0x13c8x3 == 'OK') {
                            var _0x13c8x9 = '<div class="notification_ok"><i class="fa fa-check"></i> Your email was sent. Thanks!</div>';
                            $('#ajax-contact-form')['find']('input[type=text], input[type=email], textarea')['val']('')
                        } else {
                            _0x13c8x9 = _0x13c8x3
                        };
                        $('#note')['html'](_0x13c8x9)
                    }
                });
                return false
            }
        })
    })
});

var video = $('#video')['data']('video');
var mute = $('#video')['data']('mute');
$('#video').YTPlayer({
    videoId: video,
    mute: mute,
    fitToBackground: true
});
jQuery(document)['ready'](function() {
    
})