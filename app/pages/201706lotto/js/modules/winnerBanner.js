define([
    'jquery',
    'text!templates/winnerBanner.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#winnerBanner');
    temp = utils.tempRemoveBlank(temp);

    return {
        doInit(timeInterval) {
            console.log(timeInterval)
            $.tmpl(temp, {timeInterval}).appendTo($el);
        }
    }
});