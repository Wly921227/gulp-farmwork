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

    return {
        doInit(loc) {
            const winnerLoc = loc.winnerList;
            http.get(urls.getWinnerList, {}, function (result) {
                if (result) {
                    const list = [];
                    for (const key in result) {
                        const item = result[key];
                        list.push({
                            id: item.uid,
                            prize: utils.getPrizeById(item.prizeId),
                            time: utils.dateFormat(item.ctime, 'YYYY.MM.DD H:M')
                        });
                    }

                    $.tmpl(temp, {
                        winnerLoc,
                        list
                    }).appendTo($el);

                    $el.find('.winner-list ul').liMarquee({
                        scrollamount: 30,
                        direction: 'up',
                        circular: true
                    });
                } else {
                    alert('timeout~');
                    utils.setCookie();
                }
            });
        }
    }
});