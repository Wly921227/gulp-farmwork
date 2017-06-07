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
        // utils.setCookie();
        // utils.hideNav();
        window.requirejs([
            `loc/${loc}/index`,
            `loc/${loc}/loading`,
            'modules/indexBanner',
            'modules/indexTickets',
            'modules/indexShare',
            'modules/indexPrizeList',
            'modules/indexWinners',
            'modules/loading'
        ], function (loc, loadLoc, indexBanner, indexTickets, indexShare, indexPrizeList, indexWinners, loading) {
            utils.setTitle(loc.title);
            loading.doInit(loadLoc);
            indexBanner.doInit(loc);
            indexTickets.doInit(loc);
            indexShare.doInit(loc);
            indexPrizeList.doInit(loc);
            indexWinners.doInit(loc);
            // TODO 在获取好友人数后回调，隐藏loading
            setTimeout(loading.hide, 2000);
        });
    });
});