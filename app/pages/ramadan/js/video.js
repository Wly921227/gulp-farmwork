const params = urlParams();

let $video = document.querySelector('#video');
$video.params = params.img;
let $source = document.querySelector('#video source');
$source.src = params.src;

hiddenNav();

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