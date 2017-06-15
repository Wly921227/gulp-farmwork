({
    appDir: '/Users/wangluyuan/workspace/webstormspace/gulp-farmwork/dist/201706lotto',
    baseUrl: './js',
    dir: '../../../../rjs',
    optimize: 'uglify',
    paths: {
        marquee: 'lib/jquery.liMarquee',
        temp: 'lib/jquery.tmpl',
        jquery: 'lib/jquery',
        text: 'lib/text',
        utils: 'common/utils',
        http: 'common/http',
        urls: 'common/urls',
        modules: 'modules',
        templates: 'templates',
        loc: 'loc'
    },
    shim: {
        marquee: ['jquery'],
        temp: ['jquery']
    },
    modules: [
        {
            name: 'common',
            include: [
                'jquery',
                'marquee',
                'temp',
                'text',
                'utils',
                'urls',
                'http'
            ]
        },
        {
            name: 'test',
            include: [
                // 'modules/marquee',
                'modules/rotaryTable'
            ],
            exclude: [
                'common'
            ]
        },
        {
            name: 'index',
            include: [
                'modules/indexBanner',
                'modules/indexTickets',
                'modules/indexShare',
                'modules/indexPrizeList',
                'modules/indexWinners',
                'modules/indexTurntable',
                'modules/loading',
                'loc/zh_cn/index',
                'loc/zh_cn/loading'
            ],
            exclude: [
                'common'
            ]
        },
        {
            name: 'share',
            include: [
                'modules/shareBanner',
                'modules/shareJoin',
                'modules/indexShare',
                'modules/indexPrizeList',
                'modules/indexWinners',
                'modules/loading',
                'loc/zh_cn/share',
                'loc/zh_cn/loading'
            ],
            exclude: [
                'common'
            ]
        }
    ]
})