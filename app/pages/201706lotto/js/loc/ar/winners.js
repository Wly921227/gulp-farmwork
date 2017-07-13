define(function () {
    const PRIZE = {
        1: 'iPhone7',
        2: 'كارت الشحن بمبلغ',
        3: 'كارت الشحن بمبلغ',
        4: 'كارت الشحن بمبلغ'
    };

    return {
        title: '中奖名单',
        joinIn: '参加活动',
        statement: 'YeeCall التفسير النهائي للنشاط محفوظ لشركة',
        callUs: {
            callUs: 'الاتصال بنا',
            tip: '，获取你的奖品'
        },
        prize(id) {
            if (id === 1)
                return `${' ' + PRIZE[id] + ' '}الفوز ب`;
            else
                return `الفوز ب${PRIZE[id]}`;
        },
        winnerList: '获奖列表',
        dialog: {
            title: 'الاتصال بنا',
            text: ': YeeCall ID ابحثوا عن',
            id: 'WiniPhone2017',
            ok: 'نعم'
        }
    }
});