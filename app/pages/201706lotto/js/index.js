window.requirejs.config({
    baseUrl: './js'
});

window.requirejs(['common'], function () {
    window.requirejs([
        'utils'
    ], function (utils) {
        utils.setFontSize(1080, 20);
        utils.setCookie();
        const loc = utils.getLocCode();
        window.requirejs([
            `loc/${loc}/index`,
            'modules/indexBanner'
        ], function (loc, indexBanner) {
            indexBanner.doInit(loc);
        });
    });
});