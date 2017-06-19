define(['jquery', 'urls'], function ($, urls) {
    const makeOpt = (type, data, callback) => {
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
        } else if (data && typeof data === 'function') {
            opt.callback = data;
        }

        return opt;
    };

    return {
        get(url, data, callback) {
            const cbName = url.split('/').pop().toUpperCase();
            window[cbName] = function (res) {
                let result;
                if (res) {
                    result = JSON.parse(res);
                }
                callback(result);
            };
            data.jsonpcallback = cbName;
            data.activityId = urls.activityId;
            const opt = makeOpt('GET', data, callback);

            $.ajax({
                type: opt.type,
                url: `${urls.base}${url}?${opt.data}`,
                dataType: 'jsonp',
                jsonp: cbName,
                success: opt.callback
            });
        },
        post(url, data, callback) {
            const cbName = url.split('/').pop().toUpperCase();
            window[cbName] = callback;
            data.jsonpcallback = cbName;
            data.activityId = urls.activityId;
            const opt = makeOpt('POST', data, callback);
            $.ajax({
                type: opt.type,
                url: `${urls.base}${url}`,
                data: opt.data,
                dataType: 'jsonp',
                jsonp: cbName,
                success: opt.callback
            });
        }
    }
});