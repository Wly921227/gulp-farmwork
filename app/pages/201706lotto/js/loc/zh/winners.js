define(function () {
    const PRIZE = {
        1: 'iPhone7一台',
        2: '话费卡',
        3: '话费卡',
        4: '话费卡'
    };

    return {
        title: '本周获奖名单',
        joinIn: '参加活动',
        statement: '本活动最终解释权归 YeeCall 所有',
        callUs: {
            callUs: '联系我们',
            tip: '，获取你的奖品'
        },
        prize(id) {
            return `抽到${PRIZE[id]}`;
        },
        winnerList: '其他奖项',
        dialog: {
            title: '如需联系我们',
            text: '请搜索YeeCall ID：',
            id: 'WiniPhone2017',
            ok: '确认'
        }
    }
});