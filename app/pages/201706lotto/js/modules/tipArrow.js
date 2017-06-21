define([
    'jquery',
    'text!templates/tipArrow.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#tipArrow');
    temp = utils.tempRemoveBlank(temp);

    return {
        doInit() {
            $.tmpl(temp).appendTo($el);
        }
    }
});