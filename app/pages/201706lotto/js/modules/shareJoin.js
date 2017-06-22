define([
    'jquery',
    'text!templates/shareJoin.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#shareJoin');
    temp = utils.tempRemoveBlank(temp);
    const hide = () => {
        $('html').toggleClass('no-scroll');
        $el.find('.share-join').hide();
        utils.removeBackListener();
    };
    const show = () => {
        $('html').toggleClass('no-scroll');
        $el.find('.share-join').show();
        utils.backListener(hide);
    };

    // 下载按钮按下事件
    $el.on('touchstart', '.step-1 .btn', function () {
        const $this = $(this);
        $this.toggleClass('action');
    });
    $el.on('touchend', '.step-1 .btn', function () {
        const $this = $(this);
        $this.toggleClass('action');
    });
    $el.on('click', '.step-1 .btn', utils.downloadYeeCall);

    $el.on('click', '.close', hide);

    // 参加活动按下
    $('body').on('click', '.index-share .btn', function () {
        location.href = 'yeecallinvite://';
    });

    return {
        doInit(loc) {
            $.tmpl(temp, {join: loc.join}).appendTo($el);
        },
        show,
        hide
    }
});