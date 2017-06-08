define(['utils'], function (utils) {
    const PRIZE = {
        1: '一部iPhone7',
        2: '100元话费卡',
        3: '50元话费卡',
        4: '10元话费卡'
    };

    return {
        title: '邀好友赢大奖',
        banner(name){
            return `您的好友${name}正在参加`
        },
        banner2: '邀请WhatsApp好友加入YeeCall抽取iPhone7大奖！',
        shareButton: '我也要参加这个活动',
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