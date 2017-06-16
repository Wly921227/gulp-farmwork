module.exports = {
    '^/201706lotto': {
        host: '10.18.101.77',
        port: 8906,
        // cookie: 'user=AQABACqfHHeEd7nFnLAB+UqcUPpwZjZ45th8wKAnDZ7z8gsmugamYLnL9QG+3MoAAAAADl5Z6g=',
        pathRewrite: {
            '/201706lotto': ''
        }
    },
    '^/test': {
        host: '10.18.101.186',
        port: 3000,
        // cookie: 'user=AQABACqfHHeEd7nFnLAB+UqcUPpwZjZ45th8wKAnDZ7z8gsmugamYLnL9QG+3MoAAAAADl5Z6g=',
        pathRewrite: {
            '/test': ''
        }
    }
};