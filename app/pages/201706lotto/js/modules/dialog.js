define([
    'jquery',
    'text!templates/dialog.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#callUsDialog');
    temp = utils.tempRemoveBlank(temp);

    const show = () => {
        $el.find('#YeeCallDialog').show();
    };

    const hide = () => {
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