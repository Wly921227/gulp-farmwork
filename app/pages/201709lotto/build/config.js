({
    appDir: '/Users/wangluyuan/workspace/webstormspace/gulp-farmwork/dist/201709lotto',
    baseUrl: './js',
    dir: '../../../../rjs',
    optimize: 'uglify',
    paths: {
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
        temp: ['jquery']
    },
    modules: [
        {
            name: 'common',
            include: [
                'jquery',
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
                'modules/indexScrollBar',
                'modules/indexBanner',
                'modules/indexTickets',
                'modules/indexShare',
                'modules/indexPrizeList',
                'modules/indexWinners',
                'loc/en/index'
            ],
            exclude: [
                'common'
            ]
        }
    ]
})