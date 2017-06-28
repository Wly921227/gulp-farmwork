define(function () {
    const PRIZE = {
        1: 'iPhone7一台',
        2: '话费卡',
        3: '话费卡',
        4: '话费卡'
    };

    return {
        title: '邀好友赢 iPhone7',
        banner: '邀请WhatsApp好友加入YeeCall\n抽取iPhone7大奖！',
        ticket: {
            bg: '奖券',
            unSuccessTip(num) {
                return `邀请 ${num} 名好友加入 YeeCall 可参与抽奖`;
            },
            tipTwo: '完成第一张奖券任务可解锁这个抽奖任务',
            tipTwo2: '中奖几率翻倍！',
            invited: '已邀请',
            unit: '位',
            successTip(num, flag) {
                if (flag && num > 3) {
                    num = 3;
                }
                return `您已成功邀请${num}位好友！`;
            },
            lotto: '立即抽奖',
            unWinning: {
                tip: '没关系，邀请好友再玩一次',
                tip2: '谢谢参与本次活动，期待你下次赢取大奖',
                text: '感谢参与',
                share: '邀朋友参加'
            },
            winning: {
                tip(id) {
                    return `恭喜你，抽中 ${PRIZE[id]}`
                },
                callYC: 'YeeCall工作人员会在3个工作日内联系你',
                callUs: '联系我们',
                share: '分享好友'
            }
        },
        shareButton: '邀请 WhatsApp 好友',
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
        statement: '本活动最终解释权归 YeeCall 所有',
        prizeTip: {
            no: '再接再厉，继续邀请好友期待下一次能中奖！',
            no2: '谢谢参与本次活动，期待你下次赢取大奖',
            1: '恭喜你，抽中一部 iPhone 7！',
            2: '恭喜你，中了100话费 ！',
            3: '恭喜你，中了50话费 ！',
            4: '恭喜你，中了10话费 ！',
            noShare: '邀请 WhatsApp 好友',
            share: '告诉好友一起来玩',
            tips: 'YeeCall工作人员会通过YeeCall team在3个工作日内联系你',
            callUs: '联系我们'
        },
        share: {
            title() {
                const n = parseInt(Math.random() * 1000);
                return n % 2 ? '加入YeeCall赢取iPhone' : '下载YeeCall赢取iPhone';
            },
            desc() {
                return '邀请更多好友加入YeeCall有机会抽取iPhone7';
            }
        },
        winShare: {
            title(id) {
                return `我在YeeCall赢了${PRIZE[id]}，还有更多奖品等着你！`;
            },
            desc() {
                const n = parseInt(Math.random() * 1000);
                return n % 2 ? '加入YeeCall赢取iPhone' : '下载YeeCall赢取iPhone';
            }
        },
        error: '网络异常，请检查网络！',
        dialog: {
            title: '如需联系我们',
            text: '请搜索YeeCall ID：',
            id: 'WiniPhone2017',
            ok: '确认'
        }
    }
});