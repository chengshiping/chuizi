// 设置cookie
function setCookie(options){
    if (!options.key || !options.val){
        throw new Error('设置失败，key和val是必填参数！');
    }
    options.domain = options.domain || '';
    options.path = options.path || '';
    options.days = options.days || 0;

    if (options.days !== 0) {
        var d = new Date();
        d.setDate(d.getDate()+options.days);
        document.cookie = options.key+'='+escape(options.val)+'; domain='+options.domain+'; path='+options.path+'; expires='+d;
    } else {
        document.cookie = options.key+'='+escape(options.val)+'; domain='+options.domain+'; path='+options.path;
    }
}

// 获取cookie
function getCookie(key){
    var arr1 = document.cookie.split('; ');//所有cookie分割出来的数组
    var arr2 = [];//每一个cookie分割出来的key和value
    for (var i = 0, len = arr1.length; i < len; i++){
        arr2 = arr1[i].split('=');
        if (arr2[0] === key) {
            return unescape(arr2[1]);
        }
    }
    return null;
}

// 删除cookie
function removeCookie(key){
    setCookie({
        key: key,
        val: '1234',
        days: -2
    });
}