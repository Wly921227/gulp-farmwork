define([
    'jquery',
    'text!templates/indexPrizeList.html',
    'temp'
], function ($, temp) {
    const $el = $('#indexPrizeList');

    return {
        doInit(loc) {
            const prizeLoc = loc.prize;
            $.tmpl(temp, {prizeLoc}).appendTo($el);
        }
    }
});