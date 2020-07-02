"use strict";

var txt1 = document.querySelector('.bottom ul ._1 .inp input');
var txt2 = document.querySelector('.bottom ul ._2 .inp input');
var check = [];
var zcbtn = document.querySelector('.dlbtn input');

txt1.onfocus = function () {
  txt1.parentElement.style.borderColor = "blue";
};

txt1.oninput = function () {
  var reg = /^1[3456789]\d{9}$/;

  if (reg.test(txt1.value)) {
    check[0] = 1;
  } else {
    zcbtn.style.backgroundColor = "#c0d0f0";
    check[0] = 0;
  }

  if (check[0] == 1 && check[1] == 1) {
    zcbtn.style.backgroundColor = "#5e88de";
  }
};

txt2.onfocus = function () {
  txt2.parentElement.style.borderColor = "blue";
};

txt2.oninput = function () {
  var reg = /^\w{8,16}$/;
  var reg2 = /^\d{1,}$/;

  if (reg.test(txt2.value) && !reg2.test(txt2.value)) {
    check[1] = 1;
  } else {
    zcbtn.style.backgroundColor = "#c0d0f0";
    check[1] = 0;
  }

  if (check[0] == 1 && check[1] == 1) {
    zcbtn.style.backgroundColor = "#5e88de";
  }
};

txt1.onblur = function () {
  txt1.parentElement.style.borderColor = "#ccc";
};

txt2.onblur = function () {
  txt2.parentElement.style.borderColor = "#ccc";
};

zcbtn.onclick = function () {
  if (check[0] == 1 && check[1] == 1) {
    $.ajax({
      url: '../php/login.php',
      type: 'get',
      data: {
        phone: txt1.value,
        pass: txt2.value
      },
      success: function success(data) {
        var data = JSON.parse(data);

        if (data.msg == 1) {
          alert(data.data);
          txt1.value = '';
          txt2.value = '';
          window.location.href = "./list.html";
        } else if (data.msg == 0) {
          alert(data.data);
        }
      }
    });
  } else if (check[0] == 0 && check[1] == 1) {
    alert('手机号码格式不对');
  } else if (check[0] == 1 && check[1] == 0) {
    alert('密码必须由数字，字母或下划线组成，8-16位，不能位纯数字');
  } else if (check[0] == 0 && check[1] == 0) {
    alert('手机号码格式不对');
    alert('密码必须由数字，字母或下划线组成，8-16位，不能位纯数字');
  }
};