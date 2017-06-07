window.define([
    'jquery',
    'text!templates/indexTurntable.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#indexTurntable');
    const TURNTABLE_DEG = {
        1: 6,
        2: 1,
        3: 2,
        4: 3,
        5: 4,
        6: 5,
    };
    temp = utils.tempRemoveBlank(temp);
    const hide = () => {
        $('html').toggleClass('no-scroll');
        $el.find('.index-turntable').fadeOut(200);
    };
    const setBtnClass = (pre, next) => {
        const $operation = $el.find('.opt-btn');
        if ($operation.hasClass(pre)) {
            $operation.toggleClass(pre);
            $operation.toggleClass(next);
        }
    };

    let num = 0;
    let src = '';
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
        // 移除抽奖按钮事件
        $operation.removeClass('operation');
        setTimeout(function () {
            // TODO 随机奖品 超时时间 3s
            const id = parseInt(Math.random() * 6 + 1);
            num = TURNTABLE_DEG[utils.getPrizeById(id)];
        }, 3000);
    });
    // 转盘动画停止事件
    $el.on('webkitAnimationEnd', '.turntable', function () {
        const $turntable = $el.find('.turntable');
        const $operation = $el.find('.opt-btn');
        if (num && $turntable.hasClass('running')) {
            $turntable.toggleClass('running');
            $turntable.toggleClass(`stop-${num}`);
            // TODO 是否是再抽一次，取消抽奖按钮事件
            if (num === 4) {
                $operation.addClass('operation');
            }
        } else if (num === 4) {
            setBtnClass('pointer-run-icon', 'pointer-icon');
            return false;
        } else {
            setBtnClass('pointer-run-icon', 'pointer-action-icon');
            return false;
        }
    });
    // 关闭按钮
    $el.on('click', '.close', function (event) {
        event.preventDefault();
        hide();
    });

    return {
        doInit(turntableImg) {
            src = turntableImg.src;
            $.tmpl(temp, {src}).appendTo($el);
        },
        show() {
            if (num) {
                $el.html('');
                $.tmpl(temp, {src}).appendTo($el);
                num = 0;
            }
            $('html').toggleClass('no-scroll');
            $el.find('.index-turntable').fadeIn(200);
        },
        hide
    }
});