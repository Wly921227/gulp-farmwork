define([
    'jquery',
    'text!templates/indexShare.html',
    'utils',
    'temp'
], function ($, temp, utils) {
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
    return {
        doInit(loc, shareJoin) {
            $.tmpl(temp, {
                loc
            }).appendTo($el);
            let username = '';
            utils.getUserName(function (name) {
                username = name;
            });
            $el.on('click', '.btn', function (event) {
                event.preventDefault();
                if (shareJoin) {
                    shareJoin.show();
                } else {
                    utils.share(username);
                }
            });
        }
    }
});