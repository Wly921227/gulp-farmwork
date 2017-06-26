define([
    'jquery',
    'text!templates/loading.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#loading');
    const $html = $('html');
    temp = utils.tempRemoveBlank(temp);

    const hide = () => {
        if ($html.attr('class').indexOf('no-scroll') > -1)
            $html.toggleClass('no-scroll');
        $el.fadeOut(200);
    };

    return {
        doInit(loc) {
            if ($html.attr('class').indexOf('no-scroll') === -1)
                $html.toggleClass('no-scroll');
            loc.title = loc.title.split('\n');
            loc.desc = loc.desc.split('\n');
            $.tmpl(temp, {loc}).appendTo($el);
        },
        hide
    }
});