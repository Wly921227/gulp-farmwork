define(['jquery'], function ($) {
    const ua = navigator.userAgent.toLowerCase();
    const inYeeCall = /yeecall/.test(ua);
    const isAndroid = ua.indexOf('android') > -1 || ua.indexOf('adr') > -1;
    const isOffline = location.href.indexOf('.debug') > -1 || location.href.indexOf('10.18.101.') > -1;
    const iosDownloadUrl = 'https://itunes.apple.com/cn/app/yi-kuai-zui-ku-wang-luo-dian/id852211576?mt=8';
    const androidDownloadUrl = 'market://details?id=com.yeecall.app';
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
    return {
        inYeeCall,
        isAndroid,
        debounce,
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
                    case 1:
                        return 1;   // iPhone
                    case 2:
                        return 2;   // 100
                    case 3:
                        return 3;   // 50
                    case 4:
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
                    return 'zh_cn';
                } else if (/yclan\/zh/.test(ua)) {
                    // return 'zh_tw';
                    return 'zh_cn';
                } else if (/yclan\/ar/.test(ua)) {
                    $('body').addClass('ar');
                    return 'ar';
                    // return 'zh_cn';
                } else {
                    return 'en';
                    // return 'zh_cn';
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
                    // return 'zh_cn';
                } else if (/zh/.test(loc) && /cn/.test(loc)) {
                    // 简体中文
                    return 'zh_cn';
                } else if (/zh/.test(loc)) {
                    // 繁体中文
                    // return 'zh_tw'
                    return 'zh_cn';
                } else {
                    // 英文
                    return 'en';
                    // return 'zh_cn';
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
            $('title').html(loc.title);
            if (loc.share) {
                $('meta[name="keywords"]').html(loc.share.title());
                $('meta[name="description"]').html(loc.share.desc);
            }
            if (!isAndroid && inYeeCall) {
                const self = this;
                try {
                    window.YC.setTitle({
                        title: loc.title
                    });
                } catch (e) {
                    setTimeout(function () {
                        self.setTitle(loc);
                    }, 20);
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
                            }, 20);
                        }
                    });
                } catch (e) {
                    console.log('get cookie catch');

                    setTimeout(function () {
                        self.setCookie(callback);
                    }, 20);
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
                            // window.FRIENDCNT = 15;
                            // callback && callback(window.FRIENDCNT);
                        },
                        error: function (err) {
                            console.log(err);
                            setTimeout(function () {
                                self.getFriendCnt(callback);
                            }, 20);
                        }
                    });
                } catch (e) {
                    console.log('get friend cnt catch');
                    setTimeout(function () {
                        self.getFriendCnt(callback);
                    }, 20);
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
                            }, 20);
                        }
                    });
                } catch (e) {
                    console.log(e);

                    setTimeout(function () {
                        self.getUserName(callback);
                    }, 20);
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
                    }, 20);
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
                    }, 20);
                }
            }
        },
        downloadYeeCall() {
            if (isAndroid) {
                window.location.href = androidDownloadUrl;
            } else {
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
        share: debounce(function (share, username) {
            const paths = location.pathname.split('/');
            paths.pop();
            const link = `${location.origin}${paths.join('/')}/share.html?name=${encodeURI(username || window.USERNAME)}`;
            let obj = {
                custom: 'WhatApp',
                title: share.title,
                desc: share.desc,
                imgUrl: 'http://ysubcdn.gl.yeecall.com/favicon.ico',
                link: link,
                textAndLink: `${share.desc}: ${link}`,
                success: function () {
                    console.log('Share success~');
                },
                error: function () {
                    console.log('Share error~');
                    const obj = {
                        title: share.title,
                        desc: share.desc,
                        imgUrl: 'http://ysubcdn.gl.yeecall.com/favicon.ico',
                        link: link,
                        textAndLink: `${share.desc}: ${link}`,
                    };
                    console.log(obj);
                    window.YC.share(obj);
                }
            };

            try {
                window.YC.shareToCustom(obj);
            } catch (e) {
                window.YC.share(obj);
            }
        }, 1000, true)
    }
});
