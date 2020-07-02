"use strict";

var user = getCookie('user');
var Code = getCookie('Code');
$.ajax({
  url: '../json/goods.json',
  type: 'get',
  dataType: 'json',
  success: function success(json) {
    for (var i = 0; i < json.length; i++) {
      if (Code == json[i].code) {
        var goods = "\n           <div class=\"l\">\n           <img src=\"".concat(json[i].img, "\" alt=\"\">\n       </div>\n       <div class=\"r\">\n           <h1>").concat(json[i].title, "</h1>\n           <h3>").concat(json[i].data, "</h3>\n           <p><span class=\"xj\">\uFFE5").concat(json[i].price, "</span> <span class=\"yj\">\uFFE5").concat(json[i].price2, "</span></p>\n           <span class=\"jrc\">\u52A0\u5165\u8D2D\u7269\u8F66</span>\n       </div>\n           ");
        $('.middle .xxbox').append(goods);
      }
    }
  }
});
$('.xxbox').on('click', '.r .jrc', function () {
  if (user) {
    var goods = getCookie('goods');

    if (goods) {
      var goodsArr = JSON.parse(goods);
    } else {
      var goodsArr = [];
    }

    var code = $(this).attr('code');
    var hasCode = false;
    $.each(goodsArr, function (index, item) {
      if (item.code === code) {
        item.num++;
        hasCode = true;
      }
    });

    if (!hasCode) {
      goodsArr.push({
        "code": code,
        "num": 1
      });
    }

    var strArr = JSON.stringify(goodsArr);
    setCookie({
      key: 'goods',
      val: strArr,
      day: 1
    });
  } else {
    alert('请往登录再进行购买');
  }
});