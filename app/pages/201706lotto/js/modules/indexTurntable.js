window.define([
    'jquery',
    'text!templates/indexTurntable.html',
    'temp'
], function ($, temp) {
    const $el = $('#indexTurntable');

    return {
        doInit() {
            const bannerTitle = loc.banner.split('\n');
            $.tmpl(temp, {bannerTitle: bannerTitle}).appendTo($el);
        }
    }
});