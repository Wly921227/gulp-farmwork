$(document).ready(() => {
    const CONTENT = {
        en: {
            title: 'Ramadan special',
            views: 'views',
            downloadView: 'Download YeeCall to see more',
            downloadButton: 'DOWNLOAD',
            tips: 'Videos will be updated daily! Stay tuned.',
            back: 'Back'
        },
        ar: {
            title: 'رمضان خاص',
            views: 'مشاهدات',
            downloadView: 'تحميل YeeCall لمشاهدة أكثر',
            downloadButton: 'تحميل',
            downloadPadding: '0 1rem',
            tips: 'سيتم تحديث الفيديو يوميا! ابقي منتظمة في متابعته',
            back: 'التراجع'
        }
    };
    const loc = getLocCode();
    const content = CONTENT[loc];

    const iosDownloadUrl = "https://itunes.apple.com/cn/app/yi-kuai-zui-ku-wang-luo-dian/id852211576?mt=8";
    const androidDownloadUrl = "market://details?id=com.yeecall.app";
    const ua = navigator.userAgent;
    const isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1; //android
    const isYeeCall = /(YeeCall)/.test(ua);
    // const isYeeCall = true;
    // 事件
    const operation = {
        download() {
            if (isAndroid) {
                ga('send', {
                    hitType: 'event',
                    eventCategory: 'Android Download',
                    eventAction: 'download',
                    eventValue: 1
                });
                window.location.href = androidDownloadUrl;
            } else {
                ga('send', {
                    hitType: 'event',
                    eventCategory: 'IOS Download',
                    eventAction: 'download',
                    eventValue: 1
                });
                window.location.href = iosDownloadUrl;
            }
        }
    };
    // 判断可展示视频
    // const startDate = new Date('2017/04/20').getTime();
    const now = +new Date;
    // 创建时间排序
    Data.sort((a, b) => {
        const aDate = new Date(a.cTime).getTime();
        const bDate = new Date(b.cTime).getTime();
        return bDate - aDate;
    });
    // 是否到可展示日期
    let List = [];
    for (let i = 0; i < Data.length; i++) {
        let item = Data[i];
        const showDate = new Date(item.showDate).getTime();
        if (showDate < now) {
            List.push(item)
        }
    }
    List = isYeeCall ? List : List.slice(0, 3);

    let html = [];
    for (let i = 0; i < List.length; i++) {
        let item = List[i];
        const views = getViewsNum(item.cTime);
        const time = formatTime(item.time);
        const title = encodeURI(item.title);
        html.push(`<li>
            <div class="item">
                <div class="player-box link" data-src="${item.videoSrc}" data-img="${item.imageSrc}" data-title="${title}">
                    <div class="icon">
                    </div>
                    <div class="img">
                        <img src="${item.imageSrc}" alt="${item.title}">
                    </div>
                    <div class="info">
                        <div class="info-item">${views} ${content.views}</div>
                        <div class="info-item">${time}</div>
                    </div>
                </div>
                <div class="title link" data-src="${item.videoSrc}" data-img="${item.imageSrc}" data-title="${title}">
                    ${item.title}
                </div>
            </div>
        </li>`);
    }

    // 视频列表
    let $list = $('.content ul');
    $list.addClass(isAndroid ? 'android' : 'ios');
    $list.html(html.join(''));
    $list.on('contextmenu', function (event) {
        event.preventDefault();
        return false;
    });
    // 显示播放器
    $list.on('click', '.link', function (event) {
        event.preventDefault();
        const $this = $(this);
        const src = $this.data('src');
        const img = $this.data('img');
        const title = $this.data('title');
        setVideo({
            src: src,
            img: img
        });
        showVideo(true, title);
    });
    let $back = $('.back a');
    $back.html('< ' + content.back);
    $back.on('click', function (event) {
        event.preventDefault();
        showVideo(false, content.title);
    });
    // 拦截返回按钮事件
    if (isAndroid) {
        document.addEventListener('backbutton', function (event) {
            event.preventDefault();
            showVideo(false, content.title);
        });
    }
    // 底部提示
    let $tip = $('.tip p');
    $tip.html(content.tips);

    setFontSize();
    // 设置标题
    setTitle(content.title);
    showDownload();
    loadImg();
    createGoogleAnalytics();

    function setVideo(options) {
        let $video = $('.video');
        $video.html(`<video id="video" src="${options.src}" autoplay controls="controls" poster="${'./' + options.img}">
            <source src="${options.src}" type="video/mp4"/>
        </video>`);
    }

    function showVideo(show, title) {
        let $player = $('.player');
        if (show) {
            setTitle(title);
            $player.css({display: 'table'});
        } else {
            setTitle(title);
            $player.find('.video').html('');
            $player.css({display: 'none'});
        }
    }

    function setTitle(title) {
        let $title = $('title');
        if (title) {
            $title.html(decodeURI(title));
        }
    }

    function loadImg() {
        if (isAndroid) {
            let img1 = new Image();
            img1.src = './images/ic_play_circle_filled_white.png';
            let img2 = new Image();
            img2.src = './images/ic_play_circle_filled_white_pressed.png';
        } else {
            let img1 = new Image();
            img1.src = './images/ic_play@3x.png';
            let img2 = new Image();
            img2.src = './images/ic_play_pressed@3x.png';
        }
    }

    function formatTime(time) {
        // time = time / 1000;  // ms / s
        let format = '';
        const hour = parseInt(time / 60 / 60);
        const minute = parseInt((time / 60) % 60);
        const second = time % 60;
        if (hour) {
            format += toDou(hour) + ':';
        }
        format += toDou(minute) + ':';
        format += toDou(second);

        return format
    }

    function toDou(n) {
        return n < 10 ? '0' + n : '' + n;
    }

    function getViewsNum(cTime) {
        const onlineDay = parseInt(now - new Date(cTime).getTime());
        let views = onlineDay / 107000;

        return parseInt(views);
    }

    function showDownload() {
        if (!isYeeCall) {
            const $download = $('.download .download-link');
            const $downloadA = $('.download-link a');
            const $downloadBox = $('.download');
            const $downloadText = $('.download-text');
            $download.on('click', operation.download);
            $downloadA.html(content.downloadButton);
            $downloadText.html(content.downloadView);
            if (content.downloadPadding) {
                $downloadA.css({padding: content.downloadPadding});
            }
            $downloadBox.show();
        } else {
            window.YC.hideNav(true);
        }
    }

    function setFontSize() {
        let winWidth = window.innerWidth;
        let defaultWidth = 1080;    // 设计图宽度
        let itemSize = 24 * 2;          // 期望1rem=设计图24px * 2
        let oneRem = winWidth / (defaultWidth / itemSize);  // 屏幕1rem=Xpx
        let fontSize = oneRem / 16 * 100;
        $('html').css({fontSize: `${fontSize}%`});
        $(window).on('resize', setFontSize)
    }

    function createGoogleAnalytics() {
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-63953912-1', 'auto', '2017 Ramadan');
        ga('send', 'pageview');
    }

    function getLocCode() {
        let loc;
        if (navigator.appName == 'Netscape')
            loc = navigator.language;
        else
            loc = navigator.browserLanguage;
        if (loc.indexOf('ar') > -1) {
            return 'ar'
        } else {
            return 'en'
        }
    }
});
