define([
    'jquery',
    'text!templates/loading.html',
    'temp'
], function ($, temp) {
    const $el = $('#loading');

    return {
        doInit(loc) {
            $('html').toggleClass('no-scroll');
            loc.title = loc.title.split('\n');
            loc.desc = loc.desc.split('\n');
            $.tmpl(temp, {loc}).appendTo($el);
        },
        hide() {
            $('html').toggleClass('no-scroll');
            $el.fadeOut(200);
        }
    }
});