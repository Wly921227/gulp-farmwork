window.requirejs.config({
    baseUrl: './js'
});

window.requirejs(['common'], function () {
    window.requirejs([
        'utils'
    ], function (utils) {
        const _loc = utils.getLocCode();
        utils.setFontSize(1080, 20);
        utils.createGoogleAnalytics();
        utils.noContextMenu();
        utils.loadImage('./images/medal.png');
        utils.loadImage('./images/close.png');
        utils.loadImage('./images/loading.png');
        utils.loadImage('./images/loading-banner.png');
        $('body').addClass(_loc);
        window.requirejs([
            `loc/${_loc}/winners`,
            `loc/${_loc}/loading`,
            'modules/winnerBanner',
            'modules/winnerPrize',
            'modules/winnerShare',
            'modules/dialog',
            'modules/loading'
        ], function (loc, loadLoc, winnerBanner, winnerPrize, winnerShare, dialog, loading) {
            // loading.doInit(loadLoc);
            // 隐藏loading
            setTimeout(loading.hide, 2000);
            // page modules
            document.addEventListener('deviceready', function () {
                utils.setTitle(loc);
                utils.hideNav(true);
                utils.hideMenu(true);
            });
            const params = utils.urlParams();
            const date = params.date ? new Date(params.date) : new Date();
            const time = date.getTime();
            const interval = [
                {start: '2017/07/17', end: '2017/07/24'},
                {start: '2017/07/24', end: '2017/07/31'},
                {start: '2017/07/31', end: '2017/08/07'},
                {start: '2017/08/07', end: '2017/08/14'},
            ];
            let timeInterval;
            for (let i = 0; i < interval.length; i++) {
                const item = interval[i];
                const startTime = new Date(item.start).getTime();
                const endTime = new Date(item.end).getTime();
                if (time >= startTime && time <= endTime) {
                    timeInterval = item;
                    break;
                }
            }
            winnerBanner.doInit(timeInterval);
            winnerPrize.doInit(timeInterval, _loc, loc);
            winnerShare.doInit(loc);
            dialog.doInit(loc);
        });
    });
});