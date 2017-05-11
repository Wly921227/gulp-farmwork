'use strict';

var CONTENT = {
    en: {
        back: 'Back'
    },
    ar: {
        back: 'التراجع'
    }
};
var params = urlParams();
var loc = getLocCode();

var $title = document.querySelector('title');
var $back = document.querySelector('.back a');
var $video = document.querySelector('.video');
$title.innerHTML = decodeURI(params.title);
$back.innerHTML = '&lt;&nbsp;' + CONTENT[loc].back;

$video.innerHTML = '<video id="video" src="' + params.src + '" autoplay controls="controls" poster="' + ('./' + params.img) + '">\n    <source src="' + params.src + '" type="video/mp4"/>\n</video>';

hiddenNav();
createGoogleAnalytics(params.title);

function urlParams() {
    var url = window.location.search.split('?').pop();
    var paramList = url.split('&');
    var params = {};
    for (var i = 0; i < paramList.length; i++) {
        var value = paramList[i];
        var map = value.split('=');
        params[map[0]] = map[1];
    }
    return params;
}

function hiddenNav() {
    var isYeeCall = /(YeeCall)/.test(window.navigator.userAgent);
    if (isYeeCall) {
        window.YC.hideNav(true);
    }
}

function createGoogleAnalytics(title) {
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

    ga('create', 'UA-63953912-1', 'auto', '2017 Ramadan Player ' + title);
    ga('send', 'pageview');
}

function getLocCode() {
    var loc = void 0;
    if (navigator.appName == 'Netscape') loc = navigator.language;else loc = navigator.browserLanguage;
    if (loc.indexOf('ar') > -1) {
        return 'ar';
    } else {
        return 'en';
    }
}