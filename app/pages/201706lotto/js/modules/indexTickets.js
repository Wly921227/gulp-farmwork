window.define([
    'jquery',
    'text!templates/indexTickets.html',
    'temp'
], function ($, temp) {
    const $el = $('#indexTickets');

    // 按钮按下事件
    $el.on('touchstart', '.operation-box .btn', function (event) {
        event.preventDefault();
        const $this = $(this);
        $this.toggleClass('icon-draw-btn');
        $this.toggleClass('icon-draw-btn-action');
    });
    $el.on('touchend', '.operation-box .btn', function (event) {
        event.preventDefault();
        const $this = $(this);
        $this.toggleClass('icon-draw-btn-action');
        $this.toggleClass('icon-draw-btn');
    });
    $el.on('click', '.operation-box .draw', function (event) {
        event.preventDefault();
        // TODO 抽奖页面
    });
    $el.on('click', '.operation-box .win', function (event) {
        event.preventDefault();
        // TODO 分享
    });


    return {
        doInit(loc) {
            // TODO 人数
            const num = 7;
            // TODO 奖品 0, 1
            const prize = 4;
            // 语言
            const ticketLoc = loc.ticket;
            $.tmpl(temp, {
                ticketLoc,
                num,
                prize
            }).appendTo($el);
        }
    }
});