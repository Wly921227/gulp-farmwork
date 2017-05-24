define(['jquery', 'text!templates/rotaryTable.html', 'utils', 'temp'],
    function ($, template, utils, __define__) {
        let $el = $('#rotaryTable');
        return {
            doInit () {
                utils.log('do init');
                $.tmpl(template, {test: 1}).appendTo($el);
                let $rock = $('#rock');
                let stopClass = '';
                $el.on('click', '#start', function () {
                    if (!$rock.attr('class') || $rock.attr('class').indexOf('start') === -1) {
                        $rock.removeClass(stopClass);
                        $rock.addClass('start');
                    }
                });
                $el.on('click', '#stop', function () {
                    if ($rock.attr('class') && $rock.attr('class').indexOf('start') !== -1) {
                        $rock.removeClass('start');
                        const num = parseInt(Math.random() * 12);
                        stopClass = 'stop-' + num;
                        // const degree = num * 30;
                        // $rock.css('transform', `rotateZ(0)`);
                        // $rock.css('transform', `rotateZ(${degree}deg)`);
                        $rock.addClass(stopClass);
                    }
                });
            }
        }
    });