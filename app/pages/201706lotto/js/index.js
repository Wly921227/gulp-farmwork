window.requirejs.config({
    baseUrl: './js'
});

window.requirejs(['common'], function () {
    window.requirejs([
        'utils',
    ], function (utils) {
        if (!utils.inYeeCall) {
            window.location.href = './share.html';
        }
        const loc = utils.getLocCode();
        utils.setFontSize(1080, 20);
        utils.noContextMenu();
        utils.hideNav(true);
        utils.loadImage('./images/icons.png');
        utils.loadImage('./images/disc-icon.png');
        utils.loadImage('./images/prize-icon.png');
        utils.loadImage('./images/disc-bg.png');
        utils.loadImage('./images/close.png');
        utils.loadImage('./images/loading.png');
        utils.loadImage('./images/loading-banner.png');
        const turntableImg = utils.loadImage(`./images/disc-${loc}.png`);
        window.requirejs([
            `loc/${loc}/index`,
            `loc/${loc}/loading`,
            'modules/indexBanner',
            'modules/indexTickets',
            'modules/indexShare',
            'modules/indexPrizeList',
            'modules/indexWinners',
            'modules/indexTurntable',
            'modules/loading'
        ], function (loc, loadLoc, indexBanner, indexTickets, indexShare, indexPrizeList, indexWinners, indexTurntable, loading) {
            utils.setTitle(loc.title);
            loading.doInit(loadLoc);
            utils.setCookie(function () {
                indexWinners.doInit(loc);
                utils.getFriendCnt(function (cnt) {
                    indexTickets.doInit(loc, cnt, loading);
                });
            });
            indexBanner.doInit(loc);
            indexShare.doInit(loc);
            indexPrizeList.doInit(loc);
            indexTurntable.doInit(loc, turntableImg, indexTickets);
        });
    });
});