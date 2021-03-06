define([
    'jquery',
    'text!templates/shareBanner.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#shareBanner');
    temp = utils.tempRemoveBlank(temp);

    return {
        doInit(loc) {
            let {
                name,
            } = utils.urlParams();
            try {
                name = ` ${decodeURI(atob(name || ''))} `;
            } catch (e) {
                name = ''
            }

            loc.banner = loc.banner(name).split('\n');
            loc.banner2 = loc.banner2.split('\n');
            $.tmpl(temp, {loc}).appendTo($el);
            $.tmpl(`<div class="add-text">${loc.addText}</div>`).appendTo($('#addText'));
        }
    }
});