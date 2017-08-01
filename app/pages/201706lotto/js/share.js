window.requirejs.config({
    baseUrl: './js',
    urlArgs: new Date().getTime() + ''
});

window.requirejs(['common'], function () {
    window.requirejs([
        'utils'
    ], function (utils) {
        const _loc = utils.getLocCode();
        utils.setFontSize(1080, 20);
        utils.createGoogleAnalytics();
        utils.noContextMenu();
        utils.loadImage('./images/icons.png');
        utils.loadImage('./images/close.png');
        utils.loadImage('./images/small-icon.png');
        utils.loadImage('./images/arrow-icon.png');
        utils.loadImage('./images/loading.png');
        utils.loadImage('./images/loading-banner.png');
        // const img = utils.loadImage(`./images/pic_banner_${_loc}-min.png`);
        window.requirejs([
            `loc/${_loc}/share`,
            `loc/${_loc}/loading`,
            'modules/shareBanner',
            'modules/shareJoin',
            'modules/indexShare',
            'modules/indexPrizeList',
            'modules/indexWinners',
            'modules/loading'
        ], function (loc, loadLoc, shareBanner, shareJoin, indexShare, indexPrizeList, indexWinners, loading) {
            window.INDEX_LOC = loc;
            utils.setTitle(loc);
            // loading.doInit(loadLoc);
            if (!utils.inYeeCall) {
                indexWinners.doInit(loc, _loc);
            }
            shareBanner.doInit(loc);
            shareJoin.doInit(loc);
            indexShare.doInit(loc, shareJoin);
            indexPrizeList.doInit(loc, _loc);
            // 隐藏loading
            // setTimeout(loading.hide, 2000);
        });
    });
});