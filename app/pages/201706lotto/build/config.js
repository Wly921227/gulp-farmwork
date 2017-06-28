({
    appDir: '/Users/wangluyuan/workspace/webstormspace/gulp-farmwork/dist/201706lotto',
    baseUrl: './js',
    dir: '../../../../rjs',
    optimize: 'uglify',
    paths: {
        marquee: 'lib/jquery.marquee',
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
            name: 'index',
            include: [
                'modules/indexBanner',
                'modules/indexTickets',
                'modules/indexShare',
                'modules/indexPrizeList',
                'modules/indexWinners',
                'modules/indexTurntable',
                'modules/loading',
                'modules/dialog',
                'modules/tipArrow',
                'loc/zh/index',
                'loc/zh/loading',
                'loc/en/index',
                'loc/en/loading',
                'loc/ar/index',
                'loc/ar/loading'
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
                'loc/zh/share',
                'loc/zh/loading',
                'loc/en/share',
                'loc/en/loading',
                'loc/ar/share',
                'loc/ar/loading'
            ],
            exclude: [
                'common'
            ]
        }
    ]
})