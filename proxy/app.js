const {resolve} = require('path');
const Request = require('request');
const express = require('express');

const app = express();

const config = require('./config');

app.use(express.static(resolve(__dirname, '../static')));

app.use('/', function (req, res) {
    let link = req.originalUrl;
    for (let key in config) {
        const rule = new RegExp(key);
        if (rule.test(link)) {
            const opt = config[key];
            // url
            if (opt.pathRewrite) {
                for (const reg in opt.pathRewrite) {
                    link = replaceUrl(reg, link, opt.pathRewrite[reg]);
                }
            }
            let requestOpt = {
                url: `http://${opt.host}:${opt.port}${link}`,
                method: req.method,
                json: true,
                headers: {}
            };
            // cookie
            if (opt.cookie) {
                requestOpt.headers.cookie = opt.cookie;
            } else if (req.headers.cookie) {
                requestOpt.headers.cookie = req.headers.cookie;
            }
            // 参数
            if (req.method === 'POST') {
                requestOpt.body = req.params;
                requestOpt.headers['content-type'] = 'application/json; charset=UTF-8';
                console.info('POST Request: ', requestOpt);
                const request = Request(requestOpt, function (error, response) {
                    if (error) {
                        console.error('problem with request: ' + error);
                        res.json({
                            code: 404,
                            msg: error
                        });
                    }
                    console.log('STATUS: ' + response.statusCode);
                    console.log('HEADERS: ' + JSON.stringify(response.headers));
                    res.send(response.body);
                });
                request.on('error', function (e) {
                    console.error('problem with request: ' + e.message);
                });
            } else {
                console.info('GET Request: ', requestOpt);
                Request(requestOpt, function (error, response) {
                    if (error) {
                        console.error('problem with request: ' + error);
                        res.json({
                            code: 404,
                            msg: error
                        });
                    }
                    console.log('STATUS: ' + response.statusCode);
                    console.log('HEADERS: ' + JSON.stringify(response.headers));
                    res.send(response.body);
                });
            }
        }
    }
});

function replaceUrl(reg, oldVal, newVal) {
    const rule = new RegExp(reg);
    return oldVal.replace(rule, newVal);
}

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});