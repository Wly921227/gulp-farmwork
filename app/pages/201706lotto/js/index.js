window.requirejs.config({
    baseUrl: './js'
});

window.requirejs(['common'], function () {
    window.requirejs([
        'utils',
    ], function (utils) {
        if (!utils.inYeeCall) {
            window.location.href = './share.html' + window.location.search;
        }
        const _loc = utils.getLocCode();
        utils.setFontSize(1080, 20);
        utils.createGoogleAnalytics();
        utils.noContextMenu();
        utils.loadImage('./images/icons.png');
        utils.loadImage('./images/disc-icon.png');
        utils.loadImage('./images/prize-icon.png');
        utils.loadImage('./images/small-icon.png');
        utils.loadImage('./images/arrow-icon.png');
        utils.loadImage('./images/disc-bg.png');
        utils.loadImage('./images/close.png');
        utils.loadImage('./images/loading.png');
        utils.loadImage('./images/loading-banner.png');
        const turntableImg = utils.loadImage(`./images/disc-${_loc}.png`);
        window.requirejs([
            `loc/${_loc}/index`,
            `loc/${_loc}/loading`,
            'modules/indexBanner',
            'modules/indexTickets',
            'modules/indexShare',
            'modules/indexPrizeList',
            'modules/indexWinners',
            'modules/indexTurntable',
            'modules/loading',
            'modules/dialog',
            'modules/tipArrow'
        ], function (loc, loadLoc, indexBanner, indexTickets, indexShare, indexPrizeList, indexWinners, indexTurntable, loading, dialog, tipArrow) {
            window.INDEX_LOC = loc;
            utils.setTitle(loc);
            loading.doInit(loadLoc);
            document.addEventListener("deviceready", function () {
                utils.hideNav(true);
                utils.hideMenu(true);
                utils.setCookie(function () {
                    indexWinners.doInit(loc, _loc);
                    utils.getFriendCnt(function (cnt) {
                        indexTickets.doInit(loc, cnt);
                    });
                });
            });
            indexBanner.doInit(loc);
            indexShare.doInit(loc);
            indexPrizeList.doInit(loc);
            indexTurntable.doInit(loc, turntableImg, indexTickets);
            dialog.doInit(loc);
            // 隐藏loading
            setTimeout(function () {
                loading.hide();
                tipArrow.doInit();
            }, 2000);
        });
    });
});