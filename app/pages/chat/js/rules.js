const COPY_WRITE = {
    // 简体中文
    CHS: {
        title: '提现规则',
        text: [
            '系统根据用户可提现金币数（可提现金币数 = 收入金币数 - 已提现金币数），按照现金金币兑换比例（700 金币 = 1 美元）计算可提现金额，金额四舍五入，保留小数点后一位',
            '可提现金币大于等于35000金币即可申请提现，每天至多可提交一次提现申请，如当前有正在进行的提现申请，需处理完成后方可提交新的提现申请',
            '非认证主播单笔提现金额上限为 70000 金币，认证主播单笔提现金额上限为140000金币',
            '可以选择支付宝（Alipay）或 贝宝（Paypal）两种提现方式进行收款；提现时，收取每笔10%的提现手续费（相关支付平台费用）',
            '正确填写提现资料，申请通过后，会在10个工作日内到账',
        ],
        foot: '有其他提现相关问题可以发送邮件至 <a href="mailto:money@snapdt.com">money@snapdt.com</a>'
    }
};

setFontSize();
const params = urlParams();
const loc = params.loc || 'CHS';

let $title = document.querySelector('head title');
let $textList = document.querySelector('.text-list ul');
let $foot = document.querySelector('.foot .text');

$title.innerHTML = COPY_WRITE[loc].title;
$textList.innerHTML = getContentHtml(COPY_WRITE[loc].text);
$foot.innerHTML = COPY_WRITE[loc].foot;

function getContentHtml(text) {
    let html = '';
    text.forEach((value, key) => {
        html += `<li>
                <div class="item-text">
                    <div class="icon">${key + 1}</div>
                    <div class="text">${value}</div>
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