const COPY_WRITE = {
    // 简体中文
    'zh-CN': {
        title: '提现规则',
        text: [
            '系统根据用户可提现金币数（可提现金币数 = 收入金币数 - 已提现金币数），按照现金金币兑换比例（700 金币 = 1 美元）计算可提现金额，金额四舍五入，保留小数点后一位',
            '可提现金币大于等于35000金币即可申请提现，每天至多可提交一次提现申请，如当前有正在进行的提现申请，需处理完成后方可提交新的提现申请',
            '非认证主播单笔提现金额上限为 70000 金币，认证主播单笔提现金额上限为140000金币',
            '可以选择支付宝（Alipay）或 贝宝（Paypal）两种提现方式进行收款；提现时，收取每笔10%的提现手续费（相关支付平台费用）',
            '正确填写提现资料，申请通过后，会在10个工作日内到账',
        ],
        foot: '有其他提现相关问题可以发送邮件至 <a href="mailto:money@snapdt.com">money@snapdt.com</a>'
    },
    'zh-TW': {
        title: '提現規則',
        text: [
            '系統根據用戶可提現金幣數（可提現金幣數 = 收入金幣數 - 已提現金幣數），按照現金金幣兌換比例（700 金幣 = 1 美元）計算可提現金額，金額四舍五入，保留小數點後壹位',
            '可提現金幣大於等於35000金幣即可申請提現，每天至多可提交壹次提現申請，如當前有正在進行的提現申請，需處理完成後方可提交新的提現申請',
            '非認證主播單筆提現金額上限為 70000 金幣，認證主播單筆提現金額上限為140000金幣',
            '可以選擇支付寶（Alipay）或 貝寶（Paypal）兩種提現方式進行收款；提現時，收取每筆10%的提現手續費（相關支付平臺費用）',
            '正確填寫提現資料，申請通過後，會在10個工作日內到賬',
        ],
        foot: '有其他提現相關問題可以發送郵件至 <a href="mailto:money@snapdt.com">money@snapdt.com</a>'
    },
    'en': {
        title: '提現規則',
        text: [
            '系統根據用戶可提現金幣數（可提現金幣數 = 收入金幣數 - 已提現金幣數），按照現金金幣兌換比例（700 金幣 = 1 美元）計算可提現金額，金額四舍五入，保留小數點後壹位',
            '可提現金幣大於等於35000金幣即可申請提現，每天至多可提交壹次提現申請，如當前有正在進行的提現申請，需處理完成後方可提交新的提現申請',
            '非認證主播單筆提現金額上限為 70000 金幣，認證主播單筆提現金額上限為140000金幣',
            '可以選擇支付寶（Alipay）或 貝寶（Paypal）兩種提現方式進行收款；提現時，收取每筆10%的提現手續費（相關支付平臺費用）',
            '正確填寫提現資料，申請通過後，會在10個工作日內到賬',
        ],
        foot: '有其他提現相關問題可以發送郵件至 <a href="mailto:money@snapdt.com">money@snapdt.com</a>'
    }
};

setFontSize();
const loc = getLocCode();

let $title = document.querySelector('head title');
let $textList = document.querySelector('.text-list ul');
let $foot = document.querySelector('.foot .text');

const info = COPY_WRITE[loc] || COPY_WRITE['en'];
$title.innerHTML = info.title;
$textList.innerHTML = getContentHtml(info.text);
$foot.innerHTML = info.foot;

function getLocCode() {
    let loc;
    if (navigator.appName == 'Netscape')
        loc = navigator.language.toLowerCase();
    else
        loc = navigator.browserLanguage.toLowerCase();
    if (/zh/.test(loc) && /cn/.test(loc)) {
        return 'zh-CN'
    } else if (/zh/.test(loc)) {
        return 'zh-TW'
    } else {
        return 'en'
    }
}

function getContentHtml(text) {
    let html = [];
    for (let i = 0; i < text.length; i++) {
        let item = text[i];
        html.push(`<li>
            <div class="item-text">
                <div class="icon">${i + 1}</div>
                <div class="text">${item}</div>
            </div>
        </li>`);
    }
    return html.join('');
}

function setFontSize() {
    let winWidth = window.innerWidth;
    let defaultWidth = 750 / 2;
    let itemSize = 20;
    let fontSize = winWidth / defaultWidth * itemSize / 16 * 100;
    document.querySelector('html').style.fontSize = `${fontSize}%`;
}