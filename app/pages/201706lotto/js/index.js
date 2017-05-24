requirejs.config({
    baseUrl: './js'
});

requirejs(['common/common'], function (common) {
    common.setFontSize(750, 24);
    requirejs([
        'modules/rotaryTable',
        'modules/marquee'
    ], function (rotaryTable, marquee) {
        rotaryTable.doInit();
        marquee.doInit();
    });
});