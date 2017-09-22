define({
    base: location.href.indexOf('yeecall') > -1 ?
        (location.href.indexOf('.debug') > -1 ?
            'http://in.debug.yeecall.com:5080/lotto' :
            'https://loweb.gl.yeecall.com') :
        (location.href.indexOf('10.18.101.3') > -1 ?
            // 接口线下IP地址端口号
            'http://10.18.101.3:8906' :
            // 本地代理请求地址
            '/201706lotto'),
    base2: location.href.indexOf('yeecall') > -1 ?
        (location.href.indexOf('.debug') > -1 ?
            'http://in.debug.yeecall.com:5080/lotto' :
            'https://loweb1.gl.yeecall.com') :
        (location.href.indexOf('10.18.101.3') > -1 ?
            // 接口线下IP地址端口号
            'http://10.18.101.3:8906' :
            // 本地代理请求地址
            '/201706lotto'),
    activityId: (location.href.indexOf('yeecall') > -1 && location.href.indexOf('.debug') === -1) ?
        // 线上
        '59c4cabdbf82fb3ed32316cc' :
        // 线下
        '59c4cabdbf82fb3ed32316cc',
    getWinnerList: '/lottery/enter/getAllUserLotteryInfo',
    getUserLotto: '/lottery/enter/getUserLotteryInfo',
    sendDraw: '/lottery/enter/userLottery'
});