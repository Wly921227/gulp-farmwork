define([
    'jquery',
    'text!templates/indexTurntable.html',
    'text!templates/indexResult.html',
    'utils',
    'http',
    'urls',
    'temp'
], function ($, temp, resultTemp, utils, http, urls) {
    let num = 0;
    let loc = {};
    let src = '';
    let item = '';
    let indexTickets = {};
    let locCode = '';
    let SHARE = {};

    const $el = $('#indexTurntable');
    const $html = $('html');
    const TURNTABLE_DEG = {
        1: 5,
        2: 1,
        3: 2,
        4: 3,
        5: 4,
        6: 6,
    };
    temp = utils.tempRemoveBlank(temp);
    resultTemp = utils.tempRemoveBlank(resultTemp);

    const hide = () => {
        if ($html.attr('class').indexOf('no-scroll') > -1)
            $html.toggleClass('no-scroll');

        $el.find('.index-turntable').hide();
        utils.removeBackListener();
    };
    const show = (_item) => {
        item = _item;
        if (num) {
            $el.html('');
            $.tmpl(temp, {src, loc}).appendTo($el);
            num = 0;
        }
        // 移除动画
        const $turntable = $el.find('.turntable');
        $turntable.css('-webkit-transform', 'rotateZ(0deg)');
        $turntable.css('transform', 'rotateZ(0deg)');

        if (!$html.attr('class') || $html.attr('class').indexOf('no-scroll') === -1)
            $html.toggleClass('no-scroll');

        utils.backListener(hide);
        const $discShow = $el.find('.disc-show');
        if ($discShow.is(':hidden'))
            $discShow.show();
        const $prizeShow = $el.find('.prize-show');
        if (!$prizeShow.is(':hidden'))
            $discShow.hide();

        $el.find('.index-turntable').show();
        // 箭头闪现
        arrowFlash(3, 300);
    };
    const setBtnClass = (pre, next) => {
        const $operation = $el.find('.opt-btn');
        if ($operation.hasClass(pre)) {
            $operation.toggleClass(pre);
            $operation.toggleClass(next);
        }
    };
    const showPrizes = (num) => {
        const $turntable = $el.find('.index-turntable');
        if ($turntable.is(':hidden'))
            $turntable.show();
        const $discShow = $el.find('.disc-show');
        if (!$discShow.is(':hidden'))
            $discShow.hide();
        // 绑定返回事件
        utils.backListener(hide);
        // 显示关闭按钮
        $el.find('.close').show();
        // 分享文案设置
        if (num > 0 && num <= 4) {
            SHARE = {
                title: loc.winShare.title(num),
                desc: loc.winShare.desc()
            };
        } else {
            SHARE = {
                title: loc.share.title(),
                desc: loc.share.desc()
            };
        }

        if (!$html.attr('class') || $html.attr('class').indexOf('no-scroll') === -1)
            $html.toggleClass('no-scroll');

        const $prizeShow = $el.find('.prize-show');
        $prizeShow.html('');
        $.tmpl(resultTemp, {num, item, loc: loc.prizeTip, locCode}).appendTo($prizeShow);
    };
    const getRotateZDeg = (num) => {
        let offset = 0;
        if (num === 6) {
            offset = parseInt(Math.random() * 10 + 10);
        } else {
            offset = parseInt(Math.random() * 20);
        }

        console.log('offset: ', offset);
        offset = offset % 2 ? offset : offset * -1;

        return 390 - 60 * num + 720 + offset;
    };
    const arrowFlash = (num, time) => {
        if (num >= 0) {
            setBtnClass('pointer-icon', 'pointer-flash-icon');
            setTimeout(function () {
                setBtnClass('pointer-flash-icon', 'pointer-icon');
            }, time);
            setTimeout(function () {
                arrowFlash(num - 1, time);
            }, time * 2);
        }
    };
    const animate = (num) => {
        const $turntable = $el.find('.turntable');
        const $operation = $el.find('.opt-btn');
        // 随机角度
        const deg = getRotateZDeg(TURNTABLE_DEG[num]);
        console.log('num: ', num);
        console.log('deg: ', deg);

        $turntable.css('-webkit-transform', `rotateZ(${deg}deg)`);
        $turntable.css('transform', `rotateZ(${deg}deg)`);
        setTimeout(function () {
            if (num === 5) {
                setBtnClass('pointer-run-icon', 'pointer-icon');
                $operation.addClass('operation');
                // 显示关闭按钮
                $el.find('.close').show();
            } else {
                setBtnClass('pointer-run-icon', 'pointer-action-icon');
                setTimeout(function () {
                    showPrizes(num);
                }, 1500);
            }
        }, 4000);
    };

    // 按钮按下事件
    $el.on('touchstart', '.operation', function () {
        setBtnClass('pointer-icon', 'pointer-action-icon');
    });
    $el.on('touchend', '.operation', function () {
        setBtnClass('pointer-action-icon', 'pointer-icon');
    });
    // 开始抽讲
    $el.on('click', '.operation', function (event) {
        const $turntable = $el.find('.turntable');
        const $operation = $el.find('.opt-btn');
        event.preventDefault();
        // 开始按钮样式
        setBtnClass('pointer-icon', 'pointer-run-icon');
        // 移除停止动画
        if ($turntable.attr('class').indexOf('animate') > -1) {
            $turntable.toggleClass('animate');
        }
        $turntable.css('-webkit-transform', 'rotateZ(0deg)');
        $turntable.css('transform', 'rotateZ(0deg)');
        // 移除抽奖按钮事件
        $operation.removeClass('operation');
        // 取消返回按钮事件
        utils.removeBackListener();
        // 隐藏关闭按钮
        $el.find('.close').hide();
        // 抽奖事件
        console.log(item);
        if (item === '001') {
            ga('send', 'event', '开始抽奖', '第一次抽奖');
        } else {
            ga('send', 'event', '开始抽奖', '第二次抽奖');
        }

        http.get(urls.sendDraw, {
            friendCnt: window.FRIENDCNT,
            item: item
        }, function (result) {
            if (result) {
                if (result.status === 1) {
                    num = utils.getPrizeById(5);
                } else if (result.status === 3) {
                    num = utils.getPrizeById(6);
                } else if (result.status === 2) {
                    num = utils.getPrizeById(result.prizeId);
                } else {
                    num = utils.getPrizeById(6);
                }
            }
            // TODO
            // num = 5;
            if (num === 1) {
                ga('send', 'event', '抽奖结果', 'iPhone');
            }
            else if (num === 2) {
                ga('send', 'event', '抽奖结果', '100话费卡');
            }
            else if (num === 3) {
                ga('send', 'event', '抽奖结果', '50话费卡');
            }
            else if (num === 4) {
                ga('send', 'event', '抽奖结果', '10话费卡');
            }
            else if (num === 5) {
                ga('send', 'event', '抽奖结果', '再抽一次');
            }
            else if (num === 6) {
                ga('send', 'event', '抽奖结果', '未中奖');
            }
            else if (num === 1) {
                ga('send', 'event', '抽奖结果', 'iPhone');
            }

            // 转盘动画
            if ($turntable.attr('class').indexOf('animate') === -1) {
                $turntable.toggleClass('animate');
            }
            animate(num);
            // 重置抽奖票
            indexTickets.doInit(loc, window.FRIENDCNT, locCode);
        }, function (response) {
            if (response.status !== 200) {
                console.log('http error');
                alert(INDEX_LOC.error);
                // 显示关闭按钮
                $el.find('.close').show();
                setBtnClass('pointer-run-icon', 'pointer-icon');
                $operation.addClass('operation');
            }
        });
    });
    // 关闭按钮
    $el.on('click', '.close', function (event) {
        event.preventDefault();
        hide();
    });

    // 分享按钮触摸
    $el.on('touchstart', '.share-btn', function () {
        const $this = $(this);
        $this.toggleClass('icon-share');
        $this.toggleClass('icon-share-action');
    });
    $el.on('touchend', '.share-btn', function () {
        const $this = $(this);
        $this.toggleClass('icon-share');
        $this.toggleClass('icon-share-action');
    });
    $el.on('click', '.share-btn', function (event) {
        event.preventDefault();
        if (num > 0 && num <= 4) {
            ga('send', 'event', '分享', '中奖页面分享');
        } else {
            ga('send', 'event', '分享', '未中奖页面分享');
        }
        utils.share(SHARE, window.USERNAME);
    });

    return {
        doInit(_loc, turntableImg, _indexTickets, _locCode) {
            src = turntableImg.src;
            loc = _loc;
            locCode = _locCode;
            loc.prizeTip.tips = loc.prizeTip.tips.split('\n');
            loc.prizeTip.cardTip = loc.prize.tip;
            indexTickets = _indexTickets;
            $.tmpl(temp, {src, loc: loc.prizeTip}).appendTo($el);
        },
        show,
        hide,
        showPrizes
    }
});