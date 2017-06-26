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

                $el.find('.winner-list ul').liMarquee({
                    scrollamount: 30,
                    direction: 'up',
                    circular: true,
                    hoverstop: false,
                    drag: false,
                    loop: -1
                });
            });
        }
    }
});