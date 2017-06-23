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
                text: 'Thank you!',
                share: '邀朋友参加'
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
        callUsTip: '如需联系我们，请搜索YeeCall ID：YeeCall2017winiPhone',
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
            no2: 'Thanks for joining us! See you soon and we hope you win bigger next time!',
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
            title() {
                const n = parseInt(Math.random() * 1000);
                return n % 2 ? 'Join YeeCall to win iPhone7' : 'Download YeeCall to win iPhone7'
            },
            desc: 'Invite WhatsApp friends to join YeeCall to win iPhone 7'
        },
        winShare: {
            title(id) {
                return `我在YeeCall赢了${PRIZE[id]}，还有更多奖品等着你！`
            },
            desc() {
                const n = parseInt(Math.random() * 1000);
                return n % 2 ? '加入YeeCall赢取iPhone' : '下载YeeCall赢取iPhone'
            }
        },
        error: 'Network Error!'
    }
});