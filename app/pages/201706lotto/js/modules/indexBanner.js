define([
    'jquery',
    'text!templates/indexBanner.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#indexBanner');
    temp = utils.tempRemoveBlank(temp);

    return {
        doInit(loc) {
            const bannerTitle = loc.banner.split('\n');
            $.tmpl(temp, {bannerTitle: bannerTitle}).appendTo($el);
        }
    }
});