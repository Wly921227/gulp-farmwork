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
        utils.loadImage('./images/icons.png');
        utils.loadImage('./images/close.png');
        utils.loadImage('./images/loading.png');
        utils.loadImage('./images/loading-banner.png');
        window.requirejs([
            `loc/${loc}/share`,
            `loc/${loc}/loading`,
            'modules/shareBanner',
            'modules/shareJoin',
            'modules/indexShare',
            'modules/indexPrizeList',
            'modules/indexWinners',
            'modules/loading'
        ], function (loc, loadLoc, shareBanner, shareJoin, indexShare, indexPrizeList, indexWinners, loading) {
            utils.setTitle(loc.title);
            loading.doInit(loadLoc);
            shareBanner.doInit(loc);
            shareJoin.doInit(loc);
            indexShare.doInit(loc, shareJoin);
            indexPrizeList.doInit(loc);
            indexWinners.doInit(loc);
            // TODO 在获取好友人数后回调，隐藏loading
            setTimeout(loading.hide, 2000);
        });
    });
});