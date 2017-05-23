'use strict';

window.onload = function () {
    var CONTENT = {
        en: {
            title: 'Ramadan special',
            views: 'views',
            shareTitle: '%F0%9F%94%A5Hot%202017%20Ramadan%20Videos',
            shareDesc: 'New%20videos%20everyday!%20Tap%20to%20view%F0%9F%98%81',
            downloadView: 'Download YeeCall to see more',
            downloadButton: 'DOWNLOAD',
            tips: 'Videos will be updated daily! Stay tuned.'
        },
        ar: {
            title: 'رمضان خاص',
            views: 'مشاهدات',
            shareTitle: '%F0%9F%94%A5Hot%202017%20Ramadan%20Videos',
            shareDesc: 'New%20videos%20everyday!%20Tap%20to%20view%F0%9F%98%81',
            downloadView: 'تحميل YeeCall لمشاهدة أكثر',
            downloadButton: 'تحميل',
            downloadPadding: '0 1rem',
            tips: 'سيتم تحديث الفيديو يوميا! ابقي منتظمة في متابعته'
        }
    };
    setFontSize();
    var loc = getLocCode();
    var content = CONTENT[loc];
    var iosDownloadUrl = 'https://itunes.apple.com/cn/app/yi-kuai-zui-ku-wang-luo-dian/id852211576?mt=8';
    var androidDownloadUrl = 'market://details?id=com.yeecall.app';
    var ua = navigator.userAgent;
    var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1; //android
    var isYeeCall = /(YeeCall)/.test(ua);
    // const isYeeCall = true;
    // 事件
    var operation = {
        download: function download() {
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
    var now = +new Date();
    // 创建时间排序
    Data.sort(function (a, b) {
        var aDate = new Date(a.cTime).getTime();
        var bDate = new Date(b.cTime).getTime();
        return bDate - aDate;
    });
    // 是否到可展示日期
    var List = [];
    for (var i = 0; i < Data.length; i++) {
        var item = Data[i];
        var showDate = new Date(item.showDate).getTime();
        if (showDate < now) {
            List.push(item);
        }
    }
    List = isYeeCall ? List : List.slice(0, 3);

    var html = [];
    for (var _i = 0; _i < List.length; _i++) {
        var _item = List[_i];
        var views = getViewsNum(_item.cTime);
        var time = formatTime(_item.time);
        var title = encodeURI(_item.title);
        if (_item.imageSrc.indexOf('Daddys') > 0) {
            console.log(_item);
        }
        html.push('<li>\n            <div class="item">\n                <a href="./video.html?src=' + _item.videoSrc + '&img=' + _item.imageSrc + '&title=' + title + '">\n                    <div class="player-box">\n                        <div class="icon">\n                        </div>\n                        <div class="img">\n                            <img src="' + _item.imageSrc + '" alt="' + _item.title + '">\n                        </div>\n                        <div class="info">\n                            <div class="info-item">' + views + ' ' + content.views + '</div>\n                            <div class="info-item">' + time + '</div>\n                        </div>\n                    </div>\n                </a>\n                <a href="./video.html?src=' + _item.videoSrc + '&img=' + _item.imageSrc + '&title=' + title + '">\n                    <div class="title">\n                        ' + _item.title + '\n                    </div>\n                </a>\n            </div>\n        </li>');
    }

    document.querySelector('title').innerHTML = content.title;
    document.querySelector('.download-text').innerHTML = content.downloadView;
    var $downloadA = document.querySelector('.download-link span');
    $downloadA.innerHTML = content.downloadButton;
    if (content.downloadPadding) {
        $downloadA.style.padding = content.downloadPadding;
    }
    if (isYeeCall) {
        var $share = document.querySelector('.share');
        $share.style.display = 'block';
    }
    var $shareLink = document.querySelector('.share .share-link');
    $shareLink.addEventListener('click', function () {
        ga('send', 'event', 'button', 'click', 'share');
        var obj = {
            title: decodeURI(content.shareTitle),
            desc: decodeURI(content.shareDesc),
            imgUrl: 'http://ysubcdn.gl.yeecall.com/favicon.ico',
            link: location.href,
            textAndLink: 'Shared from YeeCall: ' + location.href,
            success: function () {
                console.log('success~');
            },
            error: function () {
                console.log('error~');
            }
        };

        YC.share(obj);
    });
    var $list = document.querySelector('.content ul');
    $list.className += isAndroid ? ' android' : ' ios';
    $list.innerHTML = html.join('');
    $list.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        return false;
    });

    window.addEventListener('pagehide', function () {
        getPoint();
    }, false);

    scroolToPoint();
    showDownload(content.shareTitle, content.shareDesc);
    loadImg();
    createGoogleAnalytics();

    function getPoint() {
        var point = window.scrollY;
        setCookie('prePoint', point, 1); //保存1DAY
    }

    //scroolToPoint() 滚动到某个位置
    function scroolToPoint() {
        var yPos = getCookie('prePoint');
        window.scrollTo(0, yPos);
    }

    //设置COOKIE
    function setCookie(cName, cVal, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = cName + '=' + escape(cVal) + (expiredays == null ? '' : ';expires=' + exdate.toGMTString());
    }

    function getCookie(cName) {
        if (document.cookie.length > 0) {
            var c_start = document.cookie.indexOf(cName + '=');
            if (c_start != -1) {
                c_start = c_start + cName.length + 1;
                var c_end = document.cookie.indexOf(';', c_start);
                if (c_end == -1) {
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return 0;
    }

    function loadImg() {
        if (isAndroid) {
            var img1 = new Image();
            img1.src = './images/ic_play_circle_filled_white.png';
            var img2 = new Image();
            img2.src = './images/ic_play_circle_filled_white_pressed.png';
        } else {
            var _img = new Image();
            _img.src = './images/ic_play@3x.png';
            var _img2 = new Image();
            _img2.src = './images/ic_play_pressed@3x.png';
        }
    }

    function formatTime(time) {
        // time = time / 1000;  // ms / s
        var format = '';
        var hour = parseInt(time / 60 / 60);
        var minute = parseInt(time / 60 % 60);
        var second = time % 60;
        if (hour) {
            format += toDou(hour) + ':';
        }
        format += toDou(minute) + ':';
        format += toDou(second);

        return format;
    }

    function toDou(n) {
        return n < 10 ? '0' + n : '' + n;
    }

    function getViewsNum(cTime) {
        var onlineDay = parseInt(now - new Date(cTime).getTime());
        var views = onlineDay / 107000;

        return parseInt(views);
    }

    function showDownload(title, desc) {
        if (!isYeeCall) {
            var $downloadBox = document.querySelector('.download');
            var $download = $downloadBox.querySelector('.download-link');
            $downloadBox.style.display = 'block';
            $download.addEventListener('click', operation.download);
            // 底部提示
            var $tip = document.querySelector('.tip p');
            $tip.style.display = 'none';
        } else {
            setTimeout(() => {
                // 底部提示
                var $tip = document.querySelector('.tip p');
                $tip.innerHTML = content.tips;

                var $metaTitle = document.querySelector('meta[name="keywords"]');
                $metaTitle.content = decodeURI(title);
                var $metaDesc = document.querySelector('meta[name="description"]');
                $metaDesc.content = decodeURI(desc);

                window.YC.hideNav(true);
            }, 200);
        }
    }

    function setFontSize() {
        var winWidth = window.innerWidth;
        var defaultWidth = 1080; // 设计图宽度
        var itemSize = 24 * 2; // 期望1rem=设计图24px * 2
        var oneRem = winWidth / (defaultWidth / itemSize); // 屏幕1rem=Xpx
        var fontSize = oneRem / 16 * 100;
        document.querySelector('html').style.fontSize = fontSize + '%';
        window.addEventListener('resize', setFontSize);
    }

    function createGoogleAnalytics() {
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments);
                }, i[r].l = 1 * new Date();
            a = s.createElement(o), m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-63953912-1', 'auto');
        ga('send', 'pageview');
    }

    function getLocCode() {
        var loc = void 0;
        if (navigator.appName == 'Netscape') loc = navigator.language; else loc = navigator.browserLanguage;
        if (loc.indexOf('ar') > -1) {
            return 'ar';
        } else {
            return 'en';
        }
    }
};