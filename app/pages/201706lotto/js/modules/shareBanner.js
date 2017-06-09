define([
    'jquery',
    'text!templates/shareBanner.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#shareBanner');

    return {
        doInit(loc) {
            // TODO 好友名
            const {
                name,
            } = utils.urlParams();
            $.tmpl(temp, {loc, name: name || ''}).appendTo($el);
        }
    }
});