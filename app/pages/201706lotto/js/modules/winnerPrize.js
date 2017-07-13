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
        doInit(timeInterval, _loc) {
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
                                ctime: item.ctime
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
                            ctime: ctime
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
                console.log(oneList);
                console.log(twoList);
                console.log(otherList);

                $.tmpl(temp, {
                    oneList,
                    twoList,
                    otherList
                }).appendTo($el);
            });
        }
    }
});