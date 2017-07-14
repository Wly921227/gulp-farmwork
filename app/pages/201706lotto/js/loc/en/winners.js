define(function () {
    const PRIZE = {
        1: 'iPhone 7 x1',
        2: 'Mobile Refill Card',
        3: 'Mobile Refill Card',
        4: 'Mobile Refill Card'
    };

    return {
        title: 'Winner List of This Week',
        joinIn: 'Join to win',
        statement: '*YeeCall reserve the right to explain the terms of the event.',
        callUs: {
            callUs: 'Contact us',
            tip: ', Get your prize'
        },
        prize(id) {
            return `Win ${PRIZE[id]}`;
        },
        winnerList: 'Other winners',
        dialog: {
            title: 'Contact us',
            text: 'Please add YeeCall ID: ',
            id: 'WiniPhone2017',
            ok: 'OK'
        }
    }
});