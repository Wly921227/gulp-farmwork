define(['jquery', 'text!templates/marquee.html', 'temp', 'marquee'],
    function ($, template, __define__) {
        const $marquee = $('#marquee');
        const list = [
            'text1',
            'text2',
            'text3'
        ];

        return {
            doInit() {
                $.tmpl(template, {list}).appendTo($marquee);
                $marquee.find('.text-list').liMarquee({
                    scrollamount: 20,
                    direction: 'up',
                    circular: true
                });
            }
        }
    });