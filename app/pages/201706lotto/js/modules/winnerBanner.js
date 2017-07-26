define([
    'jquery',
    'text!templates/winnerBanner.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#winnerBanner');
    temp = utils.tempRemoveBlank(temp);

    return {
        doInit(timeInterval, _loc) {
            console.log(timeInterval)
            const src = `./images/winners-banner-${_loc}.png`
            $.tmpl(temp, {timeInterval, src}).appendTo($el);
        }
    }
});