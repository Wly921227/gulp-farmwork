window.define([
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
    };
    const show = () => {
        $('html').toggleClass('no-scroll');
        $el.find('.share-join').show();
    };

    // 分享按钮按下事件
    $el.on('touchstart', '.step-1 .btn', function () {
        const $this = $(this);
        $this.toggleClass('action');
    });
    $el.on('touchend', '.step-1 .btn', function () {
        const $this = $(this);
        $this.toggleClass('action');
    });

    $el.on('click', '.close', hide);

    return {
        doInit(loc) {
            $.tmpl(temp, {join: loc.join}).appendTo($el);
        },
        show,
        hide
    }
});