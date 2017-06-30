define(['jquery', 'urls', 'utils'], function ($, urls, utils) {
    const errorCB = (a) => {
        if (a.status !== 200) {
            alert(INDEX_LOC.error);
        }
    };

    const makeOpt = (type, data, callback, error) => {
        let opt = {
            type: type,
            data: {},
            callback (){
            }
        };

        if (data && typeof data === 'object') {
            if (type === 'GET') {
                opt.data = $.param(data);
            } else {
                opt.data = data;
            }
            opt.callback = callback;
            opt.error = error || errorCB;
        } else if (data && typeof data === 'function') {
            opt.callback = data;
            opt.error = callback || errorCB;
        }

        return opt;
    };

    return {
        get(url, data, callback, error) {
            const cbName = url.split('/').pop().toUpperCase();
            window[cbName] = function (res) {
                let result;
                if (res) {
                    try {
                        result = JSON.parse(res);
                    } catch (e) {
                        result = {};
                    }
                } else {
                    alert(INDEX_LOC.error);
                }
                callback(result);
            };
            data.jsonpcallback = cbName;
            data.activityId = urls.activityId;
            const opt = makeOpt('GET', data, callback, error);
            let base = '';
            if (utils.isAndroidLow) {
                base = urls.base2;
            } else {
                base = urls.base;
            }

            $.ajax({
                type: opt.type,
                url: `${base}${url}?${opt.data}`,
                dataType: 'jsonp',
                jsonp: cbName,
                success: opt.callback,
                error: opt.error
            });
        },
        post(url, data, callback, error) {
            const cbName = url.split('/').pop().toUpperCase();
            window[cbName] = callback;
            data.jsonpcallback = cbName;
            data.activityId = urls.activityId;
            const opt = makeOpt('POST', data, callback, error);
            $.ajax({
                type: opt.type,
                url: `${urls.base}${url}`,
                data: opt.data,
                dataType: 'jsonp',
                jsonp: cbName,
                success: opt.callback,
                error: opt.error
            });
        }
    }
});