define({
    base: location.href.indexOf('yeecall') > -1 ?
        (location.href.indexOf('.debug') > -1 ?
            // TODO 接口线下地址端口号
            'http://in.debug.yeecall.com:5080/lotto' :
            // TODO 接口线上地址端口号
            '') :
        (location.href.indexOf('10.18.101.3') > -1 ?
            // 接口线下IP地址端口号
            'http://10.18.101.3:8906' :
            // 本地代理请求地址
            '/201706lotto'),
    activityId: '594376ddbd85b10eabdd9036',
    getWinnerList: '/lottery/enter/getAllUserLotteryInfo',
    getUserLotto: '/lottery/enter/getUserLotteryInfo',
    sendDraw: '/lottery/enter/userLottery'
});