define([
    'jquery',
    'text!templates/dialog.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#callUsDialog');
    const $html = $('html');
    temp = utils.tempRemoveBlank(temp);

    const show = () => {
        if (!$html.attr('class') || $html.attr('class').indexOf('no-scroll') === -1)
            $html.toggleClass('no-scroll');
        $el.find('#YeeCallDialog').show();
    };

    const hide = () => {
        if ($html.attr('class').indexOf('no-scroll') > -1)
            $html.toggleClass('no-scroll');
        $el.find('#YeeCallDialog').hide();
    };

    $(document).on('click', '.call-us', function (event) {
        event.preventDefault();
        show();
    });

    $el.on('click', '.ok', function () {
        hide();
    });

    return {
        doInit(loc) {
            $.tmpl(temp, {loc}).appendTo($el);
        },
        show,
        hide
    }
});