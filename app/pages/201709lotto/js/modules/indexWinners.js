define([
    'jquery',
    'text!templates/indexWinners.html',
    'utils',
    'http',
    'urls',
    'modules/indexScrollBar',
    'temp'
], function ($, temp, utils, http, urls, indexScrollBar) {
    const $el = $('#indexWinners');
    temp = utils.tempRemoveBlank(temp);
    const falseData = utils.winnerList || [];
    const now = new Date().getTime();

    return {
        doInit(loc) {
            const winners = loc.winners;
            const format = 'YYYY.MM.DD H:M';
            $.tmpl(temp, {
                winners,
                list: []
            }).appendTo($el);
            http.get(urls.getWinnerList, {}, function (result) {
                let list = [];
                if (result && Object.getOwnPropertyNames(result).length > 0) {
                    for (const key in result) {
                        const item = result[key];
                        list.push({
                            id: item.uid,
                            time: utils.dateFormat(item.ctime, format),
                            ctime: item.ctime
                        });
                    }
                }
                $.each(falseData, function (key, value) {
                    const ctime = new Date(value.ctime).getTime();
                    if (ctime < now) {
                        list.push({
                            id: value.uid,
                            time: utils.dateFormat(ctime, format),
                            ctime: ctime
                        })
                    }
                });

                list.sort(function (a, b) {
                    return b.ctime - a.ctime;
                });

                indexScrollBar.doInit(list, winners);

                for (let i = 0; i < 3; i++) {
                    list.push(0);
                }
                $el.html('');
                $.tmpl(temp, {
                    winners,
                    list
                }).appendTo($el);
                // 滚动动画
                const $move = $el.find('.winner-list .move');
                const $first = $el.find('.winner-list .move .first');
                const moveHeight = $first.height();
                const speed = .3;
                let top = 0;
                const animate = function () {
                    if (Math.abs(top) <= moveHeight) {
                        top -= speed;
                    } else {
                        top = 0
                    }
                    $move.css('-webkit-transition', `-webkit-translate3d(0, ${top}px, 0)`);
                    $move.css('transform', `-webkit-translate3d(0, ${top}px, 0)`);
                    $move.css('-webkit-transition', `translate3d(0, ${top}px, 0)`);
                    $move.css('transform', `translate3d(0, ${top}px, 0)`);
                };

                const animateLow = function () {
                    if (Math.abs(top) <= moveHeight) {
                        top -= speed;
                    } else {
                        top = 0
                    }
                    $move.css('top', `${top}px`);
                };

                if (utils.isAndroidLow) {
                    $move.css('position', 'absolute');
                    setInterval(animateLow, 10);
                } else {
                    setInterval(animate, 10);
                }
            });
        }
    }
});