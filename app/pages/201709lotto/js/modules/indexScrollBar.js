define([
    'jquery',
    'text!templates/indexScrollBar.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#indexScrollBar');
    temp = utils.tempRemoveBlank(temp);

    return {
        doInit(list, winners) {
            $.tmpl(temp, {list, winners}).appendTo($el);
            $el.find('.index-scroll-bar').css('width', '65.3%');
            initScrollBar();

            function initScrollBar() {
                const $scroll = [
                    $('.scroll-warp .scroll-1'),
                    $('.scroll-warp .scroll-2')
                ];
                // 滚动条
                const picLen = list.length;
                const single = 100 / picLen;
                let $num = 0;
                let i = 0;
                $scroll[1].css('-webkit-transform', `-webkit-translate3d(0, ${single}%, 0)`);
                $scroll[1].css('transform', `-webkit-translate3d(0, ${single}%, 0)`);
                $scroll[1].css('-webkit-transform', `translate3d(0, ${single}%, 0)`);
                $scroll[1].css('transform', `translate3d(0, ${single}%, 0)`);
                const scrollAnimate = () => {
                    i++;
                    const rem = i % picLen * single;
                    if (rem === 0) {
                        const $thisNum = $num;
                        const $nextNum = $num ? 0 : 1;
                        $scroll[$nextNum].css('z-index', '');
                        $scroll[$nextNum].css('-webkit-transform', `-webkit-translate3d(0, 0, 0)`);
                        $scroll[$nextNum].css('transform', `-webkit-translate3d(0, 0, 0)`);
                        $scroll[$nextNum].css('-webkit-transform', `translate3d(0, 0, 0)`);
                        $scroll[$nextNum].css('transform', `translate3d(0, 0, 0)`);
                        $scroll[$thisNum].css('-webkit-transform', `-webkit-translate3d(0, -${picLen * single}%, 0)`);
                        $scroll[$thisNum].css('transform', `-webkit-translate3d(0, -${picLen * single}%, 0)`);
                        $scroll[$thisNum].css('-webkit-transform', `translate3d(0, -${picLen * single}%, 0)`);
                        $scroll[$thisNum].css('transform', `translate3d(0, -${picLen * single}%, 0)`);
                        setTimeout(() => {
                            $scroll[$thisNum].css('z-index', -1);
                            setTimeout(() => {
                                $scroll[$thisNum].css('-webkit-transform', `-webkit-translate3d(0, ${single}%, 0)`);
                                $scroll[$thisNum].css('transform', `-webkit-translate3d(0, ${single}%, 0)`);
                                $scroll[$thisNum].css('-webkit-transform', `translate3d(0, ${single}%, 0)`);
                                $scroll[$thisNum].css('transform', `translate3d(0, ${single}%, 0)`);
                            }, 1000);
                        }, 1000);
                        $num = $nextNum;
                    } else {
                        $scroll[$num].css('-webkit-transform', `-webkit-translate3d(0, -${rem}%, 0)`);
                        $scroll[$num].css('transform', `-webkit-translate3d(0, -${rem}%, 0)`);
                        $scroll[$num].css('-webkit-transform', `translate3d(0, -${rem}%, 0)`);
                        $scroll[$num].css('transform', `translate3d(0, -${rem}%, 0)`);
                    }
                };
                setInterval(scrollAnimate, 4000);
            }
        }
    }
});