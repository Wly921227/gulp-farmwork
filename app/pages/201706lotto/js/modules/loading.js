window.define([
    'jquery',
    'text!templates/loading.html',
    'temp'
], function ($, temp) {
    const $el = $('#loading');

    return {
        doInit(loc) {
            loc.title = loc.title.split('\n');
            loc.desc = loc.desc.split('\n');
            $.tmpl(temp, {loc}).appendTo($el);
        },
        hide() {
            $el.fadeOut(200);
        }
    }
});