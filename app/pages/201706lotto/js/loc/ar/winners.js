define(function () {
    const PRIZE = {
        1: 'iPhone7',
        2: 'كارت الشحن بمبلغ',
        3: 'كارت الشحن بمبلغ',
        4: 'كارت الشحن بمبلغ'
    };

    return {
        title: 'الفائزون في هذا الأسبوع',
        joinIn: 'الاشتراك في النشاط',
        statement: 'YeeCall التفسير النهائي للنشاط محفوظ لشركة',
        statement2: 'Apple هذا النشاط لا يتعلق بشركة',
        callUs: {
            callUs: 'الاتصال بنا',
            tip: ' للحصول على جائزتك'
        },
        prize(id) {
            if (id === 1)
                return `${' ' + PRIZE[id] + ' '}الفوز ب`;
            else
                return `الفوز ب${PRIZE[id]}`;
        },
        winnerList: 'الجوائز الأخرى',
        dialog: {
            title: 'الاتصال بنا',
            text: ': YeeCall ID ابحثوا عن',
            id: 'WiniPhone2017',
            ok: 'حسنا'
        }
    }
});