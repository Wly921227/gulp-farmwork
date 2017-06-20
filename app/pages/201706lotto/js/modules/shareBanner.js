define([
    'jquery',
    'text!templates/shareBanner.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#shareBanner');
    temp = utils.tempRemoveBlank(temp);

    return {
        doInit(loc) {
            const {
                name,
            } = utils.urlParams();
            $.tmpl(temp, {loc, name: decodeURI(name || '')}).appendTo($el);
        }
    }
});