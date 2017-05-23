requirejs.config({
    baseUrl: './',
    paths: {
        temp: 'js/lib/jquery.tmpl',
        jquery: 'js/lib/jquery',
        text: 'js/lib/text',
        utils: 'js/common/utils',
        modules: 'js/modules',
        template: 'templates'
    },
    shim: {
        'temp': ['jquery']
    }
});