define([
    'jquery',
    'text!templates/indexTickets.html',
    'modules/indexTurntable',
    'utils',
    'http',
    'urls',
    'temp'
], function ($, temp, indexTurntable, utils, http, urls) {
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
    $el.on('click', '.operation-box .draw', function (event) {
        event.preventDefault();
        const $this = $(this);
        const item = $this.data('item');
        indexTurntable.show(item);
    });

    return {
        doInit(loc, cnt) {
            console.log('ticket do init');
            http.get(urls.getUserLotto, {
                friendCnt: cnt
            }, function (result) {
                if (result) {
                    let num = cnt - result.initFriends;
                    const status = result.lotteryStatus || {};
                    let prize = {};
                    if (result.lotteryRecord) {
                        for (let key in result.lotteryRecord) {
                            const item = result.lotteryRecord[key];
                            prize[key] = utils.getPrizeById(item);
                        }
                    }
                    // TODO 测试奖品
                    // status['001'] = 2;
                    // prize['001'] = 1;
                    // status['002'] = 1;
                    // prize['002'] = 2;
                    // num = 10;
                    // 语言
                    const ticketLoc = loc.ticket;
                    $el.html('');
                    // 渲染页面
                    $.tmpl(temp, {
                        ticketLoc,
                        num: num < 0 ? 0 : num,
                        prize,
                        status
                    }).appendTo($el);
                    // 分享按钮
                    $el.on('click', '.operation-box .win', function (event) {
                        event.preventDefault();
                        utils.share(loc.share, window.USERNAME);
                    });
                }
            });
        }
    }
});