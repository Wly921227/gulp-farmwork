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

const params = urlParams();
document.querySelector('#video').poster = params.img;
document.querySelector('#video source').src = params.src;
