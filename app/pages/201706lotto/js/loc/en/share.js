define(function () {
    const PRIZE = {
        1: 'iPhone 7 x1',
        2: '100 Mobile Refill Card',
        3: '50 Mobile Refill Card',
        4: '10 Mobile Refill Card'
    };

    return {
        title: 'Invite friends to win iPhone 7',
        banner(name){
            return `Your friend ${name} just downloaded YeeCall to win iPhone 7`;
        },
        banner2: 'Invite WhatsApp friends to join YeeCall to win iPhone 7',
        shareButton: ' I want to win iPhone 7 too!',
        prize: {
            title: 'Prize list',
            tip: 'Mobile Refill Card',
            list: [{
                level: '1st Prize',
                name: 'iPhone 7',
                price: '6999'
            }, {
                level: '2nd Prize',
                name: '100 Mobile Refill Card',
                price: '100'
            }, {
                level: '3rd Prize',
                name: '50 Mobile Refill Card',
                price: '50'
            }]
        },
        winnerList: {
            title: 'Winners',
            prize(id) {
                return `Win ${PRIZE[id]}`;
            }
        },
        join: {
            title: 'How to win?',
            free: 'free',
            tip1: {
                text: 'Download the latest version of YeeCall',
                btn: 'Download YeeCall'
            },
            tip2: {
                text: 'Join YeeCall to win iPhone 7',
                btn: 'Invite friends to win iPhone 7',
                class: ''
            },
            open: 'Installed YeeCall already? Open'
        }
    }
});