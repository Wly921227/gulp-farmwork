define(function () {
    const PRIZE = {
        1: 'iPhone7',
        2: 'كارت الشحن بمبلغ 100',
        3: 'كارت الشحن بمبلغ 50',
        4: 'كارت الشحن بمبلغ 10'
    };

    return {
        title: 'دعوة الأصدقاء لفوز ب iPhone7',
        banner: 'دعوة أصدقاء من WhatsApp للانضمام إلى YeeCall \n لانتزاع جائزة iPhone7',
        ticket: {
            bg: 'بطاقة اليانصيب',
            unSuccessTip(num) {
                return `يمكن الاشتراك في اليانصيب بعد دعوة ${num} من الأصدقاء للانضمام إلى YeeCall`;
            },
            unSuccessTip2(num) {
                return `يمكن الاشتراك في اليانصيب بعد دعوة ${num} من الأصدقاء للانضمام إلى YeeCall`;
            },
            tipTwo: 'سوف تفتح المهمة الجديدة بعد اكمال المهمة في بطاقة اليانصيب السابقة',
            tipTwo2: 'مضاعفة احتمال الفوز!',
            invited: 'قد تم دعوة ',
            unit: 'من ألأصدقاء',
            successTip(num, flag) {
                if (flag && num > 3) {
                    num = 3;
                }
                return `قد نجحت في دعوة  ${num}من ألأصدقاء`;
            },
            lotto: 'لليانصيب الآن',
            unWinning: {
                tip: 'من المؤسف انك لم تربح هذه المرة!',
                text: 'شكرا على الاشتراك'
            },
            winning: {
                tip(id) {
                    return `مبروك! تفوز ب${PRIZE[id]} !`
                },
                callYC: 'سيقوم موظف YeeCall  بالاتصال بك في غضون 3 أيام عمل',
                callUs: 'اتصل بنا',
                share: 'التشارك الى الأصدقاء'
            }
        },
        shareButton: 'دعوة أصدقاء من WhatsApp',
        prize: {
            title: 'قائمة الجوائز',
            list: [{
                level: 'الجائزة الأولى',
                name: 'iPhone 7',
                price: '6999'
            }, {
                level: 'الجائزة الثانية',
                name: 'كارت الشحن بمبلغ 100',
                price: '100'
            }, {
                level: 'الجائزة الثالثة',
                name: 'كارت الشحن بمبلغ 50',
                price: '50'
            }]
        },
        winnerList: {
            title: 'المستخدمون الفائزون',
            prize(id) {
                return `الفوز ب${PRIZE[id]}`;
            }
        },
        prizeTip: {
            no: 'لا توقف، واصل دعوة الأصدقاء يمكنك الفوز مرة أخرى!',
            no2: 'شكرا على مشاركتك في هذا النشاط ولعلك فائز مرة تالية.',
            1: `مبروك! تفوز ب${PRIZE[1]} !`,
            2: `مبروك! تفوز ب${PRIZE[2]} !`,
            3: `مبروك! تفوز ب${PRIZE[3]} !`,
            4: `مبروك! تفوز ب${PRIZE[4]} !`,
            noShare: 'دعوة أصدقاء من WhatsApp',
            share: 'تخبر أصدقائك للاشتراك',
            tips: 'سيقوم موظف YeeCall  بالاتصال بك في غضون 3 أيام عمل عن طريق YeeCall Team',
            callUs: 'اتصل بنا'
        },
        share: {
            title: 'دعوة الأصدقاء لفوز ب iPhone7',
            desc: 'دعوة أصدقاء من WhatsApp للانضمام إلى YeeCall لانتزاع جائزة iPhone7'
        },
        error: 'خطأ في اتصال الشبكة'
    }
});