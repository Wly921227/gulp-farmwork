define([
    'jquery',
    'text!templates/indexWinners.html',
    'temp',
    'marquee'
], function ($, temp) {
    const $el = $('#indexWinners');

    const list = [
        {
            id: '+966****0874',
            prize: 2,
            time: '2017.06.08  13:05'
        }, {
            id: '+966****0874',
            prize: 1,
            time: '2017.06.08  13:05'
        }, {
            id: '+966****0874',
            prize: 1,
            time: '2017.06.08  13:05'
        }, {
            id: '+966****0874',
            prize: 1,
            time: '2017.06.08  13:05'
        }, {
            id: '+966****0874',
            prize: 1,
            time: '2017.06.08  13:05'
        }, {
            id: '+966****0874',
            prize: 1,
            time: '2017.06.08  13:05'
        }, {
            id: '+966****0874',
            prize: 1,
            time: '2017.06.08  13:05'
        }, {
            id: '+966****0874',
            prize: 1,
            time: '2017.06.08  13:05'
        }, {
            id: '+966****0874',
            prize: 1,
            time: '2017.06.08  13:05'
        }, {
            id: '+966****0874',
            prize: 1,
            time: '2017.06.08  13:05'
        }, {
            id: '+966****0874',
            prize: 3,
            time: '2017.06.08  13:05'
        }
    ];

    return {
        doInit(loc) {
            const winnerLoc = loc.winnerList;
            $.tmpl(temp, {
                winnerLoc,
                list
            }).appendTo($el);

            $el.find('.winner-list ul').liMarquee({
                scrollamount: 30,
                direction: 'up',
                circular: true
            });
        }
    }
});