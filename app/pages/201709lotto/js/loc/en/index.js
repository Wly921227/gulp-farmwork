define(function () {
    return {
        title: 'Invite friends to win $50',
        description: 'Chance to win $50 gift card every week',
        shareButton: 'Invite to win $50',
        downloadButton: 'Download to win gift card',
        ticket: {
            tip: [
                'Invite 2 friends to download YeeCall',
                'Chance to win $50 gift card every week'
            ],
            friends: 'FRIENDS'
        },
        prize: {
            title: 'Prize',
            name: '$50 GIFT CARD'
        },
        winners: {
            title: 'Winners',
            desc: 'Winner list releases on every Friday',
            msg: ' win $50 gift card',
            statement: '*YeeCall reserves the right to explain the terms of the event.',
            statement2: '*Apple Inc. is not a participant in or sponsor of this promotion.'
        },
        share: {
            title() {
                return '👫Hi, I send you a link to win $50. 💝Why not take 15s to download and get $50⏳'
            },
            desc() {
                return '💝Why not take 15s to download and get $50⏳'
            }
        },
        error: 'Network Error!'
    }
});