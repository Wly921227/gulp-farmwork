define(function () {
    const PRIZE = {
        1: 'iPhone 7 x1',
        2: 'Mobile Refill Card',
        3: 'Mobile Refill Card',
        4: 'Mobile Refill Card'
    };

    return {
        title: 'Invite friends to win iPhone 7',
        error: 'Network Error!',
        banner(name) {
            return `Your friend ${name} just downloaded YeeCall to win iPhone 7`;
        },
        banner2: 'Invite WhatsApp friends to join YeeCall to win iPhone 7',
        shareButton: 'Download to win',
        addText: '1 in every 5 installed will win',
        prize: {
            title: 'Prize list',
            tip: 'Mobile Refill Card',
            list: [{
                level: '1st Prize',
                name: 'iPhone 7',
                price: '6999'
            }, {
                level: '2nd Prize',
                name: 'Mobile Refill Card',
                price: '100'
            }, {
                level: '3rd Prize',
                name: 'Mobile Refill Card',
                price: '50'
            }]
        },
        statement: '*YeeCall reserve the right to explain the terms of the event.',
        statement2: '*Apple Inc. is not a participant in or sponsor of this promotion.',
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
                text: 'Win iPhone 7',
                btn: 'Invite friends to win iPhone 7',
                class: ''
            },
            open: 'Already downloaded YeeCall? Open'
        },
        share: {
            title() {
                return 'Not Spam! It is TRUE! 😎1 in 5 who installed will win🎁 Win iPhone 7 now for Free!'
            },
            desc() {
                return 'Invite WhatsApp friends to join YeeCall to win iPhone 7'
            }
        }
    }
});