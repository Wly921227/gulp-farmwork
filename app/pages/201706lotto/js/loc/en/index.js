define(function () {
    const PRIZE = {
        1: 'iPhone 7 x1',
        2: '100 Mobile Refill Card',
        3: '50 Mobile Refill Card',
        4: '10 Mobile Refill Card'
    };

    return {
        title: 'Invite friends to win iPhone 7',
        banner: 'Invite WhatsApp friends to join YeeCall\nto win iPhone 7',
        ticket: {
            bg: 'Ticket',
            unSuccessTip(num) {
                return `Invite ${num} friends to join YeeCall to win`;
            },
            unSuccessTip2(num) {
                return `Invite ${num} friends to join YeeCall to win`;
            },
            tipTwo: 'Unlock 2nd ticket after using 1st ticket',
            tipTwo2: 'Triple your chance to win!',
            invited: 'Invited',
            unit: 'friends',
            successTip(num, flag) {
                if (flag && num > 3) {
                    num = 3;
                }
                return `You already invited ${num} friends joining YeeCall successfully`;
            },
            lotto: 'Play Now',
            unWinning: {
                tip: 'Sorry, you didn\'t win this time.',
                text: 'Thank you!'
            },
            winning: {
                tip(id) {
                    return `Congratulations! You win ${PRIZE[id]}!`
                },
                callYC: 'YeeCall team will contact you in 3 business days.',
                callUs: 'Contact us',
                share: 'Share to friends'
            }
        },
        shareButton: 'Invite WhatsApp friends',
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
        prizeTip: {
            no: 'Invite friends to try again!',
            no2: '谢谢参与本次活动，期待你下次赢取大奖',
            1: `Congratulations! You win ${PRIZE[1]}!`,
            2: `Congratulations! You win ${PRIZE[2]}!`,
            3: `Congratulations! You win ${PRIZE[3]}!`,
            4: `Congratulations! You win ${PRIZE[4]}!`,
            noShare: 'Invite WhatsApp friends',
            share: 'Invite friends to play',
            tips: 'YeeCall team will contact you in 3 business days via YeeCall.',
            callUs: 'Contact us'
        },
        share: {
            title: 'Invite friends to win iPhone 7',
            desc: 'Invite WhatsApp friends to join YeeCall to win iPhone 7'
        },
        error: 'Network Error!'
    }
});