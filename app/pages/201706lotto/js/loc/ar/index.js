define(function () {
    const PRIZE = {
        1: 'iPhone7',
        2: 'كارت الشحن بمبلغ ١٠٠',
        3: 'كارت الشحن بمبلغ ٥٠',
        4: 'كارت الشحن بمبلغ ١٠'
    };

    return {
        title: 'دعوة الأصدقاء للفوز ب iPhone7',
        // banner: 'دعوة أصدقاء من WhatsApp للانضمام إلى YeeCall للفوز جائزة iPhone7',
        banner: 'للانضمام إلى WhatsApp دعوة أصدقاء من iPhone7 للفوز جائزة YeeCall',
        ticket: {
            bg: 'تذكرة',
            unSuccessTip(num) {
                return ` يمكن الاشتراك في اليانصيب بعد دعوة${' ' + num + ' '}من الأصدقاء للانضمام إلى YeeCall `;
            },
            tipTwo: 'سوف تفتح المهمة الجديدة بعد اكمال المهمة في بطاقة اليانصيب السابقة',
            tipTwo2: 'مضاعفة احتمال الفوز!',
            invited: 'قد تم دعوة ',
            unit: '',
            successTip(num, flag) {
                if (flag && num > 3) {
                    num = 3;
                }
                return `قد نجحت في دعوة  ${' ' + num + ' '}من ألأصدقاء`;
            },
            lotto: 'لليانصيب الآن',
            unWinning: {
                tip: 'لا بأس! دعوة الأصدقاء تتيح لك فرصة أخرى',
                text: 'شكرا على الاشتراك',
                share: 'دعوة الأصدقاء'
            },
            winning: {
                tip(id) {
                    return `${'!' + PRIZE[id] + ' '} مبروك! تفوز ب`
                },
                // callYC: 'سيقوم موظف YeeCall  بالاتصال بك في غضون 3 أيام عمل',
                callYC: 'بالاتصال بك YeeCall سيقوم موظفن في غضون ثلاثة أيام عمل',
                callUs: 'الاتصال بنا',
                share: 'التشارك'
            }
        },
        callUsTip: 'الاتصال بنا: YeeCall2017winiPhone (YeeCall ID)',
        shareButton: '\tWhatsApp\tدعوة أصدقاء من',
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
                if (id === 1)
                    return `${' ' + PRIZE[id]}الفوز ب `;
                else
                    return `الفوز ب${PRIZE[id]}`;
            }
        },
        prizeTip: {
            no: 'لا توقف، واصل دعوة الأصدقاء يمكنك الفوز مرة أخرى!',
            no2: 'شكرا على مشاركتك في هذا النشاط ولعلك فائز مرة تالية',
            1: `مبروك! تفوز ب${PRIZE[1]} `,
            2: `مبروك! تفوز ب${PRIZE[2]} `,
            3: `مبروك! تفوز ب${PRIZE[3]} `,
            4: `مبروك! تفوز ب${PRIZE[4]} `,
            noShare: 'دعوة أصدقاء من WhatsApp',
            share: 'تخبر أصدقائك للاشتراك',
            tips: 'بالاتصال بك في غضون YeeCall سيقوم موظفن \nYeeCall Team ثلاثة أيام عمل عن طريق',
            callUs: 'الاتصال بنا'
        },
        share: {
            title() {
                // const n = parseInt(Math.random() * 1000);
                const n = 2;
                return n % 2 ? 'الانضمام إلى YeeCall للفوز ب iPhone7' : 'تحميل YeeCall للفوز ب iPhone7'
            },
            desc: 'دعوة أكثر من الأصدقاء للانضمام إلى YeeCall للفوز ب iPhone7'
        },
        // TODO 检查分享文案
        winShare: {
            title(id) {
                // return `我在YeeCall赢了${PRIZE[id]}，还有更多奖品等着你！`
                return `فزت ب ${' ' + PRIZE[id] + ' '} في YeeCall! يوجد أكثر من الجوائز هنا!`
            },
            desc() {
                const n = parseInt(Math.random() * 1000);
                return n % 2 ? 'الانضمام إلى YeeCall للفوز ب iPhone' : 'تحميل YeeCall للفوز ب iPhone'
            }
        },
        error: 'خطأ في اتصال الشبكة'
    }
});