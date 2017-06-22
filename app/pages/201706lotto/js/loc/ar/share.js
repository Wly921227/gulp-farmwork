define(function () {
    const PRIZE = {
        1: 'iPhone7',
        2: 'كارت الشحن بمبلغ 100',
        3: 'كارت الشحن بمبلغ 50',
        4: 'كارت الشحن بمبلغ 10'
    };

    return {
        title: 'دعوة الأصدقاء لفوز ب iPhone7',
        banner(name){
            return `يقوم صديقك ${name} بالاشتراك في`
        },
        banner2: 'دعوة أصدقاء من WhatsApp للانضمام إلى YeeCall لانتزاع جائزة iPhone7',
        shareButton: 'سأقوم بالاشتراك',
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
        join: {
            title: '‫كيف أشارك في الأنشطة ؟',
            tip1: {
                text: 'تحميل وتثبيت برنامج YeeCall النسخة الاخيرة',
                btn: 'تحميل YeeCall'
            },
            tip2: {
                text: 'تدخول الى الأنشطة في الصفحة الرئيسية للاشتراك في اليانصيب',
                btn: 'وة الأصدقاء للفوز ب iPhone 7',
                class: ''
            },
            open: 'تم تثبيته بالفعل ؟ اضغط هنا'
        }
    }
});