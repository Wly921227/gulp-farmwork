define([
    'jquery',
    'text!templates/tipArrow.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#tipArrow');
    temp = utils.tempRemoveBlank(temp);
    $el.on('webkitAnimationEnd', '.tip-arrow', function () {
        const $this = $(this);
        $this.hide();
    });

    return {
        doInit() {
            $.tmpl(temp).appendTo($el);
        }
    }
});