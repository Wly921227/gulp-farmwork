const path = require('path');
const args = require('process.args')();

let page = '**';

if (args.serve && args.serve.page) {
    // 单独运行一个page
    page = args.serve.page;
}

if (args.default && args.default.page) {
    // 单独运行一个page
    page = args.default.page;
}

if (args.build && args.build.page) {
    // 单独运行一个page
    page = args.build.page;
}

const getPaths = (page) => {
    let output = '';
    if (page === '**') {
        output = path.resolve(__dirname, 'static/');
    }
    else {
        output = path.resolve(__dirname, 'static/' + page + '/');
    }
    return {
        OUTPUT_PATH: output,
        SCRIPT_PATH: path.resolve(__dirname, 'app/pages/' + page + '/js/*.js'),
        LESS_PATH: path.resolve(__dirname, 'app/pages/' + page + '/css/*.less'),
        IMAGES_PATH: path.resolve(__dirname, 'app/pages/' + page + '/images/*.*'),
        HTML_PATH: path.resolve(__dirname, 'app/pages/' + page + '/*.html')
    };
};

module.exports = getPaths(page);