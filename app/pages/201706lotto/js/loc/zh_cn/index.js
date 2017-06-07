const PRIZE = {
    1: '一部iPhone7',
    2: '100元话费卡',
    3: '50元话费卡',
    4: '10元话费卡'
};

define(['utils'], function (utils) {
    return {
        title: '邀好友赢大奖',
        banner: '邀请WhatsApp好友加入YeeCall\n抽取iPhone7大奖！',
        ticket: {
            bg: '奖券',
            unSuccessTip(num) {
                return `邀请${num}名好友加入YeeCall可抽奖一次`;
            },
            unSuccessTip2(num) {
                return `邀请${num}名好友加入YeeCall参与抽奖`;
            },
            tipTwo: '完成第一张奖券任务可解锁这个抽奖任务',
            tipTwo2: '中奖几率翻倍！',
            invited: '已邀请',
            unit: '位',
            successTip(num) {
                return `您已成功邀请${num}位好友！`;
            },
            lotto: '立即抽奖',
            unWinning: {
                tip: '很遗憾您本次未中奖！',
                text: '感谢参与'
            },
            winning: {
                tip(id) {
                    return `恭喜您，抽中${PRIZE[utils.getPrizeById(id)]}！`
                },
                callYC: 'YeeCall工作人员会在1周内联系你',
                callUs: '联系我们',
                share: '分享好友'
            }
        },
        shareButton: '邀请 WhatsApp 好友',
        prize: {
            title: '奖项设置',
            list: [{
                level: '一等奖',
                name: 'iPhone 7',
                price: '6999'
            }, {
                level: '二等奖',
                name: '100话费充值卡',
                price: '100'
            }, {
                level: '三等奖',
                name: '50话费充值卡',
                price: '50'
            }]
        },
        winnerList: {
            title: '获奖名单',
            prize(id) {
                return `抽到${PRIZE[utils.getPrizeById(id)]}`;
            }
        }
    }
});