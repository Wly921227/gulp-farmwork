window.onload = () => {
    setFontSize();
    const iosDownloadUrl = "https://itunes.apple.com/cn/app/yi-kuai-zui-ku-wang-luo-dian/id852211576?mt=8";
    const androidDownloadUrl = "market://details?id=com.yeecall.app";
    const ua = navigator.userAgent;
    const isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1; //android
    const isYeeCall = /(YeeCall)/.test(ua);
    // const isYeeCall = true;
    // 事件
    const operation = {
        download() {
            if (isAndroid) {
                window.location.href = androidDownloadUrl
            } else {
                window.location.href = iosDownloadUrl
            }
        }
    };
    // 判断可展示视频
    // const startDate = new Date('2017/04/20').getTime();
    const now = +new Date;
    // 创建时间排序
    Data.sort((a, b) => {
        return a.cTime - b.cTime;
    });
    // 是否到可展示日期
    let List = [];
    for (let i = 0; i < Data.length; i++) {
        let item = Data[i];
        const showDate = new Date(item.showDate).getTime();
        if (showDate < now) {
            List.push(item)
        }
    }
    List = isYeeCall ? List : List.slice(0, 3);

    let html = [];
    for (let i = 0; i < List.length; i++) {
        let item = List[i];
        const views = getViewsNum(item.cTime);
        const time = formatTime(item.time);
        html.push(`<li>
            <div class="item">
                <a href="./video.html?src=${item.videoSrc}&img=${item.imageSrc}">
                    <div class="player-box">
                        <div class="icon">
                        </div>
                        <div class="img">
                            <img src="${item.imageSrc}" alt="${item.title}">
                        </div>
                        <div class="info">
                            <div class="info-item">${views} views</div>
                            <div class="info-item">${time}</div>
                        </div>
                    </div>
                </a>
                <a href="./video.html?src=${item.videoSrc}&img=${item.imageSrc}">
                    <div class="title">
                        ${item.title}
                    </div>
                </a>
            </div>
        </li>`);
    }

    const $list = document.querySelector('.content ul');
    $list.className += isAndroid ? ' android' : ' ios';
    $list.innerHTML = html.join('');
    $list.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        return false;
    });

    showDownload();
    loadImg();

    function loadImg() {
        if (isAndroid) {
            let img1 = new Image();
            img1.src = './images/ic_play_circle_filled_white.png';
            let img2 = new Image();
            img2.src = './images/ic_play_circle_filled_white_pressed.png';
        } else {
            let img1 = new Image();
            img1.src = './images/ic_play@3x.png';
            let img2 = new Image();
            img2.src = './images/ic_play_pressed@3x.png';
        }
    }

    function formatTime(time) {
        // time = time / 1000;  // ms / s
        let format = '';
        const hour = parseInt(time / 60 / 60);
        const minute = parseInt((time / 60) % 60);
        const second = time % 60;
        if (hour) {
            format += toDou(hour) + ':';
        }
        format += toDou(minute) + ':';
        format += toDou(second);

        return format
    }

    function toDou(n) {
        return n < 10 ? '0' + n : '' + n;
    }

    function getViewsNum(cTime) {
        const onlineDay = parseInt((now - new Date(cTime).getTime()) / 60 / 60 / 24 / 1000);
        let views = 0;
        for (let i = 0; i < onlineDay; i++) {
            views += (Math.random() * 100) + 1000;
        }

        return parseInt(views).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }

    function showDownload() {
        if (!isYeeCall) {
            const $downloadBox = document.querySelector('.download');
            const $download = $downloadBox.querySelector('.download-link');
            $downloadBox.style.display = 'block';
            $download.addEventListener('click', operation.download);
        } else {
            window.YC.hideNav(true);
        }
    }

    function setFontSize() {
        let winWidth = window.innerWidth;
        let defaultWidth = 1080;    // 设计图宽度
        let itemSize = 24 * 2;          // 期望1rem=设计图24px * 2
        let oneRem = winWidth / (defaultWidth / itemSize);  // 屏幕1rem=Xpx
        let fontSize = oneRem / 16 * 100;
        document.querySelector('html').style.fontSize = `${fontSize}%`;
        window.addEventListener('resize', setFontSize);
    }
};
