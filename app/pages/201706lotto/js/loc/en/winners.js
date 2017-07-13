define(function () {
    const PRIZE = {
        1: 'iPhone 7 x1',
        2: 'Mobile Refill Card',
        3: 'Mobile Refill Card',
        4: 'Mobile Refill Card'
    };

    return {
        title: '中奖名单',
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
        },
        share: {
            title() {
                const n = parseInt(Math.random() * 1000);
                return n % 2 ? 'Join YeeCall to win iPhone7' : 'Download YeeCall to win iPhone7'
            },
            desc(){
                return 'Invite WhatsApp friends to join YeeCall to win iPhone 7'
            }
        }
    }
});