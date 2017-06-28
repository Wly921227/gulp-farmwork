define([
    'jquery',
    'text!templates/indexWinners.html',
    'utils',
    'http',
    'urls',
    'temp',
    'marquee'
], function ($, temp, utils, http, urls) {
    const $el = $('#indexWinners');
    temp = utils.tempRemoveBlank(temp);
    const falseData = [
        {
            ctime: '2017/07/01 09:36',
            prizeId: "5944a8ecbd85b11169f8cc1d",
            uid: "+971****9331"
        }, {
            ctime: '2017/07/01 10:54',
            prizeId: "5944a8ecbd85b11169f8cc1d",
            uid: "+91****1321"
        }, {
            ctime: '2017/07/01 12:11',
            prizeId: "5944a8ecbd85b11169f8cc1f",
            uid: "+967****5431"
        }, {
            ctime: '2017/07/01 14:26',
            prizeId: "5944a8ecbd85b11169f8cc1c",
            uid: "+63****5136"
        }, {
            ctime: '2017/07/01 15:01',
            prizeId: "5944a8ecbd85b11169f8cc1e",
            uid: "+63****6244",
        }, {
            ctime: '2017/07/02 12:00',
            prizeId: "5944a8ecbd85b11169f8cc1d",
            uid: "+1****8486"
        }, {
            ctime: '2017/07/02 12:58',
            prizeId: "5944a8ecbd85b11169f8cc1e",
            uid: "+852****3754"
        }, {
            ctime: '2017/07/02 16:39',
            prizeId: "5944a8ecbd85b11169f8cc1e",
            uid: "+962****1290"
        }, {
            ctime: '2017/07/02 19:01',
            prizeId: "5944a8ecbd85b11169f8cc1e",
            uid: "+81****6523"
        }, {
            ctime: '2017/07/02 19:01',
            prizeId: "5944a8ecbd85b11169f8cc1e",
            uid: "+81****8245"
        }, {
            ctime: '2017/07/03 15:12',
            prizeId: "5944a8ecbd85b11169f8cc1d",
            uid: "+965****1178"
        }, {
            ctime: '2017/07/03 20:04',
            prizeId: "5944a8ecbd85b11169f8cc1d",
            uid: "+92****5590"
        }, {
            ctime: '2017/07/03 20:47',
            prizeId: "5944a8ecbd85b11169f8cc1d",
            uid: "+968****5110"
        }, {
            ctime: '2017/07/03 22:04',
            prizeId: "5944a8ecbd85b11169f8cc1e",
            uid: "+92****8543"
        }, {
            ctime: '2017/07/03 23:33',
            prizeId: "5944a8ecbd85b11169f8cc1e",
            uid: "+49****5178"
        }, {
            ctime: '2017/07/04 06:29',
            prizeId: "5944a8ecbd85b11169f8cc1e",
            uid: "+62****1278"
        }, {
            ctime: '2017/07/04 09:17',
            prizeId: "5944a8ecbd85b11169f8cc1e",
            uid: "+91****6453"
        }, {
            ctime: '2017/07/04 10:35',
            prizeId: "5944a8ecbd85b11169f8cc1e",
            uid: "+971****8382"
        }, {
            ctime: '2017/07/04 13:44',
            prizeId: "5944a8ecbd85b11169f8cc1e",
            uid: "+852****1382"
        }, {
            ctime: '2017/07/04 20:29',
            prizeId: "5944a8ecbd85b11169f8cc1e",
            uid: "+886****7647"
        }, {
            ctime: '2017/07/05 10:04',
            prizeId: "5944a8ecbd85b11169f8cc1e",
            uid: "+971****4615"
        }, {
            ctime: '2017/07/05 13:25',
            prizeId: "5944a8ecbd85b11169f8cc1e",
            uid: "+63****1573"
        }, {
            ctime: '2017/07/05 15:11',
            prizeId: "5944a8ecbd85b11169f8cc1d",
            uid: "+91****3794"
        }, {
            ctime: '2017/07/05 18:49',
            prizeId: "5944a8ecbd85b11169f8cc1e",
            uid: "+62****1576"
        }, {
            ctime: '2017/07/05 23:10',
            prizeId: "5944a8ecbd85b11169f8cc1d",
            uid: "+66****1357"
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
                    $.each(falseData, function (key, value) {
                        const ctime = new Date(value.ctime).getTime();
                        if (ctime < now) {
                            list.push({
                                id: value.uid,
                                prize: utils.getPrizeById(value.prizeId),
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
                }
                $.tmpl(temp, {
                    winnerLoc,
                    list
                }).appendTo($el);

                // 滚动动画
                // $el.find('.winner-list ul').liMarquee({
                //     scrollamount: 30,
                //     direction: 'up',
                //     circular: true,
                //     hoverstop: false,
                //     drag: false
                // });
                $el.find('.winner-list ul').marquee({
                    //speed in milliseconds of the marquee
                    duration: 15000,
                    //gap in pixels between the tickers
                    gap: 50,
                    //time in milliseconds before the marquee will start animating
                    delayBeforeStart: 2000,
                    //'left' or 'right'
                    direction: 'up',
                    //true or false - should the marquee be duplicated to show an effect of continues flow
                    duplicated: true
                });
            });
        }
    }
});