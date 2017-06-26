define([
    'jquery',
    'text!templates/shareJoin.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#shareJoin');
    const $html = $('html');
    temp = utils.tempRemoveBlank(temp);
    const hide = () => {
        if ($html.attr('class').indexOf('no-scroll') > -1)
            $html.toggleClass('no-scroll');
        $el.find('.share-join').hide();
        utils.removeBackListener();
    };
    const show = () => {
        if (!$html.attr('class') || $html.attr('class').indexOf('no-scroll') === -1)
            $html.toggleClass('no-scroll');
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

    return {
        doInit(loc) {
            $.tmpl(temp, {join: loc.join}).appendTo($el);
        },
        show,
        hide
    }
});