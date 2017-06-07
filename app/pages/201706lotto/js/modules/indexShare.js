window.define([
    'jquery',
    'text!templates/indexShare.html',
    'temp'
], function ($, temp) {
    const $el = $('#indexShare');

    // 分享按钮按下事件
    $el.on('touchstart', '.btn', function () {
        const $this = $(this);
        $this.toggleClass('icon-share');
        $this.toggleClass('icon-share-action');
    });
    $el.on('touchend', '.btn', function () {
        const $this = $(this);
        $this.toggleClass('icon-share-action');
        $this.toggleClass('icon-share');
    });
    $el.on('click', '.btn', function () {
        // TODO 分享按钮
    });

    return {
        doInit(loc) {
            $.tmpl(temp, {
                loc
            }).appendTo($el);
        }
    }
});