define({
    base: location.href.indexOf('yeecall') > -1 ?
        (location.href.indexOf('.debug') > -1 ?
            'http://in.debug.yeecall.com:5080/lotto' :
            // TODO 本线上接口地址
            'https://loweb.gl.yeecall.com') :
        (location.href.indexOf('10.18.101.3') > -1 ?
            // 接口线下IP地址端口号
            'http://10.18.101.3:8906' :
            // 本地代理请求地址
            '/201706lotto'),
    base2: location.href.indexOf('yeecall') > -1 ?
        (location.href.indexOf('.debug') > -1 ?
            'http://in.debug.yeecall.com:5080/lotto' :
            // TODO 低版本线上接口地址
            'https://loweb1.gl.yeecall.com') :
        (location.href.indexOf('10.18.101.3') > -1 ?
            // 接口线下IP地址端口号
            'http://10.18.101.3:8906' :
            // 本地代理请求地址
            '/201706lotto'),
    activityId: (location.href.indexOf('yeecall') > -1 && location.href.indexOf('.debug') === -1) ?
        '5954d795bc67881c594c4ca9' :
        '594376ddbd85b10eabdd9036',
    getWinnerList: '/lottery/enter/getAllUserLotteryInfo',
    getUserLotto: '/lottery/enter/getUserLotteryInfo',
    sendDraw: '/lottery/enter/userLottery'
});