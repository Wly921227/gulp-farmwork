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
            return `Your friends ${name} is playing`
        },
        banner2: 'Invite WhatsApp friends to join YeeCall to win iPhone 7',
        shareButton: 'Join to win',
        prize: {
            title: 'Prize list',
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
            tip1: {
                text: 'Download and Install the lastest version of YeeCall',
                btn: 'Download YeeCall'
            },
            tip2: {
                text: 'Enter this page to win',
                btn: 'Invite friends to win iPhone 7'
            },
            open: 'Installed YeeCall already? Open'
        }
    }
});