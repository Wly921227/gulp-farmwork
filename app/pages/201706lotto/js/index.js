requirejs.config({
    baseUrl: './js'
});

requirejs(['common'], function () {
    requirejs([
        'utils',
        'modules/rotaryTable',
        'modules/marquee'
    ], function (utils, rotaryTable, marquee) {
        utils.setFontSize(750, 24);
        rotaryTable.doInit();
        marquee.doInit();
    });
});