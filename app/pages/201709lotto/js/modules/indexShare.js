define([
    'jquery',
    'text!templates/indexShare.html',
    'utils',
    'temp'
], function ($, temp, utils) {
    const $el = $('#indexShare');
    temp = utils.tempRemoveBlank(temp);

    const btnFlash = size => {
        $el.find('.btn').css('-webkit-transform', `-webkit-scale3d(${size}, ${size}, 1)`);
        $el.find('.btn').css('-webkit-transform', `scale3d(${size}, ${size}, 1)`);
        $el.find('.btn').css('transform', `-webkit-scale3d(${size}, ${size}, 1)`);
        $el.find('.btn').css('transform', `scale3d(${size}, ${size}, 1)`);
    };
    const recursion = opt => {
        let time = opt.time;
        let size = opt.size;
        let spacing = opt.spacing;
        if (time >= 0) {
            const scale = time % 2 ? 1 : 1 * size;
            btnFlash(scale);
            time--;
            setTimeout(recursion.bind(this, {
                time,
                size,
                spacing
            }), spacing);
        } else {
            btnFlash(1);
        }
    };

    return {
        doInit(loc) {
            const button = utils.inYeeCall ? loc.shareButton : loc.downloadButton;
            $.tmpl(temp, {
                button
            }).appendTo($el);
            // 按钮动画
            recursion({
                size: .95,
                time: 8,
                spacing: 300
            });
            let username = '';
            utils.getUserName(function (name) {
                username = name;
            });
            $el.on('click', '.btn', function (event) {
                event.preventDefault();
                if (utils.inYeeCall) {
                    const share = {
                        title: loc.share.title(),
                        desc: loc.share.desc(),
                    };
                    utils.share(share, username);
                    ga('send', 'event', '抽奖二期', '分享', '首页分享');
                } else {
                    utils.downloadYeeCall();
                    ga('send', 'event', '抽奖二期', '外部点击下载');
                }
            });
        }
    }
});