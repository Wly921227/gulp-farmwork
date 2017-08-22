define(function () {
    const PRIZE = {
        1: 'iPhone 7 x1',
        2: 'Mobile Refill Card',
        3: 'Mobile Refill Card',
        4: 'Mobile Refill Card'
    };

    return {
        title: 'Invite friends to win iPhone 7',
        banner: 'Invite WhatsApp friends to join YeeCall\nto win iPhone 7',
        ticket: {
            bg: 'Ticket',
            unSuccessTip(num) {
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
                tip: 'No worries! Invite friends to play again!',
                tip2: 'Thanks for joining us! See you soon and we hope you win bigger next time!',
                text: 'Thank you!',
                share: 'Invite friends'
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
        statement: '*YeeCall reserves the right to explain the terms of the event.',
        statement2: '*Apple Inc. is not a participant in or sponsor of this promotion.',
        winnerList: {
            title: 'Winners',
            prize(id) {
                return `Win ${PRIZE[id]}`;
            }
        },
        prizeTip: {
            no: 'Invite friends to try again!',
            no2: 'Thanks for joining us! See you soon and we hope you win bigger next time!',
            1: `Congrats! You win ${PRIZE[1]}!`,
            2: `Congrats! You win ${PRIZE[2]}!`,
            3: `Congrats! You win ${PRIZE[3]}!`,
            4: `Congrats! You win ${PRIZE[4]}!`,
            noShare: 'Invite WhatsApp friends',
            share: 'Invite friends to play',
            tips: 'YeeCall team will contact you in 3 business days via YeeCall.',
            callUs: 'Contact us'
        },
        share: {
            title() {
                return 'Hey, it’s real! My friends already get their prizes🎁 Tap to win iPhone📱'
            },
            desc() {
                return 'Invite WhatsApp friends to join YeeCall to win iPhone 7'
            }
        },
        winShare: {
            title(id) {
                return `I won ${PRIZE[id]}! Download YeeCall now to win together!`
            },
            desc() {
                return 'Download YeeCall to win iPhone 7'
            }
        },
        error: 'Network Error!',
        dialog: {
            title: 'Contact us',
            text: 'Please add YeeCall ID: ',
            id: 'WiniPhone2017',
            ok: 'OK'
        }
    }
});