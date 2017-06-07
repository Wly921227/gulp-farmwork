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
        utils.loadImage('./images/icons.png');
        utils.loadImage('./images/disc-icon.png');
        const turntableImg = utils.loadImage(`./images/disc_${loc}.png`);
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
            indexBanner.doInit(loc);
            indexTickets.doInit(loc, indexTurntable);
            indexShare.doInit(loc);
            indexPrizeList.doInit(loc);
            indexWinners.doInit(loc);
            indexTurntable.doInit(turntableImg);
            // TODO 在获取好友人数后回调，隐藏loading
            setTimeout(loading.hide, 2000);
        });
    });
});