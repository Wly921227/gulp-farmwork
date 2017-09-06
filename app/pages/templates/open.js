var uA = navigator.userAgent;
var ua = navigator.userAgent.toLowerCase();
var isIOS = !!uA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
var isAndroid = ua.indexOf('android') > -1 || u.indexOf('linux') > -1;
var isInWX = uA.indexOf('MicroMessenger') > -1;
var isIntentChrome = uA.indexOf('like Gecko) Chrome') > -1 ? /like Gecko\) Chrome\/(\d+)\./.test(uA) : false;
var isMac = (navigator.platform === "Mac68K") || (navigator.platform === "MacPPC") || (navigator.platform === "Macintosh") || (navigator.platform === "MacIntel");
var isMacSafari = isMac && (/Version.(\d+\.\d+)/i.exec(navigator.userAgent) || window.safariHandler)
var isLowAndroid = (function () {
    if (uA.indexOf('; Android ') > -1) {
        var idx = uA.indexOf('; Android ');
        idx += '; Android '.length;
        var ver = uA.substring(idx, idx + 1);
        var ver1 = parseInt(ver);
        if (isNaN(ver1)) return null;
        ver = uA.substring(idx + 2, idx + 3);
        var ver2 = parseInt(ver);
        return [ver1, ver2];
    }
    return null;
})();

var openrichfun = 'yeecallopenrichfun://?src=yeecall://ui/entranceyeebuzz';
var intentrichfun = 'intent://yeecall/#Intent;scheme=chromeopenrichfun;package=com.yeecall.app;S.src=yeecall%3A%2F%2Fui%2Fentranceyeebuzz;end';
var url;
if (isIOS) {
    url = openrichfun;
} else if (uA.indexOf('Chrome') > 1) {
    url = intentrichfun;
}
try {
    window.location.href = url;
    var ifr = document.createElement('iframe');
    ifr.src = url || openrichfun;
    ifr.style.display = 'none';
    document.body.appendChild(ifr);
} catch (e) {
}
