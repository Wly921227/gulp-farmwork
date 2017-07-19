define(['jquery'], function ($) {
    const ua = navigator.userAgent.toLowerCase();
    const inYeeCall = /yeecall/.test(ua);
    const isAndroid = ua.indexOf('android') > -1 || ua.indexOf('adr') > -1;
    const isOffline = location.href.indexOf('.debug') > -1 || location.href.indexOf('10.18.101.') > -1;
    const iosDownloadUrl = 'http://m.onelink.me/76f7fa7f';
    const androidDownloadUrl = 'http://m.onelink.me/76f7fa7f';
    const debounce = (func, wait, immediate) => {
        let timeout;
        return function () {
            const context = this;
            const args = arguments;
            let later = function () {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            };
            if (immediate && !timeout) {
                func.apply(context, args);
            }
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    let backCB = () => {
    };
    let isAndroidLow = false;
    if (isAndroid) {
        const index = ua.indexOf("android");
        const androidVersion = parseFloat(ua.substr(index + 8, 3));
        console.log(androidVersion);
        if (androidVersion < 4.4) {
            isAndroidLow = true;
        }
    }

    const winnerList = [
        {
            ctime: '2017/07/17 09:36',
            prizeId: 2,
            uid: '+971****9331'
        }, {
            ctime: '2017/07/17 10:54',
            prizeId: 2,
            uid: '+91****1321'
        }, {
            ctime: '2017/07/17 12:11',
            prizeId: 4,
            uid: '+967****5431'
        }, {
            ctime: '2017/07/17 14:26',
            head: './images/head1.jpg',
            prizeId: 1,
            uid: '+63****5136'
        }, {
            ctime: '2017/07/17 15:01',
            prizeId: 3,
            uid: '+63****6244',
        }, {
            ctime: '2017/07/18 12:00',
            prizeId: 2,
            uid: '+81****8486'
        }, {
            ctime: '2017/07/18 12:58',
            prizeId: 3,
            uid: '+852****3754'
        }, {
            ctime: '2017/07/18 16:39',
            prizeId: 3,
            uid: '+962****1290'
        }, {
            ctime: '2017/07/18 19:01',
            prizeId: 3,
            uid: '+81****6523'
        }, {
            ctime: '2017/07/18 19:01',
            prizeId: 3,
            uid: '+81****8245'
        }, {
            ctime: '2017/07/19 15:12',
            prizeId: 2,
            uid: '+965****1178'
        }, {
            ctime: '2017/07/19 20:04',
            prizeId: 2,
            uid: '+92****5590'
        }, {
            ctime: '2017/07/19 20:47',
            prizeId: 2,
            uid: '+968****5110'
        }, {
            ctime: '2017/07/19 22:04',
            prizeId: 3,
            uid: '+92****8543'
        }, {
            ctime: '2017/07/19 23:33',
            prizeId: 3,
            uid: '+49****5178'
        }, {
            ctime: '2017/07/20 06:29',
            prizeId: 3,
            uid: '+62****1278'
        }, {
            ctime: '2017/07/20 09:17',
            prizeId: 3,
            uid: '+91****6453'
        }, {
            ctime: '2017/07/20 10:35',
            prizeId: 3,
            uid: '+971****8382'
        }, {
            ctime: '2017/07/20 13:44',
            prizeId: 3,
            uid: '+852****1382'
        }, {
            ctime: '2017/07/20 20:29',
            prizeId: 3,
            uid: '+886****7647'
        }, {
            ctime: '2017/07/21 10:04',
            prizeId: 3,
            uid: '+971****4615'
        }, {
            ctime: '2017/07/21 13:25',
            prizeId: 3,
            uid: '+63****1573'
        }, {
            ctime: '2017/07/21 15:11',
            prizeId: 2,
            uid: '+91****3794'
        }, {
            ctime: '2017/07/21 18:49',
            prizeId: 3,
            uid: '+62****1576'
        }, {
            ctime: '2017/07/21 23:10',
            prizeId: 2,
            uid: '+66****1357'
        }
    ];

    return {
        winnerList,
        inYeeCall,
        isAndroid,
        isAndroidLow,
        debounce,
        base64encode(str) {
            const base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

            let out, i, len;
            let c1, c2, c3;

            len = str.length;
            i = 0;
            out = "";
            while (i < len) {
                c1 = str.charCodeAt(i++) & 0xff;
                if (i === len) {
                    out += base64EncodeChars.charAt(c1 >> 2);
                    out += base64EncodeChars.charAt((c1 & 0x3) << 4);
                    out += "==";
                    break;
                }
                c2 = str.charCodeAt(i++);
                if (i === len) {
                    out += base64EncodeChars.charAt(c1 >> 2);
                    out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                    out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                    out += "=";
                    break;
                }
                c3 = str.charCodeAt(i++);
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
                out += base64EncodeChars.charAt(c3 & 0x3F);
            }
            return out;
        },
        base64decode(str) {
            const base64DecodeChars = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];

            let c1, c2, c3, c4;
            let i, len, out;

            len = str.length;
            i = 0;
            out = "";
            while (i < len) {
                /* c1 */
                do {
                    c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
                } while (i < len && c1 === -1);
                if (c1 === -1)
                    break;

                /* c2 */
                do {
                    c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
                } while (i < len && c2 === -1);
                if (c2 == -1)
                    break;

                out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

                /* c3 */
                do {
                    c3 = str.charCodeAt(i++) & 0xff;
                    if (c3 === 61)
                        return out;
                    c3 = base64DecodeChars[c3];
                } while (i < len && c3 === -1);
                if (c3 === -1)
                    break;

                out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

                /* c4 */
                do {
                    c4 = str.charCodeAt(i++) & 0xff;
                    if (c4 === 61)
                        return out;
                    c4 = base64DecodeChars[c4];
                } while (i < len && c4 === -1);
                if (c4 === -1)
                    break;
                out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
            }
            return out;
        },
        getPrizeById(id) {
            if (isOffline) {
                // 线下
                switch (id) {
                    case '5944a8ecbd85b11169f8cc1c':
                        return 1;   // iPhone
                    case '5944a8ecbd85b11169f8cc1d':
                        return 2;   // 100
                    case '5944a8ecbd85b11169f8cc1e':
                        return 3;   // 50
                    case '5944a8ecbd85b11169f8cc1f':
                        return 4;   // 10
                    case 5:
                        return 5;   // 再一次
                    case 6:
                        return 6;   // 谢谢
                }
            } else {
                // 线上
                switch (id) {
                    case '5954da4ebc67881f2038b9e0':
                        return 1;   // iPhone
                    case '5954da60bc67881f2038b9e1':
                        return 2;   // 100
                    case '5954da63bc67881f2038b9e2':
                        return 3;   // 50
                    case '5954da66bc67881f2038b9e3':
                        return 4;   // 10
                    case 5:
                        return 5;   // 再一次
                    case 6:
                        return 6;   // 谢谢
                }
            }
        },
        urlParams(_url) {
            let url = _url || window.location.search.split('?').pop();
            let paramList = url.split('&');
            let params = {};
            for (let i = 0; i < paramList.length; i++) {
                let value = paramList[i];
                let map = value.split('=');
                params[map[0]] = map[1];
            }
            return params;
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
            window._gaq = [];
            _gaq.push(['pageTracker._setAccount', 'UA-63953912-1']);
            _gaq.push(['pageTracker._trackPageview']);
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
            if (/yeecall/.test(ua)) {
                if (/yclan\/zh_cn/.test(ua)) {
                    return 'zh';
                } else if (/yclan\/zh/.test(ua)) {
                    return 'zh';
                } else if (/yclan\/ar/.test(ua)) {
                    $('body').addClass('ar');
                    return 'ar';
                } else {
                    return 'en';
                }
            } else {
                let loc;
                if (navigator.appName === 'Netscape')
                    loc = navigator.language.toLowerCase();
                else
                    loc = navigator.browserLanguage.toLowerCase();
                if (loc.indexOf('ar') > -1) {
                    // 阿语
                    $('body').addClass('ar');
                    return 'ar';
                } else if (/zh/.test(loc) && /cn/.test(loc)) {
                    // 简体中文
                    return 'zh';
                } else if (/zh/.test(loc)) {
                    // 繁体中文
                    return 'zh';
                } else {
                    // 英文
                    return 'en';
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
        setTitle(loc) {
            if (loc) {
                $('title').html(loc.title);
                if (loc.share) {
                    $('meta[name="keywords"]').attr('content', loc.share.title());
                    $('meta[name="description"]').attr('content', loc.share.title());
                    $('meta[property="og:url"]').attr('content', window.location.href);
                    $('meta[property="og:title"]').attr('content', loc.share.title());
                    $('meta[property="og:description"]').attr('content', loc.share.desc());
                    $('meta[property="og:image"]').attr('content', 'http://ysubcdn.gl.yeecall.com/activity/201706lotto/images/logo.jpg');
                }
            }

            if (inYeeCall && !isAndroid) {
                const self = this;
                try {
                    window.YC.setTitle({
                        title: loc.title
                    });
                } catch (e) {
                    setTimeout(function () {
                        self.setTitle(loc);
                    }, 500);
                }
            }
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
        loadImage(url) {
            const images = new Image();
            images.src = url;
            $('body').append(`<img src="${images.src}" style="display: none;">`);

            return images;
        },
        // YeeCall
        setCookie(callback) {
            if (inYeeCall) {
                const self = this;
                try {
                    console.log('get cookie');
                    window.YC.getCookie({
                        success: function (res) {
                            if (res) {
                                console.log('get cookie success');

                                const cookie = JSON.parse(res);
                                document.cookie = `${cookie.name.toLowerCase()}=${cookie.cookie};${location.href.indexOf('yeecall.com') > -1 ? 'domain=yeecall.com;' : ''}path=/;`;
                                if (callback && typeof callback === 'function') {
                                    callback();
                                }
                            }
                        },
                        error: function () {
                            console.log('get cookie error');

                            setTimeout(function () {
                                self.setCookie(callback);
                            }, 500);
                        }
                    });
                } catch (e) {
                    console.log('get cookie catch');

                    setTimeout(function () {
                        self.setCookie(callback);
                    }, 500);
                }
            }
        },
        getFriendCnt(callback) {
            if (inYeeCall) {
                const self = this;
                try {
                    console.log('get friend cnt');

                    window.YC.getFriendCnt({
                        success: function (cnt) {
                            console.log('get friend cnt success');

                            window.FRIENDCNT = cnt;
                            callback && callback(cnt);
                        },
                        error: function (err) {
                            console.log(err);
                            setTimeout(function () {
                                self.getFriendCnt(callback);
                            }, 500);
                        }
                    });
                } catch (e) {
                    console.log('get friend cnt catch');
                    setTimeout(function () {
                        self.getFriendCnt(callback);
                    }, 500);
                }
            }
        },
        getUserName(callback) {
            if (inYeeCall) {
                const self = this;
                try {
                    window.YC.getUserName({
                        success: function (name) {
                            window.USERNAME = name;
                            callback && callback(name);
                        },
                        error: function (err) {
                            console.log(err);
                            setTimeout(function () {
                                self.getUserName(callback);
                            }, 500);
                        }
                    });
                } catch (e) {
                    console.log(e);

                    setTimeout(function () {
                        self.getUserName(callback);
                    }, 500);
                }
            }
        },
        hideNav(flag) {
            if (inYeeCall) {
                const self = this;
                try {
                    window.YC.hideNav(flag);
                } catch (e) {
                    setTimeout(function () {
                        self.hideNav(flag);
                    }, 500);
                }
            }
        },
        hideMenu(flag) {
            if (inYeeCall) {
                const self = this;
                try {
                    console.log('hide menu try');
                    console.log('try flag is', flag);
                    window.YC.hideMenu(flag);
                } catch (e) {
                    console.log('hide menu catch');
                    console.log('catch flag is', flag);
                    setTimeout(function () {
                        self.hideMenu(flag);
                    }, 500);
                }
            }
        },
        downloadYeeCall() {
            if (isAndroid) {
                ga('send', 'event', '下载YeeCall', 'android');

                window.location.href = androidDownloadUrl;
            } else {
                ga('send', 'event', '下载YeeCall', 'IOS');

                window.location.href = iosDownloadUrl;
            }
        },
        backListener(callback) {
            backCB = (event) => {
                event.preventDefault();
                callback();
            };
            document.addEventListener('backbutton', backCB, false);
        },
        removeBackListener() {
            document.removeEventListener('backbutton', backCB);
        },
        share: debounce(function (share, username, toAll) {
            const paths = location.pathname.split('/');
            paths.pop();
            const link = `${location.origin}${paths.join('/')}/share.html?name=${btoa(encodeURI(username || window.USERNAME))}`;
            let obj = {
                custom: 'WhatApp',
                title: share.title,
                desc: share.desc,
                imgUrl: 'http://ysubcdn.gl.yeecall.com/activity/201706lotto/images/logo.jpg',
                link: link,
                textAndLink: `${share.title}\n${link}`,
                success: function () {
                    console.log('Share success~');
                },
                error: function () {
                    console.log('Share error~');
                    const obj = {
                        title: share.title,
                        desc: share.desc,
                        imgUrl: 'http://ysubcdn.gl.yeecall.com/activity/201706lotto/images/logo.jpg',
                        link: link,
                        textAndLink: `${share.title}\n${link}`,
                    };
                    console.log(obj);
                    window.YC.share(obj);
                }
            };

            try {
                if (toAll) {
                    window.YC.share(obj);
                } else {
                    window.YC.shareToCustom(obj);
                }
            } catch (e) {
                window.YC.share(obj);
            }
        }, 1000, true)
    }
});
