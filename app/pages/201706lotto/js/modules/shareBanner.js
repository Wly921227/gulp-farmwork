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
            loc.banner = loc.banner(name || '').split('\n');
            loc.banner2 = loc.banner2.split('\n');
            $.tmpl(temp, {loc}).appendTo($el);
        }
    }
});