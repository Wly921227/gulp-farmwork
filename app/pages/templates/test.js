var MY = MY || {};
var encodedSelfUrl = encodeURIComponent(window.location.href);


function imgloaderror(obj) {
    if (obj.src.indexOf('avatar-default.png') <= 0) obj.src = "http://in.debug.yeecall.com:8080/public/images/avatar-default.png";
}

function grouploaderror(obj) {
    if (obj.src.indexOf('group_def.png') <= 0) obj.src = "http://in.debug.yeecall.com:8080/public/images/group_def.png";
}

$(document).ready(function () {
    var myid = "59a7f8d984aeda553765181b";

    var isIOS = function () {
        var u = navigator.userAgent;
        return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    };

    var isAndroid = function () {
        var u = navigator.userAgent;
        return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    };

    var isInWX = function () {
        var u = navigator.userAgent;
        return u.indexOf('MicroMessenger') > -1;
    };

    var isIntentChrome = function () {
        var u = navigator.userAgent;
        if (u.indexOf('like Gecko) Chrome') > -1) {
            var found = /like Gecko\) Chrome\/(\d+)\./.exec(u);
            if (found == null) return null;
            return parseInt(found[1]);
        }
        return null;
    }

    var isMac = (navigator.platform === "Mac68K") || (navigator.platform === "MacPPC") || (navigator.platform === "Macintosh") || (navigator.platform === "MacIntel");

    var isMacSafari = function () {
        if (!isMac) return false;
        if (/Version.(\d+\.\d+)/i.exec(navigator.userAgent) || window.safariHandler) return true;
        return false;
    }

    var isLowAndroid = function () {
        var u = navigator.userAgent;
        if (u.indexOf('; Android ') > -1) {
            var idx = u.indexOf('; Android ');
            idx += '; Android '.length;
            var ver = u.substring(idx, idx + 1);
            var ver1 = parseInt(ver);
            if (isNaN(ver1)) return null;
            ver = u.substring(idx + 2, idx + 3);
            var ver2 = parseInt(ver);
            return [ver1, ver2];
        }
        return null;
    }

    var iOSVer = function () {
        var u = navigator.userAgent;
        if (u.indexOf(' iPhone OS ') > -1) {
            var idx = u.indexOf(' iPhone OS ') + ' iPhone OS '.length;
            var idxe = u.indexOf(' like ', idx);
            var ver = u.substring(idx, idxe);
            var vers = ver.split('_');
            for (var i = 0; i < vers.length; ++i) {
                vers[i] = parseInt(vers[i]);
            }
            return vers;
        }
        return [-1];
    }

    var isFBIOS9 = function () {
        var u = navigator.userAgent;
        if (u.indexOf('FBAN/FBIOS') > -1) {
            var ver = iOSVer();
            if (ver[0] >= 9) return true;
        }
        return false;
    }

    var isFBMessengerIOS9 = function () {
        var u = navigator.userAgent;
        if (u.indexOf('FBAN/Messenger') > -1) {
            var ver = iOSVer();
            if (ver[0] >= 9) return true;
        }
        return false;
    }

    var notInstall = window.location.href.indexOf('isappinstalled=0') > -1;
    try {
        if (!(/MicroMessenger|Qzone|QQ|Chrome/.test(navigator.userAgent))) {
            var myurl = 'yeecallinvite://?src=' + encodeURIComponent(window.location.href);
            var aVer = isLowAndroid();
            if (aVer != null && aVer[0] <= 4) {
            }
            else if (!isIOS() && !notInstall && !isMacSafari()) {
                window.location.href = myurl;
            }
        }
    } catch (e) {
    }

    var intentUrl = function () {
        var currUrl = window.location.href;
        currUrl += "&notinst=1";
        var myurl = 'intent://yeecall/#Intent;scheme=invite;package=com.yeecall.app;S.src=' +
            encodeURIComponent(currUrl) + ';S.browser_fallback_url=' + encodeURIComponent(currUrl) + ';end';
        return myurl;
    }

    function adjustGnameTop() {
        var groupNameLine = $("#gname")[0];
        var styleGN = window.getComputedStyle(groupNameLine, null);
        var gnameHeight = parseFloat(styleGN.getPropertyValue('height'));
        var gnameLineHeight = parseFloat(styleGN.getPropertyValue('line-height'));
        if (gnameHeight > gnameLineHeight * 1.5) {
            $("#gname").css("margin-top", "1rem");
        }
    }

    try {
        adjustGnameTop();
    } catch (e) {
    }


    var loadAvatar = function () {
        var imgDefer = document.getElementsByTagName('img');
        for (var i = 0; i < imgDefer.length; i++) {
            if (imgDefer[i].getAttribute('datasrc')) {
                imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('datasrc'));
            }
        }
    };

    $(".download-btn").click(function () {
        //MY.download();
        if (MY.isInWX()) MY.download();
        else {
            location.href = "http://friendshare.onelink.me/2918121455?pid=sharelink";
        }
        $("#not-install-tip-full").hide();
    });

    var openInBrowser = function () {
        var winHeight = $(window).height();
        $(".weixin-tip").css("height", winHeight);
        $(".weixin-tip").show();
    };

    var openInBrowser2 = function () {
        var winHeight = $(window).height();
        $(".fbmsger").css("height", winHeight);
        $(".fbmsger").show();
    };

    if (isInWX() || isFBIOS9()) {
        $(".open-yeecall").click(openInBrowser);
        if (isIOS()) {
            var ori = $('#openinbrowser').text();
            var tor = ori.replace('浏览器', 'Safari');
            tor = tor.replace('browser', 'Safari');
            $('#openinbrowser').text(tor);
        }
    } else if (isFBMessengerIOS9()) {
        $(".open-yeecall").click(openInBrowser2);
    } else {
        $(".open-yeecall").click(function () {
            var myurl = 'yeecallinvite://?src=' + encodeURIComponent(window.location.href);
            var ifr = document.createElement('iframe');
            ifr.src = myurl;
            ifr.style.display = 'none';
            document.body.appendChild(ifr);

            var timeout = 1000;
            var isChrome = isIntentChrome();
            if (isIOS()) {
                if (!(/Qzone|QQ/.test(navigator.userAgent))) {
                    if (iOSVer()[0] > 8 && !(/MicroMessenger|Chrome/.test(navigator.userAgent))) {
                        timeout = 3000;
                        //console.log("iOS ver:"+iOSVer());
                    } else myurl = null;
                } else if (iOSVer()[0] > 8) {
                    timeout = 2500;
                }
            }
            else if (isChrome != null && isChrome == 39) {
                myurl = null;
            } else if (navigator.userAgent.indexOf('Chrome') > 1) {
                myurl = intentUrl();
            } else if (!(/MicroMessenger|Qzone|QQ|Chrome/.test(navigator.userAgent)) &&
                !(window.location.href.indexOf('isappinstalled=1') > -1)) {
                myurl = null;
            }
            if (myurl != null) {
                try {
                    window.location.href = myurl;
                } catch (e) {
                }
            }
            window.setTimeout(function () {
                document.body.removeChild(ifr);
                $("#not-install-tip-full").show();
                var ent = "mouseup";
                if (isIOS()) {
                    ent = "touchstart";
                }
                $(document).on(ent, function (e) {
                    var container = $("#not-install-tip-full");
                    if (container[0] == e.target) {
                        $("#not-install-tip-full").hide();
                    }
                });
            }, timeout);

        });
    }

    $("#intent-open-a").click(function () {
        try {
            var tourl = intentUrl();
            if (!(/Chrome/.test(navigator.userAgent))) {
                tourl = 'yeecallinvite://?src=' + encodedSelfUrl;
            }
            window.location.href = tourl;
        } catch (e) {
        }
        if (isIntentChrome() == null) {
            window.setTimeout(function () {
                alert("如果一块没有自动启动，请手动启动，或者在系统浏览器里打开此页面。");
            }, 3000);
        }
    });


    var init = (function () {
        loadAvatar();
        var oritext = $("#tocopyurld").text();
        var totext = oritext.replace("http://t.cn/", "tcn")
        $("#tocopyurld").text(totext);
        if (window.location.href.indexOf('&notinst=1') > 0) {
            alert("跳转失败 \n1.如果已安装\"一块\"，请重新刷新页面重试 \n2.如果你没有安装\"一块\"或版本过低，请下载安装最新版本");
            $("#not-install-tip-full").show();
            $(document).mouseup(function (e) {
                var container = $("#not-install-tip-full");
                if (container[0] == e.target) {
                    $("#not-install-tip-full").hide();
                }
            });

        }
        if (/Chrome/.test(navigator.userAgent)) {
            $("#intent-open-a")[0].href = intentUrl();
        } else {
            $("#intent-open-a")[0].href = 'yeecallinvite://?src=' + encodedSelfUrl;
        }
        if (isIOS() && /QQ/.test(navigator.userAgent)) {
            $(".open-yeecall a")[0].href = 'yeecallinvite://?src=' + encodedSelfUrl;
        }
    })();

    function contentHeight(fontSize) {
        var contht = $('#invitecont').height();
        if (!contht) {
            var dcrect = document.getElementById('invitecont').getBoundingClientRect();
            contht = dcrect.height;
        }
        if (!contht) {
            contht = 15 * fontSize;
        }
        return contht;
    }

    function resizeCont(force) {
        //resize height of invite-content.
        var style = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
        var fontSize = parseFloat(style);
        var fheight = $(window).height() || window.innerHeight || window.height;
        var btm = $('#open-yeecall').bottom || document.getElementById('open-yeecall').getBoundingClientRect().bottom;
        if (btm + 0.75 * fontSize > fheight + 5 ||
            (isIOS() && btm + 0.75 * fontSize < fheight - 20)) {
            var contht = contentHeight(fontSize);
            var adjust = btm - fheight + 0.75 * fontSize;
            if (adjust < -15) adjust += 15;
            var fs = adjust * 100 / contht;
            if (fs >= 35) fs = 35;
            if (fs <= -35) {
                if (force != 1) return;
                fs = -35;
            }
            var tofs = 100 - fs;
            $('.invitecont').css('font-size', tofs + '%');
        }
    }

    resizeCont(0);
    window.setTimeout(function () {
        resizeCont(1);
    }, 100);
});