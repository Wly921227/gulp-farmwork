define([
    'jquery',
    'text!templates/indexTurntable.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    let num = 0;
    let loc = {};
    let src = '';

    const $el = $('#indexTurntable');
    const TURNTABLE_DEG = {
        1: 5,
        2: 1,
        3: 2,
        4: 3,
        5: 4,
        6: 6,
    };
    temp = utils.tempRemoveBlank(temp);
    const hide = () => {
        $('html').toggleClass('no-scroll');
        $el.find('.index-turntable').fadeOut(200);
        utils.removeBackListener();
    };
    const show = () => {
        if (num) {
            $el.html('');
            $.tmpl(temp, {src, loc}).appendTo($el);
            num = 0;
        }
        $('html').toggleClass('no-scroll');
        $el.find('.index-turntable').fadeIn(200);
        utils.backListener(hide);
    };
    const setBtnClass = (pre, next) => {
        const $operation = $el.find('.opt-btn');
        if ($operation.hasClass(pre)) {
            $operation.toggleClass(pre);
            $operation.toggleClass(next);
        }
    };
    const showPrizes = (num) => {
        const $prizeShow = $('.prize-show');
        $('.disc-show').hide();
        if (num && num !== 6) {
            $prizeShow.find(`.prizes.prizes-${num}`).css('display', 'inline-block');
            $prizeShow.find(`.light-icon`).css('display', 'inline-block');
        } else {
            $prizeShow.find(`.no-light-icon`).css('display', 'inline-block');
        }
        $prizeShow.show();
    };
    const getRotateZDeg = (num) => {
        let offset = 0;
        if (num === 6) {
            offset = parseInt(Math.random() * 5 + 20);
        } else {
            offset = parseInt(Math.random() * 30);
        }

        offset = offset % 2 ? offset : offset * -1;

        return 390 - 60 * num + 720 + offset;
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
        $turntable.toggleClass('running');
        // 开始按钮样式
        setBtnClass('pointer-icon', 'pointer-run-icon');
        // 移除停止动画
        $turntable.css('transform', `rotateZ(0deg)`);
        // 移除抽奖按钮事件
        $operation.removeClass('operation');
        setTimeout(function () {
            // TODO 随机奖品 超时时间 3s
            const id = parseInt(Math.random() * 6 + 1);
            num = utils.getPrizeById(id);
        }, 3000);
    });
    // 转盘动画停止事件
    $el.on('webkitAnimationEnd', '.turntable', function () {
        const $turntable = $el.find('.turntable');
        const $operation = $el.find('.opt-btn');
        if (num && $turntable.hasClass('running')) {
            $turntable.toggleClass('running');
            // 随机角度
            console.log(TURNTABLE_DEG[num]);
            const deg = getRotateZDeg(TURNTABLE_DEG[num]);
            setTimeout(function () {
                $turntable.css('transform', `rotateZ(${deg}deg)`);
                setTimeout(function () {
                    // TODO 是否是再抽一次，取消抽奖按钮事件
                    if (num === 5) {
                        setBtnClass('pointer-run-icon', 'pointer-icon');
                        $operation.addClass('operation');
                    } else {
                        setBtnClass('pointer-run-icon', 'pointer-action-icon');
                        setTimeout(function () {
                            showPrizes(num);
                        }, 500);
                    }
                }, 3500);
            }, 20);
        }
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
        utils.share(window.USERNAME);
    });

    return {
        doInit(locTurntable, turntableImg) {
            src = turntableImg.src;
            loc = locTurntable.prizeTip;
            $.tmpl(temp, {src, loc}).appendTo($el);
        },
        show,
        hide
    }
});