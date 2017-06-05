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
            'modules/indexTickets',
            'modules/indexShare',
            'modules/indexPrizeList',
            'modules/indexWinners'
        ], function (loc, indexBanner, indexTickets, indexShare, indexPrizeList, indexWinners) {
            utils.setTitle(loc.title);
            indexBanner.doInit(loc);
            indexTickets.doInit(loc);
            indexShare.doInit(loc);
        });
    });
});