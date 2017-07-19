define(function () {
    const PRIZE = {
        1: 'iPhone7',
        2: 'كارت الشحن بمبلغ',
        3: 'كارت الشحن بمبلغ',
        4: 'كارت الشحن بمبلغ'
    };

    return {
        title: 'دعوة الأصدقاء للفوز ب iPhone7',
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
                tip2: 'شكرا على مشاركتك في هذا النشاط ولعلك فائز مرة تالية',
                text: 'شكرا على الاشتراك',
                share: 'دعوة الأصدقاء'
            },
            winning: {
                tip(id) {
                    if (id === 1)
                        return `${'!' + PRIZE[1] + ' '} مبروك! تفوز ب`;
                    else
                        return `${'!' + ' تفوز ب' + PRIZE[id]}`;
                },
                callYC: 'بالاتصال بك YeeCall سيقوم موظفن في غضون ثلاثة أيام عمل',
                callUs: 'الاتصال بنا',
                share: 'التشارك'
            }
        },
        shareButton: '\tWhatsApp\tدعوة أصدقاء من',
        prize: {
            title: 'قائمة الجوائز',
            tip: 'كارت الشحن بمبلغ',
            list: [{
                level: 'الجائزة الأولى',
                name: 'iPhone 7',
                price: '6999'
            }, {
                level: 'الجائزة الثانية',
                name: 'كارت الشحن بمبلغ',
                price: '100'
            }, {
                level: 'الجائزة الثالثة',
                name: 'كارت الشحن بمبلغ',
                price: '50'
            }]
        },
        statement: 'YeeCall التفسير النهائي للنشاط محفوظ لشركة',
        winnerList: {
            title: 'المستخدمون الفائزون',
            prize(id) {
                if (id === 1)
                    return `${' ' + PRIZE[id] + ' '}الفوز ب`;
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
                return 'الضغط للفوز ب iPhone7'
            },
            desc() {
                return 'دعوة أكثر من الأصدقاء للانضمام إلى YeeCall للفوز ب iPhone7'
            }
        },
        winShare: {
            title(id) {
                return `فزت ب${' ' + PRIZE[id] + ' '} في YeeCall! يوجد أكثر من الجوائز هنا!`
            },
            desc() {
                return 'تحميل YeeCall للفوز ب iPhone'
            }
        },
        error: 'خطأ في اتصال الشبكة',
        dialog: {
            title: 'الاتصال بنا',
            text: ': YeeCall ID ابحثوا عن',
            id: 'WiniPhone2017',
            ok: 'نعم'
        }
    }
});