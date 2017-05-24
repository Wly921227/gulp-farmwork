requirejs.config({
    baseUrl: './',
    paths: {
        marquee: 'js/lib/jquery.liMarquee',
        temp: 'js/lib/jquery.tmpl',
        jquery: 'js/lib/jquery',
        text: 'js/lib/text',
        utils: 'js/common/utils',
        modules: 'js/modules',
        template: 'templates'
    },
    shim: {
        marquee: ['jquery'],
        temp: ['jquery']
    }
});

define(function () {
    return {
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
            let loc;
            if (navigator.appName == 'Netscape')
                loc = navigator.language;
            else
                loc = navigator.browserLanguage;
            if (loc.indexOf('ar') > -1) {
                // 阿语
                return 'ar';
            } else if (/zh/.test(loc) && /cn/.test(loc)) {
                // 简体中文
                return 'zh-cn'
            } else if (/zh/.test(loc)) {
                // 繁体中文
                return 'zh-tw'
            } else {
                // 英文
                return 'en';
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
        }

    }
});