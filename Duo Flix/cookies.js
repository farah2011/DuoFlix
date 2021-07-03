// cookie过滤字段
const cookieFilterKeys = [ 'name', 'domain', 'value', 'path', 'secure', 'httpOnly', 'expirationDate' ];

// 利用api获取相应域名的cookies
var getDomainCookies = function(url, callback) {
    return chrome.cookies.getAll({
        url: url
    }, function(cookies) {
        let cookiesRetArr = _.map(cookies, function (cookie) {
            return _.pick(cookie, cookieFilterKeys);
        });
        callback({url: url, cookies: cookiesRetArr});
    });
};

// 从文本中加载cookies
var loadCookies = function(data) {
    _.each(data.cookies, function(cookie) {
        cookie.url = data.url;
        chrome.cookies.set(cookie);
    });
    return data.url;
};