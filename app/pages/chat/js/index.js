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
            title: '男生暢聊秘籍',
            titleImg: boysCHT,
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
            title: '女生生暢聊秘籍',
            titleImg: girlsCHT,
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