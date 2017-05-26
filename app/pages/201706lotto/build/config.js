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
        modules: 'modules',
        template: 'templates'
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
                'utils'
            ]
        },
        {
            name: 'index',
            include: [
                'modules/marquee',
                'modules/rotaryTable'
            ],
            exclude: [
                'common'
            ]
        }
    ]
})