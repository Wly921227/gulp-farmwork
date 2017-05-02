const boysCHS = 'images/boys-CHS.png';
const boysCHT = 'images/boys-CHT.png';
const girlsCHS = 'images/girls-CHS.png';
const girlsCHT = 'images/girls-CHT.png';
const COPY_WRITE = {
    // 简体中文
    'zh-CN': {
        boy: {
            title: '男生畅聊秘籍',
            titleImg: boysCHS,
            content: [
                {
                    title: '完善个人资料',
                    text: '完善个人资料，挑几张自己的帅照作为头像，妹子会更愿意和你聊天视频。'
                }, {
                    title: '主动打招呼',
                    text: '在“热门”，“附近”，“新人”，“全球”中找到喜欢的女生，进入页面点击聊天，即可和对方打招呼，据说发个小礼物过去，妹子会很快回复。'
                }, {
                    title: '礼貌+礼物',
                    text: '视频过程中，保持礼貌留下好感，妹子更容易被撩到，当然直接砸礼物肯定最有效的绝招了。'
                },
            ]
        },
        girl: {
            title: '女生畅聊秘籍',
            titleImg: girlsCHS,
            content: [
                {
                    title: '自拍认证',
                    text: '自拍认证通过后，可以上热门，有机会提高自己的排名，提高曝光率，自然会有更多的人来找到你。用户会更愿意跟拥有认证标识的女生聊天。'
                }, {
                    title: '完善个人资料',
                    text: '上传多张高质量自拍照片，学会找到最适合的角度和重点，展现自己的美，不要发和自己无关的图片。另外认真填写个人资料，使用个人签名介绍自己，可以有效提高关注度\n经常更新头像照片和自拍，挑选最有吸引力的照片作为头像，也是非常有效的方法。'
                }, {
                    title: '主动打招呼',
                    text: '主动和附近的人，全球等页面的用户打招呼，主动和他们聊天，可以找到更多想要和你视频的人。还可以给他们发送收费的阅后即焚图片/视频，对方查看后，你也可以获得收益，此外消息中也可以接受土豪的礼物打赏。'
                }, {
                    title: '联系之前聊过天的朋友',
                    text: '每天早，晚和之前聊过的人打招呼问好，尤其记得和自己聊得不错的朋友，保持互动和联系，可以明显增加收入。'
                }, {
                    title: '视频通话和评价',
                    text: '设置合适自己的视频通话价格建议（100-300金币之间），价格过高有可能减少与你视频的人数。视频聊天过程中，记得跟土豪们要礼物作为打赏哦，聊天结束前记得跟对方要好评，评价越高，你在热门的排行就会越靠前。'
                }, {
                    title: '与其他播主多交流',
                    text: '加入官方QQ群，与日赚1000元的播主们一起交流分享赚钱的经验和秘籍。SnapDate官方QQ群：586829614，添加时需要备注你的SnapDate ID，我们审核通过后即可加入。'
                }
            ]
        }
    },
    // 繁体中文
    'zh-TW': {
        boy: {
            title: '聊天小撇步',
            titleImg: boysCHT,
            content: [
                {
                    title: '完成個人資料',
                    text: '完成個人資料填寫，挑選自己最滿意的照片做成頭像，會更吸引美眉們與你視訊。'
                }, {
                    title: '主動打招呼',
                    text: '在“熱門”、“附近”、“新人”、“全球”中找到心儀的美眉，進入頁面點擊聊天，可以開始打招呼。試試發個小禮物過去，美眉通常會很喜歡的。'
                }, {
                    title: '禮貌+禮物',
                    text: '視訊過程中，請保持你的禮貌和紳士風度，你會更加受到美眉的歡迎。'
                },
            ]
        },
        girl: {
            title: '聊天小撇步',
            titleImg: girlsCHT,
            content: [
                {
                    title: '自拍照片認證',
                    text: '自拍照片認證通過後，會給妳一枚認證標誌，就有機會上熱門榜來提高自己的排名，增加曝光率，吸引更多的Snapdate用戶來找妳聊天。'
                }, {
                    title: '填妥個人資料&照片',
                    text: '上傳多張且清晰的自拍照片，不論是可愛賣萌、健康性感、清新脫俗，盡妳所能展現自己最美的一面。另外，請填妥個人資料，使用個人簽名介紹自己，提高自己的關注度。\n經常更換新頭像和自拍照片，選出最優質的照片表達自己，也是個不錯的找朋友方法。'
                }, {
                    title: '主動打招呼',
                    text: '主動和附近的人、全球等頁面的用戶打招呼，和他們聊天，可以增加更多視訊的機會。還可以給他們發送收費的閱後即焚圖片或影片，對方觀看後，妳也可以獲得收益。此外，訊息中也可以接受贈送的禮物。'
                }, {
                    title: '聯繫之前聊過天的朋友',
                    text: '常和之前聊過的人說早安、晚安，尤其是對一直聊得不錯的朋友，保持經常的互動和聯繫，也可以有效的增加收益。'
                }, {
                    title: '視訊通話和評價',
                    text: '設定適當的視頻通話收費價格，建議在100-300金幣之間，過高的價格可能會降低與妳視頻通話的機會。聊天的過程當中，記得撒嬌要禮物哦！聊天結束前也要記得提醒對方給予好評，評價越高，妳在熱門排行榜的排名就會越高。'
                }, {
                    title: '與其他播主們多交流',
                    text: '加入官方QQ群，與日賺千金的播主們一起交流分享經驗和秘笈！Snapdate官方QQ群：111111111，申請進群時需要備註妳的Snapdate ID，審核通過後即可加入。'
                }
            ]
        }
    },
    // 英文
    'en': {
        boy: {
            title: 'Chat secrets for boys',
            titleImg: boysCHS,
            content: [
                {
                    title: '完善个人资料',
                    text: '完善个人资料，挑几张自己的帅照作为头像，妹子会更愿意和你聊天视频。'
                }, {
                    title: '主动打招呼',
                    text: '在“热门”，“附近”，“新人”，“全球”中找到喜欢的女生，进入页面点击聊天，即可和对方打招呼，据说发个小礼物过去，妹子会很快回复。'
                }, {
                    title: '礼貌+礼物',
                    text: '视频过程中，保持礼貌留下好感，妹子更容易被撩到，当然直接砸礼物肯定最有效的绝招了。'
                },
            ]
        },
        girl: {
            title: 'Chat secrets for girls',
            titleImg: girlsCHS,
            content: [
                {
                    title: '自拍认证',
                    text: '自拍认证通过后，可以上热门，有机会提高自己的排名，提高曝光率，自然会有更多的人来找到你。用户会更愿意跟拥有认证标识的女生聊天。'
                }, {
                    title: '完善个人资料',
                    text: '上传多张高质量自拍照片，学会找到最适合的角度和重点，展现自己的美，不要发和自己无关的图片。另外认真填写个人资料，使用个人签名介绍自己，可以有效提高关注度\n经常更新头像照片和自拍，挑选最有吸引力的照片作为头像，也是非常有效的方法。'
                }, {
                    title: '主动打招呼',
                    text: '主动和附近的人，全球等页面的用户打招呼，主动和他们聊天，可以找到更多想要和你视频的人。还可以给他们发送收费的阅后即焚图片/视频，对方查看后，你也可以获得收益，此外消息中也可以接受土豪的礼物打赏。'
                }, {
                    title: '联系之前聊过天的朋友',
                    text: '每天早，晚和之前聊过的人打招呼问好，尤其记得和自己聊得不错的朋友，保持互动和联系，可以明显增加收入。'
                }, {
                    title: '视频通话和评价',
                    text: '设置合适自己的视频通话价格建议（100-300金币之间），价格过高有可能减少与你视频的人数。视频聊天过程中，记得跟土豪们要礼物作为打赏哦，聊天结束前记得跟对方要好评，评价越高，你在热门的排行就会越靠前。'
                }, {
                    title: '与其他播主多交流',
                    text: '加入官方QQ群，与日赚1000元的播主们一起交流分享赚钱的经验和秘籍。SnapDate官方QQ群：586829614，添加时需要备注你的SnapDate ID，我们审核通过后即可加入。'
                }
            ]
        }
    }
};

setFontSize();
const params = urlParams();
// const loc = params.loc || 'CHS';
const loc = getLocCode();
const gender = params.gender || 'girl';

let $title = document.querySelector('head title');
let $titleImg = document.querySelector('.title img');
let $content = document.querySelector('.content');
let $textList = document.querySelector('.text-list ul');

const info = COPY_WRITE[loc] || COPY_WRITE['en'];
$title.innerHTML = info[gender].title;
$titleImg.src = info[gender].titleImg;
$content.className += ' ' + gender;
$textList.innerHTML = getContentHtml(info[gender].content);

function getLocCode() {
    let loc;
    if (navigator.appName == 'Netscape')
        loc = navigator.language;
    else
        loc = navigator.browserLanguage;
    if (loc.indexOf('zh-CN') > -1) {
        return loc
    } else if (loc.indexOf('zh-') > -1) {
        return 'zh-TW'
    } else {
        return 'en'
    }
}

function getContentHtml(text) {
    let html = '';
    text.forEach((value, key) => {
        html += `<li>
                <div>
                    <div class="item-title">
                        <div class="icon">${key + 1}</div><strong>${value.title}</strong>
                    </div>
                    <div class="item-text">
                        <p>${value.text}</p>
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
    for (let i = 0; i < paramList.length; i++) {
        let value = paramList[i];
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