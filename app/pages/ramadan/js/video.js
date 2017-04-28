function urlParams() {
    let url = window.location.search.split('?').pop();
    let paramList = url.split('&');
    let params = {};
    for (let value of paramList) {
        let map = value.split('=');
        params[map[0]] = map[1];
    }
    return params;
}

const src = urlParams().src;

document.querySelector('#movie source').src = src;