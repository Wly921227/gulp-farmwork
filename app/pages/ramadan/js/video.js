const params = urlParams();
const CONTENT = {
    en: {
        back: 'Back'
    },
    ar: {
        back: 'التراجع'
    }
};
const loc = getLocCode();

let $title = document.querySelector('title');
$title.innerHTML = decodeURI(params.title);
let $video = document.querySelector('.video');
$video.innerHTML = `<video id="video" src="${'./' + params.src}" autoplay controls="controls" poster="${'./' + params.src}">
    <source src="${'./' + params.src}" type="video/mp4"/>
</video>`;
let $back = document.querySelector('.back a');
$back.innerHTML = '&lt;&nbsp;' + CONTENT[loc].back;
$back.href = 'index.html?top=' + params.top;

hiddenNav();
createGoogleAnalytics(params.title);

function urlParams() {
    let url = window.location.search.split('?').pop();
    let paramList = url.split('&');
    let params = {};
    for (let i = 0; i < paramList.length; i++) {
        let value = paramList[i];
        let map = value.split('=');
        params[map[0]] = map[1];
    }
    return params;
}

function hiddenNav() {
    const isYeeCall = /(YeeCall)/.test(window.navigator.userAgent);
    if (isYeeCall) {
        window.YC.hideNav(true);
    }
}

function createGoogleAnalytics(title) {
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

    ga('create', 'UA-63953912-1', 'auto', '2017 Ramadan Player ' + title);
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