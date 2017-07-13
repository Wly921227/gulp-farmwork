define(function () {
    const PRIZE = {
        1: 'iPhone 7 x1',
        2: 'Mobile Refill Card',
        3: 'Mobile Refill Card',
        4: 'Mobile Refill Card'
    };

    return {
        title: '中奖名单',
        joinIn: 'Join to win',
        statement: 'YeeCall reserve the right to explain the terms of the event.',
        callUs: {
            callUs: 'Contact us',
            tip: ', receive your prize'
        },
        prize(id) {
            return `Win ${PRIZE[id]}`;
        },
        winnerList: 'Winners',
        dialog: {
            title: 'Contact us',
            text: 'Please add YeeCall ID: ',
            id: 'WiniPhone2017',
            ok: 'OK'
        }
    }
});