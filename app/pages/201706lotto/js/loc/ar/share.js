define(function () {
    const PRIZE = {
        1: 'iPhone7',
        2: 'كارت الشحن بمبلغ ١٠٠',
        3: 'كارت الشحن بمبلغ ٥٠',
        4: 'كارت الشحن بمبلغ ١٠'
    };

    return {
        title: 'دعوة الأصدقاء لفوز ب iPhone7',
        banner(name){
            return `${(name ? name : ' ' + name + ' ') + ' صديقك '}\nيقوم بالاشتراك في أنشطة ”دعوة\n الآن “iPhone7 الأصدقاء للفوز ب`;
        },
        banner2: ' WhatsApp دعوة أصدقاء من \nللفوز بجائزة YeeCall للانضمام إلى iPhone7',
        // shareButton: '我也要赢iPhone7',
        shareButton: 'أيضا iPhone 7 أريد الفوز ب',
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
        join: {
            title: '‫كيف أشارك في الأنشطة ؟',
            free: 'مجانا',
            tip1: {
                text: 'النسخة الاخيرة YeeCall تحميل برنامج',
                btn: ' YeeCall تحميل '
            },
            tip2: {
                text: 'للاشتراك في اليانصيب YeeCall دخول الى',
                btn: ' iPhone 7 دعوة الأصدقاء للفوز ب ',
                class: ''
            },
            open: 'تم تثبيته بالفعل ؟ اضغط هنا'
        }
    }
});