requirejs.config({
    baseUrl: './js',
    paths: {
        marquee: 'lib/jquery.liMarquee',
        temp: 'lib/jquery.tmpl',
        jquery: 'lib/jquery',
        text: 'lib/text',
        utils: 'common/utils',
        modules: 'modules',
        loc: 'loc',
        template: 'templates'
    },
    shim: {
        marquee: ['jquery'],
        temp: ['jquery']
    }
});
