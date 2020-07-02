"use strict";

var user = getCookie('user');
$.ajax({
  url: '../json/index.json',
  type: 'get',
  dataType: 'json',
  success: function success(json) {
    var arrbanner = json.banner.split(',');
    arrbanner.forEach(function (val, index) {
      var img = '<img src=' + val + ' > ';
      $('#img-box').append(img);
      var oli = '<li></li>';
      $('#img-box ul').append(oli);
      $('#lbt').attr('src', '../js/banner.js');
    });
    var top = "";

    for (var i = 0; i < json.goodstop.length; i++) {
      top += '<a href="./goodslist.html"><img src="' + json.goodstop[i] + '" alt=""></a>';
    }

    $('.box').append(top);

    for (var key in json) {
      if (key == 'goods') {
        for (var j = 0; j < json[key].length; j++) {
          var str = '<div class="goods1">';
          var header = '<div class="header">' + '<h5>' + json[key][j][0] + '</h5>' + '</div>' + '<div class="list">' + '<div class="commodity1"><a href="#"><img src="' + json[key][j][1].img + '" alt=""></a></div>';
          str += header;

          for (var i = 2; i < json[key][j].length; i++) {
            var com = '<div class="com">' + '<a href="#">' + '<img src="' + json[key][j][i].img + '" alt="">' + '</a>' + '<h3>' + json[key][j][i].title + '</h3>' + '<h5>' + json[key][j][i].data + '</h5>' + '<div class="price">' + '<span class="_1">' + json[key][j][i].price1 + '</span>' + '<span class="_2">' + json[key][j][i].price2 + '</span>' + '</div>' + '</div>';
            str += com;
          }

          str += '</div>' + '</div>';
          $(".goodslist").append(str);
        }
      }
    }
  }
}); // var oa = document.querySelector('.nav_wrap .main_title .l li a')
// console.log(oa)

var nav_list = document.querySelector('.main_title .nav_list'); // oa.onmouseover = function(){
//     nav_list.style.display = "flex"
// }

$('.nav_wrap .main_title .l li a').mouseover(function (e) {
  nav_list.style.display = "flex";
  $.ajax({
    url: '../json/index.json',
    type: 'get',
    dataType: 'json',
    success: function success(json) {
      var str = "";

      if (e.target.innerHTML == "手机" || e.target.innerHTML == '抖音热销' || e.target.innerHTML == '抖音文创') {
        $('.nav_list').empty();

        for (var i = 0; i < json.nav_phone.length; i++) {
          str += '<a href="#">' + '<img src="' + json.nav_phone[i].img + '" alt="">' + '<p class="p1">' + json.nav_phone[i].title + '</p>' + ' <p class="p2">' + json.nav_phone[i].price + '<span>起</span></p>' + '</a>';
        }

        $('.nav_list').append(str);
      } else if (e.target.innerHTML == "首页" || e.target.innerHTML == '扫地机器人' || e.target.innerHTML == '畅呼吸') {
        $('.nav_list').empty();

        for (var i = 0; i < json.nav_clear.length; i++) {
          str += '<a href="#">' + '<img src="' + json.nav_clear[i].img + '" alt="">' + '<p class="p1">' + json.nav_clear[i].title + '</p>' + ' <p class="p2">' + json.nav_clear[i].price + '<span>起</span></p>' + '</a>';
        }

        $('.nav_list').append(str);
      } else if (e.target.innerHTML == "手机配件" || e.target.innerHTML == '服饰箱包' || e.target.innerHTML == 'TNT显示屏') {
        $('.nav_list').empty();

        for (var i = 0; i < json.nav_pj.length; i++) {
          str += '<a href="#">' + '<img src="' + json.nav_pj[i].img + '" alt="">' + '<p class="p1">' + json.nav_pj[i].title + '</p>' + ' <p class="p2">' + json.nav_pj[i].price + '<span>起</span></p>' + '</a>';
        }

        $('.nav_list').append(str);
      }
    }
  });
});
var main_title = document.querySelector('.nav .main_title');

main_title.onmouseleave = function () {
  nav_list.style.display = "none";
};