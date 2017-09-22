define([
    'jquery',
    'text!templates/indexPrizeList.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#indexPrizeList');
    temp = utils.tempRemoveBlank(temp);

    return {
        doInit(loc) {
            const prize = loc.prize;
            $.tmpl(temp, {prize}).appendTo($el);
        }
    }
});