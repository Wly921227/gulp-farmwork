define([
    'jquery',
    'text!templates/indexWinners.html',
    'utils',
    'http',
    'urls',
    'temp',
], function ($, temp, utils, http, urls) {
    const $el = $('#indexWinners');
    temp = utils.tempRemoveBlank(temp);
    const falseData = [
        {
            ctime: '2017/07/01 09:36',
            prizeId: 2,
            uid: '+971****9331'
        }, {
            ctime: '2017/07/01 10:54',
            prizeId: 2,
            uid: '+91****1321'
        }, {
            ctime: '2017/07/01 12:11',
            prizeId: 4,
            uid: '+967****5431'
        }, {
            ctime: '2017/07/01 14:26',
            prizeId: 1,
            uid: '+63****5136'
        }, {
            ctime: '2017/07/01 15:01',
            prizeId: 3,
            uid: '+63****6244',
        }, {
            ctime: '2017/07/02 12:00',
            prizeId: 2,
            uid: '+1****8486'
        }, {
            ctime: '2017/07/02 12:58',
            prizeId: 3,
            uid: '+852****3754'
        }, {
            ctime: '2017/07/02 16:39',
            prizeId: 3,
            uid: '+962****1290'
        }, {
            ctime: '2017/07/02 19:01',
            prizeId: 3,
            uid: '+81****6523'
        }, {
            ctime: '2017/07/02 19:01',
            prizeId: 3,
            uid: '+81****8245'
        }, {
            ctime: '2017/07/03 15:12',
            prizeId: 2,
            uid: '+965****1178'
        }, {
            ctime: '2017/07/03 20:04',
            prizeId: 2,
            uid: '+92****5590'
        }, {
            ctime: '2017/07/03 20:47',
            prizeId: 2,
            uid: '+968****5110'
        }, {
            ctime: '2017/07/03 22:04',
            prizeId: 3,
            uid: '+92****8543'
        }, {
            ctime: '2017/07/03 23:33',
            prizeId: 3,
            uid: '+49****5178'
        }, {
            ctime: '2017/07/04 06:29',
            prizeId: 3,
            uid: '+62****1278'
        }, {
            ctime: '2017/07/04 09:17',
            prizeId: 3,
            uid: '+91****6453'
        }, {
            ctime: '2017/07/04 10:35',
            prizeId: 3,
            uid: '+971****8382'
        }, {
            ctime: '2017/07/04 13:44',
            prizeId: 3,
            uid: '+852****1382'
        }, {
            ctime: '2017/07/04 20:29',
            prizeId: 3,
            uid: '+886****7647'
        }, {
            ctime: '2017/07/05 10:04',
            prizeId: 3,
            uid: '+971****4615'
        }, {
            ctime: '2017/07/05 13:25',
            prizeId: 3,
            uid: '+63****1573'
        }, {
            ctime: '2017/07/05 15:11',
            prizeId: 2,
            uid: '+91****3794'
        }, {
            ctime: '2017/07/05 18:49',
            prizeId: 3,
            uid: '+62****1576'
        }, {
            ctime: '2017/07/05 23:10',
            prizeId: 2,
            uid: '+66****1357'
        }
    ];

    const now = new Date().getTime();

    return {
        doInit(loc, _loc) {
            const format = _loc === 'ar' ? 'DD/MM/YYYY H:M' : 'YYYY.MM.DD H:M';
            const winnerLoc = loc.winnerList;
            console.log('winners do init');
            http.get(urls.getWinnerList, {}, function (result) {
                let list = [];
                if (result && Object.getOwnPropertyNames(result).length > 0) {
                    for (const key in result) {
                        const item = result[key];
                        list.push({
                            id: item.uid,
                            prize: utils.getPrizeById(item.prizeId),
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
                            prize: value.prizeId,
                            time: utils.dateFormat(ctime, format),
                            ctime: ctime
                        })
                    }
                });

                list.sort(function (a, b) {
                    return b.ctime - a.ctime;
                });
                for (let i = 0; i < 3; i++) {
                    list.push(0);
                }
                $.tmpl(temp, {
                    winnerLoc,
                    list,
                    statement: loc.statement
                }).appendTo($el);

                // 滚动动画
                const $list = $el.find('.winner-list');
                const $move = $el.find('.winner-list .move');
                const $first = $el.find('.winner-list .move .first');
                const listHeight = $list.height();
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