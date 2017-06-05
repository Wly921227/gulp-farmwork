window.requirejs.config({
    baseUrl: './js'
});

window.requirejs(['common'], function () {
    window.requirejs([
        'utils'
    ], function (utils) {
        const loc = utils.getLocCode();
        utils.setFontSize(1080, 20);
        utils.noContextMenu();
        utils.setCookie();
        window.requirejs([
            `loc/${loc}/index`,
            'modules/indexBanner',
            'modules/indexTickets'
        ], function (loc, indexBanner, indexTickets) {
            utils.setTitle(loc.title);
            indexBanner.doInit(loc);
            indexTickets.doInit(loc);
        });
    });
});