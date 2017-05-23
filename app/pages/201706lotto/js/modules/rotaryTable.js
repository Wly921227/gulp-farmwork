define(['jquery', 'text!templates/rotaryTable.html', 'utils', 'temp'],
    function ($, rotaryTable, utils, __define__) {
        let $el = $('#rotaryTable');
        return {
            doInit () {
                utils.log('do init');
                $.tmpl(rotaryTable, {test: 1}).appendTo($el);
            }
        }
    });