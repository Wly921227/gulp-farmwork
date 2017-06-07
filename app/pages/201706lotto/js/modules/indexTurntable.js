window.define([
    'jquery',
    'text!templates/indexTurntable.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#indexTurntable');
    temp = utils.tempRemoveBlank(temp);
    const hide = () => {
        $('html').toggleClass('no-scroll');
        $el.find('.index-turntable').fadeOut(200);
    };
    // 按钮按下事件
    $el.on('touchstart', '.operation', function () {
        const $this = $(this);
        $this.toggleClass('pointer-icon');
        $this.toggleClass('pointer-action-icon');
    });
    $el.on('touchend', '.operation', function () {
        const $this = $(this);
        $this.toggleClass('pointer-action-icon');
        $this.toggleClass('pointer-icon');
    });
    // 关闭按钮
    $el.on('click', '.close', function (event) {
        event.preventDefault();
        hide();
    });

    return {
        doInit(turntableImg) {
            $.tmpl(temp, {turntableImg}).appendTo($el);
        },
        show() {
            $('html').toggleClass('no-scroll');
            $el.find('.index-turntable').fadeIn(200);
        },
        hide
    }
});