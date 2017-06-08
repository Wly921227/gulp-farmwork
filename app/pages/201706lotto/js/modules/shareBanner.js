window.define([
    'jquery',
    'text!templates/shareBanner.html',
    'temp'
], function ($, temp) {
    const $el = $('#shareBanner');

    return {
        doInit(loc) {
            // 好有名
            const name = 'AAAA';
            $.tmpl(temp, {loc, name}).appendTo($el);
        }
    }
});