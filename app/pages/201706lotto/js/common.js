requirejs.config({
    baseUrl: './',
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
    }
});
