window.define([
    'jquery',
    'text!templates/indexWinners.html',
    'temp'
], function ($, temp) {
    const $el = $('#indexWinners');

    return {
        doInit(loc) {
            const winnerLoc = loc.winnerList;
            $.tmpl(temp, {winnerLoc}).appendTo($el);
        }
    }
});