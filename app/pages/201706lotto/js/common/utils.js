define(['jquery'], function ($) {
    return {
        getPrizeById(id) {
            switch (id) {
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 3:
                    return 3;
                case 4:
                    return 4;
            }
        },
        setFontSize(planSize, remSize) {
            const defaultWidth = planSize || 750;                           // 设计图宽度
            const itemSize = remSize ? (remSize * 2) : (24 * 2);            // 期望1rem=设计图每个格子 * 2px (避免字体出现小于12px，所以*2)
            const oneRem = window.innerWidth / (defaultWidth / itemSize);   // 屏幕1rem=Xpx
            const fontSize = oneRem / 16 * 100;
            document.querySelector('html').style.fontSize = fontSize + '%';
            window.addEventListener('resize', this.setFontSize.bind(this, planSize, remSize));
        },
        createGoogleAnalytics() {
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
        },
        getLocCode() {
            const ua = navigator.userAgent.toLowerCase();
            if (/yeecall/.test(ua)) {
                if (/yclan\/zh_cn/.test(ua)) {
                    return 'zh_cn';
                } else if (/yclan\/zh/.test(ua)) {
                    // return 'zh_tw';
                    return 'zh_cn';
                } else if (/yclan\/ar/.test(ua)) {
                    // return 'ar';
                    return 'zh_cn';
                } else {
                    // return 'en';
                    return 'zh_cn';
                }
            } else {
                let loc;
                if (navigator.appName === 'Netscape')
                    loc = navigator.language.toLowerCase();
                else
                    loc = navigator.browserLanguage.toLowerCase();
                if (loc.indexOf('ar') > -1) {
                    // 阿语
                    // return 'ar';
                    return 'zh_cn';
                } else if (/zh/.test(loc) && /cn/.test(loc)) {
                    // 简体中文
                    return 'zh_cn';
                } else if (/zh/.test(loc)) {
                    // 繁体中文
                    // return 'zh_tw'
                    return 'zh_cn';
                } else {
                    // 英文
                    // return 'en';
                    return 'zh_cn';
                }
            }
        },
        timeFormat(time, _format) {
            let format = _format || 'H:M:S';
            const formatArr = ['H', 'M', 'S'];
            const hour = this.toDou(parseInt(time / 60 / 60) || 0);
            const minute = this.toDou(parseInt(time / 60 % 60) || 0);
            const second = this.toDou(time % 60);
            const timeArr = [hour, minute, second];
            for (let i = 0; i < formatArr.length; i++) {
                format = format.replace(formatArr[i], timeArr[i]);
            }

            return format;
        },
        dateFormat (_date, _format) {
            let format = _format || 'YYYY年MM月DD日 H:M:S';
            const formatArr = ['YYYY', 'MM', 'DD', 'H', 'M', 'S'];
            const date = new Date(_date);
            const year = date.getFullYear();
            const month = this.toDou(date.getMonth() + 1);
            const day = this.toDou(date.getDate());
            const hour = this.toDou(date.getHours());
            const minute = this.toDou(date.getMinutes());
            const second = this.toDou(date.getSeconds());
            const dateArr = [year, month, day, hour, minute, second];
            for (let i = 0; i < formatArr.length; i++) {
                format = format.replace(formatArr[i], dateArr[i]);
            }
            return format;
        },
        toDou(n) {
            return n < 10 ? '0' + n : '' + n;
        },
        setTitle(title) {
            $('title').html(title);
        },
        noContextMenu() {
            document.addEventListener('contextmenu', function (event) {
                event.preventDefault();
                return false;
            });
        },
        tempRemoveBlank(temp) {
            return temp.replace(/>\s+</g, '><')
                .replace(/>\s+{/g, '>{')
                .replace(/}\s+</g, '}<')
                .replace(/}\s+{/g, '}{');
        },
        // YeeCall
        setCookie() {
            if (/yeecall/.test(navigator.userAgent.toLowerCase()))
                setTimeout(function () {
                    window.YC.getCookie({
                        success: function (res) {
                            const cookie = JSON.parse(res.cookie);
                            document.cookie = `name=${cookie.name};cookie=${cookie.cookie};expire=${cookie.expire}`;
                        },
                        error: function () {
                            alert('用户信息获取失败，请重新打开');
                        }
                    });
                }, 500);
        },
        hideNav(flag) {
            if (/yeecall/.test(navigator.userAgent.toLowerCase()))
                window.YC.hideNav(flag);
        }
    }
});