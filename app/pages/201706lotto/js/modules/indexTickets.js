define([
    'jquery',
    'text!templates/indexTickets.html',
    'modules/indexTurntable',
    'utils',
    'temp'
], function ($, temp, indexTurntable, utils) {
    const $el = $('#indexTickets');
    temp = utils.tempRemoveBlank(temp);
    // 按钮按下事件
    $el.on('touchstart', '.operation-box .btn', function () {
        const $this = $(this);
        $this.toggleClass('icon-draw-btn');
        $this.toggleClass('icon-draw-btn-action');
    });
    $el.on('touchend', '.operation-box .btn', function () {
        const $this = $(this);
        $this.toggleClass('icon-draw-btn-action');
        $this.toggleClass('icon-draw-btn');
    });
    $el.on('click', '.operation-box .win', function (event) {
        event.preventDefault();
        // TODO 分享
    });
    $el.on('click', '.operation-box .draw', function (event) {
        event.preventDefault();
        indexTurntable.show();
    });

    return {
        doInit(loc) {
            // TODO 人数
            const num = 7;
            // TODO 奖品 0, 1
            const prize = -1;
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