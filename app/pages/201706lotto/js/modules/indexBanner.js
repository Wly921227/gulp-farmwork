window.define([
    'jquery',
    'text!templates/indexBanner.html',
    'temp'
], function ($, temp) {
    const $el = $('#indexBanner');

    return {
        doInit(loc) {
            const bannerTitle = loc.banner.split('\n');
            $.tmpl(temp, {bannerTitle: bannerTitle}).appendTo($el);
        }
    }
});