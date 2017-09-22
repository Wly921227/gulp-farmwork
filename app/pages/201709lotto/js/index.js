window.requirejs.config({
    baseUrl: './js',
    urlArgs: new Date().getTime() + ''
});

window.requirejs(['common'], function () {
    window.requirejs([
        'utils',
    ], function (utils) {
        const _loc = 'en';
        utils.setFontSize();
        utils.createGoogleAnalytics();
        utils.noContextMenu();
        utils.loadImage('./images/banner.png');
        utils.loadImage('./images/btn.png');
        utils.loadImage('./images/btn-pressed.png');
        utils.loadImage('./images/gift-card.png');
        window.requirejs([
            `loc/${_loc}/index`,
            'modules/indexBanner',
            'modules/indexTickets',
            'modules/indexShare',
            'modules/indexPrizeList',
            'modules/indexWinners'
        ], function (loc, indexBanner, indexTickets, indexShare, indexPrizeList, indexWinners) {
            window.INDEX_LOC = loc;
            utils.setTitle(loc);
            document.addEventListener('deviceready', function () {
                utils.hideNav(true);
                utils.hideMenu(true);
                utils.setCookie(function () {
                    utils.getFriendCnt(function (cnt) {
                        indexTickets.doInit(loc, cnt);
                    });
                });
            });
            indexShare.doInit(loc);
            indexBanner.doInit();
            indexPrizeList.doInit(loc);
            indexWinners.doInit(loc);
        });
    });
});