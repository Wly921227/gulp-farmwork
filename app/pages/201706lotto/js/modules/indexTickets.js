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
    // 抽奖按钮闪动
    const btnFlash = (num, time) => {
        const $btn = $el.find('.operation-box .draw');
        if (num >= 0) {
            $btn.toggleClass('icon-draw-btn');
            $btn.toggleClass('icon-draw-btn-action');
            setTimeout(function () {
                $btn.toggleClass('icon-draw-btn-action');
                $btn.toggleClass('icon-draw-btn');
            }, time);
            setTimeout(function () {
                btnFlash(num - 1, time);
            }, time * 2);
        }
    };
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
        if (item === '001') {
            ga('send', 'event', '卡券抽奖', '第一张卡券');
        } else {
            ga('send', 'event', '卡券抽奖', '第二张卡券');
        }
        indexTurntable.show(item);
    });
    // 未中奖分享按钮
    $el.on('click', '.operation-box .un-win', function (event) {
        event.preventDefault();
        const share = {
            title: loc.share.title(),
            desc: loc.share.desc()
        };
        ga('send', 'event', '分享', '未中奖奖券分享');

        utils.share(share);
    });
    // 分享按钮
    $el.on('click', '.operation-box .win', function (event) {
        event.preventDefault();
        const prize = parseInt($(this).data('prize'));
        // 显示抽奖结果
        indexTurntable.showPrizes(prize);
    });

    return {
        doInit(_loc, cnt, _locCode) {
            loc = _loc;
            console.log('ticket do init');
            http.get(urls.getUserLotto, {
                friendCnt: cnt
            }, function (result) {
                // result = {}
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
                    // status['002'] = 3;
                    // prize['002'] = 2;
                    // num = 10;
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
                        tip,
                        loc: _locCode
                    }).appendTo($el);
                    // 抽奖按钮闪现
                    setTimeout(function () {
                        btnFlash(2, 300);
                    }, 3000);
                }
            });
        }
    }
});