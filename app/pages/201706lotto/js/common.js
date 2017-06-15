requirejs.config({
    baseUrl: './js',
    paths: {
        marquee: 'lib/jquery.liMarquee',
        temp: 'lib/jquery.tmpl',
        jquery: 'lib/jquery',
        text: 'lib/text',
        utils: 'common/utils',
        http: 'common/http',
        urls: 'common/urls',
        modules: 'modules',
        loc: 'loc',
        templates: 'templates'
    },
    shim: {
        marquee: ['jquery'],
        temp: ['jquery']
    }
});
