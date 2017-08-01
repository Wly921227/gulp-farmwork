define(function () {
    const PRIZE = {
        1: 'iPhone7一台',
        2: '话费卡',
        3: '话费卡',
        4: '话费卡'
    };

    return {
        title: '邀好友赢 iPhone7',
        error: '网络异常，请检查网络！',
        banner(name){
            return `你的好友${name}正参加集YeeCall好友抽iPhone7的活动`;
        },
        banner2: '邀请 WhatsApp 好友加入 YeeCall\n抽取 iPhone7 大奖！',
        addText: '1 in every 5 installed will win',
        shareButton: '我也要赢iPhone7',
        prize: {
            title: '奖项设置',
            tip: '话费卡',
            list: [{
                level: '一等奖',
                name: 'iPhone 7',
                price: '6999'
            }, {
                level: '二等奖',
                name: '话费充值卡',
                price: '100'
            }, {
                level: '三等奖',
                name: '话费充值卡',
                price: '50'
            }]
        },
        winnerList: {
            title: '获奖名单',
            prize(id) {
                return `抽到 ${PRIZE[id]}`;
            }
        },
        statement: '*本活动最终解释权归 YeeCall 所有',
        statement2: '*本活动与苹果公司无关',
        join: {
            title: '我该如何参与活动？',
            free: '免费',
            tip1: {
                text: '下载最新版YeeCall',
                btn: '下载YeeCall'
            },
            tip2: {
                text: '进入YeeCall参与活动',
                btn: '邀好友 赢 iPhone 7',
                class: 'zh'
            },
            open: '已经安装？点击这里'
        },
        share: {
            title() {
                const n = parseInt(Math.random() * 1000);
                return n % 2 ? '加入YeeCall赢取iPhone' : '下载YeeCall赢取iPhone';
            },
            desc() {
                return '邀请更多好友加入YeeCall有机会抽取iPhone7';
            }
        }
    }
});