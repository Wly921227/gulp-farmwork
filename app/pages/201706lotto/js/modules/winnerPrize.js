define([
    'jquery',
    'text!templates/winnerPrize.html',
    'utils',
    'urls',
    'http',
    'temp'
], function ($, temp, utils, urls, http) {
    const $el = $('#winnerPrize');
    temp = utils.tempRemoveBlank(temp);
    const falseData = utils.winnerList;

    return {
        doInit(timeInterval, _loc, loc) {
            const format = _loc === 'ar' ? 'DD/MM/YYYY H:M' : 'YYYY.MM.DD H:M';
            http.get(urls.getWinnerList, {}, function (result) {
                const oneList = [];
                const twoList = [];
                const otherList = [];
                const startTime = new Date(timeInterval.start).getTime();
                const endTime = new Date(timeInterval.end).getTime();

                if (result && Object.getOwnPropertyNames(result).length > 0) {
                    for (const key in result) {
                        const item = result[key];
                        if (item.ctime >= startTime && item.ctime <= endTime) {
                            const winner = {
                                id: item.uid,
                                prize: utils.getPrizeById(item.prizeId),
                                time: utils.dateFormat(item.ctime, format),
                                ctime: item.ctime,
                                head: item.head || './images/default-head.jpg'
                            };
                            if (winner.prize === 1) {
                                oneList.push(winner);
                            } else if (winner.prize === 2) {
                                twoList.push(winner);
                            } else {
                                otherList.push(winner);
                            }
                        }
                    }
                }
                $.each(falseData, function (key, value) {
                    const ctime = new Date(value.ctime).getTime();
                    if (ctime >= startTime && ctime <= endTime) {
                        const winner = {
                            id: value.uid,
                            prize: value.prizeId,
                            time: utils.dateFormat(ctime, format),
                            ctime: ctime,
                            head: value.head || './images/default-head.jpg'
                        };
                        if (winner.prize === 1) {
                            oneList.push(winner);
                        } else if (winner.prize === 2) {
                            twoList.push(winner);
                        } else {
                            otherList.push(winner);
                        }
                    }
                });
                for (let i = 0; i < 3; i++) {
                    otherList.push(0);
                }
                console.log(oneList);
                console.log(twoList);
                console.log(otherList);

                $.tmpl(temp, {
                    oneList,
                    twoList,
                    otherList,
                    loc
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