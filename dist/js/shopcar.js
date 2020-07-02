"use strict";

var user = getCookie('user');
var spzj = 0;
var spzs = 0;

if (!user) {
  removeCookie('goods');
} else {
  var goods = JSON.parse(getCookie('goods'));

  if (goods) {
    $('.goodsbox').css('display', 'block');
    $('.kbym').css('display', 'none');
    $.ajax({
      url: '../json/goods.json',
      type: 'get',
      dataType: 'json',
      success: function success(json) {
        var goodsDom1 = "";
        goodsDom1 += "\n                <div class=\"goodsxx\">\n                        <span class=\"_l\">\u5546\u54C1\u4FE1\u606F</span>\n                        <span class=\"_r\">\u64CD\u4F5C</span>\n                        <span class=\"_r\">\u5C0F\u8BA1</span>\n                        <span class=\"_r\">\u6570\u91CF</span>\n                        <span class=\"_r\">\u5355\u4EF7</span> \n                    </div>\n                    ";
        $('.goodsbox').before(goodsDom1);
        $.each(goods, function (index, item) {
          $.each(json, function (i, obj) {
            if (obj.code == item.code) {
              var goodsDom = "";
              goodsDom += "\n                                    <div class=\"goods\">\n                                    <div class=\"check\">\n                                        <input type=\"checkbox\">\n                                    </div>\n                                    <a href=\"#\" class=\"img\">\n                                        <img src=\"".concat(obj.img, "\" alt=\"\">\n                                    </a>\n                                    <div class=\"xq\">\n                                        <a href=\"#\">").concat(obj.title, "</a>\n                                        <p>").concat(obj.data, "</p>\n                                    </div>\n                                    <div class=\"cz\">\n                                        <span code=\"").concat(obj.code, "\">\xD7</span>\n                                    </div>\n                                    <div class=\"xj\">\n                                        <span>\uFFE5</span>").concat((obj.price * item.num).toFixed(2), "\n                                    </div>\n                                    <div class=\"sl\">\n                                        <span class=\"jian\">-</span>\n                                        <span class=\"show\">").concat(item.num, "</span>\n                                        <span class=\"jia\">+</span>\n                                    </div>\n                                    <div class=\"dj\">\n                                        <span>\uFFE5</span>").concat(obj.price, "\n                                    </div>\n                                </div>\n                            ");
              $('.goodsbox').append(goodsDom);
            }
          });
        });
        var goodsDom2 = "";
        goodsDom2 += "\n                <div class=\"plcz\">\n                <div class=\"l\">\n                    <div class=\"checkall\">\n                        <input type=\"checkbox\">\n                        <span>\u5168\u9009</span>\n                    </div>\n                    <button type=\"button\">\u5220\u9664\u6240\u6709\u9009\u4E2D\u7684\u5546\u54C1</button>\n                </div>\n                <div class=\"r\">\n                    <div class=\"sl\">\n                        \u5DF2\u9009\u62E9<span>0</span>\u4EF6\u5546\u54C1\n                    </div>\n                    <div class=\"je\">\n                        \u5E94\u4ED8\u603B\u989D\uFF1A<span><em>\uFFE5</em>0</span>\n                    </div>\n                    <a href=\"./zf.html\">\u73B0\u5728\u7ED3\u7B97</a>\n                </div>\n            </div>\n                ";
        $('.goodsbox').after(goodsDom2);
      }
    });
  } else {
    $('.kbym .dl').css('display', 'none');
  }
}

$.ajax({
  url: '../json/goods.json',
  type: 'get',
  dataType: 'json',
  success: function success(json) {
    for (var i = 0; i < 12; i++) {
      var goods = '<div class="sp">' + '<a class="img" href="#">' + '<img src="' + json[i].img + '" alt="">' + '</a>' + '<h4>' + json[i].title + '</h4>' + '<h6>' + json[i].data + '</h6>' + '<div class="jg">' + '<span class="xj"><i>￥</i>' + json[i].price + '</span>' + '<span class="yj"><i>￥</i>' + json[i].price2 + '</span>' + '</div>' + '<div class="jrgwc">' + '<a href="#">查看详情</a>' + '<span code="' + json[i].code + '">加入购物车</span>' + '</div>' + '</div>';
      $('.goodslist .list').append(goods);
    }
  }
});
$('.goodslist .list').on('click', '.sp .jrgwc span', function () {
  var hasgoods;

  if (getCookie('goods')) {
    hasgoods = true;
  } else {
    hasgoods = false;
  }

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
    var goods = JSON.parse(getCookie('goods'));

    if (!hasgoods) {
      $('.goodsbox').css('display', 'block');
      $('.kbym').css('display', 'none');
      $.ajax({
        url: '../json/goods.json',
        type: 'get',
        dataType: 'json',
        success: function success(json) {
          var goodsDom1 = "";
          goodsDom1 += "\n                <div class=\"goodsxx\">\n                        <span class=\"_l\">\u5546\u54C1\u4FE1\u606F</span>\n                        <span class=\"_r\">\u64CD\u4F5C</span>\n                        <span class=\"_r\">\u5C0F\u8BA1</span>\n                        <span class=\"_r\">\u6570\u91CF</span>\n                        <span class=\"_r\">\u5355\u4EF7</span> \n                    </div>\n                    ";
          $('.goodsbox').before(goodsDom1);
          $.each(goods, function (index, item) {
            $.each(json, function (i, obj) {
              if (obj.code == item.code) {
                var goodsDom = "";
                goodsDom += "\n                                    <div class=\"goods\">\n                                    <div class=\"check\">\n                                        <input type=\"checkbox\">\n                                    </div>\n                                    <a href=\"#\" class=\"img\">\n                                        <img src=\"".concat(obj.img, "\" alt=\"\">\n                                    </a>\n                                    <div class=\"xq\">\n                                        <a href=\"#\">").concat(obj.title, "</a>\n                                        <p>").concat(obj.data, "</p>\n                                    </div>\n                                    <div class=\"cz\">\n                                    <span code=\"").concat(obj.code, "\">\xD7</span>\n                                    </div>\n                                    <div class=\"xj\">\n                                        <span>\uFFE5</span>").concat((obj.price * item.num).toFixed(2), "\n                                    </div>\n                                    <div class=\"sl\">\n                                        <span class=\"jian\">-</span>\n                                        <span class=\"show\">").concat(item.num, "</span>\n                                        <span class=\"jia\">+</span>\n                                    </div>\n                                    <div class=\"dj\">\n                                        <span>\uFFE5</span>").concat(obj.price, "\n                                    </div>\n                                </div>\n                            ");
                $('.goodsbox').append(goodsDom);
              }
            });
          });
          var goodsDom2 = "";
          goodsDom2 += "\n                <div class=\"plcz\">\n                <div class=\"l\">\n                    <div class=\"checkall\">\n                        <input type=\"checkbox\">\n                        <span>\u5168\u9009</span>\n                    </div>\n                    <button type=\"button\">\u5220\u9664\u6240\u6709\u9009\u4E2D\u7684\u5546\u54C1</button>\n                </div>\n                <div class=\"r\">\n                    <div class=\"sl\">\n                        \u5DF2\u9009\u62E9<span>5</span>\u4EF6\u5546\u54C1\n                    </div>\n                    <div class=\"je\">\n                        \u5E94\u4ED8\u603B\u989D\uFF1A<span><em>\uFFE5</em>5</span>\n                    </div>\n                    <a href=\"./zf.html\">\u73B0\u5728\u7ED3\u7B97</a>\n                </div>\n            </div>\n                ";
          $('.goodsbox').after(goodsDom2);
        }
      });
    } else {
      $.ajax({
        url: '../json/goods.json',
        type: 'get',
        dataType: 'json',
        success: function success(json) {
          $.each(goods, function (index, item) {
            $.each(json, function (i, obj) {
              if (obj.code == item.code) {
                var goodsDom = "";
                goodsDom += "\n                                    <div class=\"goods\">\n                                    <div class=\"check\">\n                                        <input type=\"checkbox\">\n                                    </div>\n                                    <a href=\"#\" class=\"img\">\n                                        <img src=\"".concat(obj.img, "\" alt=\"\">\n                                    </a>\n                                    <div class=\"xq\">\n                                        <a href=\"#\">").concat(obj.title, "</a>\n                                        <p>").concat(obj.data, "</p>\n                                    </div>\n                                    <div class=\"cz\">\n                                    <span code=\"").concat(obj.code, "\">\xD7</span>\n                                    </div>\n                                    <div class=\"xj\">\n                                        <span>\uFFE5</span>").concat((obj.price * item.num).toFixed(2), "\n                                    </div>\n                                    <div class=\"sl\">\n                                        <span code=\"").concat(obj.code, "\" class=\"jian\">-</span>\n                                        <span class=\"show\">").concat(item.num, "</span>\n                                        <span code=\"").concat(obj.code, "\" class=\"jia\">+</span>\n                                    </div>\n                                    <div class=\"dj\">\n                                        <span>\uFFE5</span>").concat(obj.price, "\n                                    </div>\n                                </div>\n                            ");
                $('.goodsbox').append(goodsDom);
              }
            });
          });
        }
      });
    }
  } else {
    alert('请往登录再进行购买');
  }

  window.location.href = './shopcar.html';
});
$('.goodsbox').on('click', '.goods .cz span', function () {
  var goods = getCookie('goods');
  var goodsArr;
  goodsArr = JSON.parse(goods);
  $(this).parent().parent().remove();
  var code = $(this).attr('code');
  $.each(goodsArr, function (index, item) {
    if (item.code == code) {
      goodsArr.splice(index, 1);
      return false;
    }
  });

  if (goodsArr.length > 0) {
    goodsArr = JSON.stringify(goodsArr);
    setCookie({
      key: 'goods',
      val: goodsArr,
      days: 1
    });
  } else {
    removeCookie('goods');
    $('.kbym').css('display', 'block');
    $('.goodsxx').css('display', 'none');
    $('.plcz').css('display', 'none');
  }
});
$('.goodsbox').on('click', '.goods .sl .jian', function () {
  var goods = getCookie('goods');
  var goodsArr;
  goodsArr = JSON.parse(goods);
  var num = parseInt($(this).next().text());

  if (num < 1 || num == 1) {
    num = 1;
    return;
  } else {
    num -= 1;
    var code = $(this).parent().prev().prev().children().attr('code');
    $.each(goodsArr, function (index, item) {
      if (item.code == code) {
        item.num = num;
      }
    });
    $(this).next().text(num);
    var goodsData = JSON.stringify(goodsArr);
    setCookie({
      key: 'goods',
      val: goodsData,
      days: 1
    });
    var dj = null;
    var dom = $(this).parent().prev();
    var dom1 = $(this).parent().siblings().eq(0).children();
    $.ajax({
      url: '../json/goods.json',
      type: 'get',
      dataType: 'json',
      success: function success(json) {
        $.each(json, function (index, item) {
          if (item.code == code) {
            dj = item.price;
            var xj = dj * num;
            xj = xj.toFixed(2);
            dom.html('<span>￥</span>' + xj);
            dj = parseInt(dj);

            if (dom1.prop('checked')) {
              spzj = spzj - dj;
              console.log(spzj);
              spzs -= 1;
              console.log(spzs);
            }
          }
        });
      }
    });
  }
});
$('.goodsbox').on('click', '.goods .sl .jia', function () {
  var goods = getCookie('goods');
  var goodsArr;
  goodsArr = JSON.parse(goods);
  var num = parseInt($(this).prev().text());
  num++;
  num = parseInt(num);
  var code = $(this).parent().prev().prev().children().attr('code');
  $.each(goodsArr, function (index, item) {
    if (item.code == code) {
      item.num = num;
    }
  });
  $(this).prev().text(num);
  var goodsData = JSON.stringify(goodsArr);
  setCookie({
    key: 'goods',
    val: goodsData,
    days: 1
  });
  var dom = $(this).parent().prev();
  var dj = null;
  var dom1 = $(this).parent().siblings().eq(0).children();
  $.ajax({
    url: '../json/goods.json',
    type: 'get',
    dataType: 'json',
    success: function success(json) {
      $.each(json, function (index, item) {
        if (item.code == code) {
          dj = item.price;
          var xj = dj * num;
          xj = xj.toFixed(2);
          dom.html('<span>￥</span>' + xj);
          dj = parseInt(dj);

          if (dom1.prop('checked')) {
            spzj = spzj + dj;
            console.log(spzj);
            spzs += 1;
            console.log(spzs);
          }
        }
      });
    }
  });
});
$('.middle').on('click', '.plcz .checkall input', function () {
  var check = $(this).parent().parent().parent().prev().find('.goods .check input');

  if ($(this).prop('checked')) {
    check.prop('checked', true);
  } else {
    check.prop('checked', false);
  }
});
$('.middle').on('click', '.goods .check input', function () {
  var selectArr = [];
  $('.middle .goods .check input').each(function (index, item) {
    if ($(item).prop('checked')) {
      selectArr.push('a');
    } else {
      selectArr.push('b');
    }
  });

  if (selectArr.indexOf('b') == -1) {
    $('.middle .plcz .checkall input').prop('checked', true);
  } else {
    $('.middle .plcz .checkall input').prop('checked', false);
  }
});