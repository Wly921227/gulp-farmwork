define([
    'jquery',
    'text!templates/indexBanner.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#indexBanner');
    temp = utils.tempRemoveBlank(temp);

    return {
        doInit() {
            $.tmpl(temp).appendTo($el);
        }
    }
});