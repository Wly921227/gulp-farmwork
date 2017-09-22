define([
    'jquery',
    'text!templates/indexTickets.html',
    'utils',
    'http',
    'urls',
    'temp'
], function ($, temp, utils, http, urls) {
    const $el = $('#indexTickets');
    temp = utils.tempRemoveBlank(temp);
    return {
        doInit(_loc, cnt) {
            // 语言
            const loc = _loc.ticket;
            $el.html('');
            $.tmpl(temp, {
                loc
            }).appendTo($el);
            http.get(urls.getUserLotto, {
                friendCnt: cnt
            }, function (result) {
                if (result) {
                    let num = cnt - result.initFriends;
                    if (num < 0) {
                        num = 0;
                    }
                    if (num > 2) {
                        num = 2;
                    }
                    $el.find('.number .big').html(num);
                    $el.find('.bar .progress').css('width', `${num / 2 * 100}%`);
                }
            });
        }
    }
});