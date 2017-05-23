requirejs.config({
    baseUrl: './js'
});

requirejs(['common/common'], function () {
    requirejs(['modules/rotaryTable'], function (rotaryTable) {
        rotaryTable.doInit();
    });
});