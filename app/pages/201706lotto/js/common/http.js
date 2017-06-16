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
            data.activityId = urls.activityId;
            const opt = makeOpt('GET', data, callback);
            $.ajax({
                type: opt.type,
                url: `${urls.base}${url}?${opt.data}`,
                dataType: 'json',
                success: opt.callback
            });
        },
        post(url, data, callback) {
            data.activityId = urls.activityId;
            const opt = makeOpt('POST', data, callback);
            $.ajax({
                type: opt.type,
                url: `${urls.base}${url}`,
                data: opt.data,
                dataType: 'json',
                success: opt.callback
            });
        }
    }
});