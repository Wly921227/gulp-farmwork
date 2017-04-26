const COPY_WRITE = {
    // 简体中文
    CHS: {
        title: 'FAQ',
        content: [
            {
                title: '为什么我的视频价格只能设置50金币',
                text: '只有通过了视频认证的主播，才能设置更高的通话价格，完成视频认证即可'
            },
            {
                title: '如何通过视频认证',
                text: '点击『我』- 『视频认证』，按照邀请进行拍摄认证即可，视频只会用做认证使用，请放心认证'
            },
            {
                title: '对方听不到我讲话/我听不到对方说话',
                text: [
                    '1. 请检查网络环境是否良好，网络可能存在延迟导致对方听不到你说话',
                    '2. 请检查你们的手机是否允许SnapDate使用麦克风权限，开启方法：设置 - 隐私 - 麦克风 - SnapDate 选择开启'
                ]
            },
            {
                title: '视频对方看不到你/你看不到对方',
                text: [
                    '1. 请检查网络环境是否良好，网络可能存在延迟导致画面传送缓慢',
                    '2. 请检查你们的手机是否允许SnapDate使用麦克风权限，开启方法：设置 - 隐私 - 麦克风 - SnapDate'
                ]
            },
            {
                title: '怎么修改通话价格',
                text: '点击『我』 - 『你的头像』 - 在下方有设置聊天价格，点击确认即可提交修改'
            },
            {
                title: '为什么我的帐号被封号了',
                text: '违反了国家法律法规，Snapdate平台的规定等，或用户多次举报，根据规定会对违规帐号进行封号处理'
            },
            {
                title: '阅后即焚照片、视频收费',
                text: '照片为25金币，视频为50金币，价格是系统自动设置的无需设置'
            },
            {
                title: '如何设置电话/消息 免打扰',
                text: 'Snapdate可以通过首页右上角的隐身功能，自行决定是否出现在广场中'
            }
        ]
    }
};
setFontSize();
const params = urlParams();
const loc = params.loc || 'CHS';

let $title = document.querySelector('head title');
let $textList = document.querySelector('.text-list ul');

$title.innerHTML = COPY_WRITE[loc].title;
$textList.innerHTML = getContentHtml(COPY_WRITE[loc].content);

function getContentHtml(text) {
    let html = '';
    text.forEach((value) => {
        const itemText = Array.isArray(value.text) ?
            value.text.map((item) => {
                return `<p>${item}</p>`
            }).join('')
            : `<p>${value.text}</p>`;
        html += `<li>
                <div>
                    <div class="item-title">
                        <div class="icon">Q</div><strong>${value.title}</strong>
                    </div>
                    <div class="item-text">
                        ${itemText}
                    </div>
                </div>
            </li>`
    });
    return html;
}

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

function setFontSize() {
    let winWidth = window.innerWidth;
    let defaultWidth = 750 / 2;
    let itemSize = 20;
    let fontSize = winWidth / defaultWidth * itemSize / 16 * 100;
    document.querySelector('html').style.fontSize = `${fontSize}%`;
}