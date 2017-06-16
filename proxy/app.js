const {resolve} = require('path');
const Request = require('request');
const express = require('express');

const app = express();

const config = require('./config');

app.use(express.static(resolve(__dirname, '../static')));

app.use('/', function (req, res, next) {
    let link = req.originalUrl;
    if (link.indexOf('cordova_plugins') !== -1) {
        var err = new Error('Not Found');
        err.status = 404;
        res.status = 404;
        res.json({
            err: err
        });
    } else {
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
                    console.log('---> header: ', req.headers);
                    requestOpt.headers.cookie = req.headers.cookie;
                }
                // 参数
                if (req.method === 'POST') {
                    requestOpt.body = req.params;
                    requestOpt.headers['content-type'] = 'application/json; charset=UTF-8';
                    console.info('---> POST Request: ', requestOpt);
                    const request = Request(requestOpt, function (error, response) {
                        if (error) {
                            console.error('problem with request: ' + error);
                            res.send({
                                code: 404,
                                msg: error
                            });
                        }
                        if (response) {
                            console.log('---> CODE: ' + JSON.stringify(response.statusCode));
                            console.log('---> BODY: ' + JSON.stringify(response.body));
                            res.send(response.body);
                        } else {
                            res.send({
                                err: 404
                            });
                        }
                    });
                } else {
                    console.info('---> GET Request: ', requestOpt);
                    Request(requestOpt, function (error, response) {
                        if (error) {
                            console.error('problem with request: ' + error);
                            res.send({
                                code: 404,
                                msg: error
                            });
                        }
                        if (response) {
                            console.log('---> CODE: ' + JSON.stringify(response.statusCode));
                            console.log('---> BODY: ' + JSON.stringify(response.body));
                            res.send(response.body);
                        } else {
                            res.send({
                                err: 404
                            });
                        }
                    });
                }
            }
        }
    }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    // res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.locals.error = {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

function replaceUrl(reg, oldVal, newVal) {
    const rule = new RegExp(reg);
    return oldVal.replace(rule, newVal);
}

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});