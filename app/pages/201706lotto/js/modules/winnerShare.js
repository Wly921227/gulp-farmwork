define([
    'jquery',
    'text!templates/winnerShare.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#winnerShare');
    temp = utils.tempRemoveBlank(temp);

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

    return {
        doInit(loc) {
            $.tmpl(temp, {
                loc
            }).appendTo($el);
            $el.on('click', '.btn', function (event) {
                event.preventDefault();
                window.location.href = './index.html'
            });
        }
    }
});