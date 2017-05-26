({
    appDir: '/Users/wangluyuan/workspace/webstormspace/gulp-farmwork/dist/201706lotto',
    baseUrl: './',
    dir: '../../../../rjs',
    optimize: 'uglify',
    paths: {
        marquee: 'js/lib/jquery.liMarquee',
        temp: 'js/lib/jquery.tmpl',
        jquery: 'js/lib/jquery',
        text: 'js/lib/text',
        utils: 'js/common/utils',
        modules: 'js/modules',
        template: 'templates'
    },
    shim: {
        marquee: ['jquery'],
        temp: ['jquery']
    },
    modules: [
        {
            name: 'js/common',
            include: [
                'jquery',
                'marquee',
                'temp',
                'text',
                'utils'
            ]
        },
        {
            name: 'js/index',
            include: [
                'js/modules/marquee',
                'js/modules/rotaryTable.js'
            ],
            exclude: [
                'js/common'
            ]
        }
    ]
})