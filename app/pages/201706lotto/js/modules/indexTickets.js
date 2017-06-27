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
    let loc = {};
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
    // 未中奖分享按钮
    $el.on('click', '.operation-box .un-win', function (event) {
        event.preventDefault();
        const share = {
            title: loc.share.title(),
            desc: loc.share.desc()
        };
        utils.share(share, window.USERNAME);
    });
    // 分享按钮
    $el.on('click', '.operation-box .win', function (event) {
        event.preventDefault();
        const prize = parseInt($(this).data('prize'));
        // 显示抽奖结果
        indexTurntable.showPrizes(prize);
        // const share = {
        //     title: loc.winShare.title(prize),
        //     desc: loc.share.desc()
        // };
        // utils.share(share, window.USERNAME);
    });

    return {
        doInit(_loc, cnt) {
            loc = _loc;
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
                    // status['001'] = 1;
                    // prize['001'] = 1;
                    // status['002'] = 3;
                    // prize['002'] = 3;
                    // num = 2;
                    // 语言
                    const ticketLoc = loc.ticket;
                    const tip = loc.prize.tip;
                    $el.html('');
                    // 渲染页面
                    $.tmpl(temp, {
                        ticketLoc,
                        num: num < 0 ? 0 : num,
                        prize,
                        status,
                        tip
                    }).appendTo($el);
                }
            });
        }
    }
});