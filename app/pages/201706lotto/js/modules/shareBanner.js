window.define([
    'jquery',
    'text!templates/shareBanner.html',
    'temp'
], function ($, temp) {
    const $el = $('#shareBanner');

    return {
        doInit(loc) {
            // TODO 好友名
            const name = 'AAAA';
            $.tmpl(temp, {loc, name}).appendTo($el);
        }
    }
});