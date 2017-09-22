requirejs.config({
    baseUrl: './js',
    urlArgs: new Date().getTime() + '',
    paths: {
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
        temp: ['jquery']
    }
});
