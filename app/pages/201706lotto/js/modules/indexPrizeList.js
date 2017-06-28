define([
    'jquery',
    'text!templates/indexPrizeList.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#indexPrizeList');
    temp = utils.tempRemoveBlank(temp);

    return {
        doInit(loc, locCode) {
            const prizeLoc = loc.prize;
            $.tmpl(temp, {prizeLoc, loc: locCode, statement: loc.statement}).appendTo($el);
        }
    }
});