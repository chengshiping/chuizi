"use strict";

var txt1 = document.querySelector('.bottom ul ._1 .inp input');
var txt2 = document.querySelector('.bottom ul ._2 .inp input');
var check = [];
var zcbtn = document.querySelector('.dlbtn input');

txt1.onfocus = function () {
  txt1.parentElement.style.borderColor = "blue";
};

txt1.oninput = function () {
  if (txt1.value !== "") {
    check[0] = 1;
  } else if (txt1.value == "") {
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
  if (txt2.value !== "") {
    check[1] = 1;
  } else if (txt2.value == "") {
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
      url: '../php/dl.php',
      type: 'get',
      data: {
        phone: txt1.value,
        pass: txt2.value
      },
      success: function success(data) {
        console.log(data);
        var data = JSON.parse(data);
        setCookie({
          key: 'user',
          val: txt1.value
        });

        if (data.msg == 1) {
          alert(data.data);
          txt1.value = '';
          txt2.value = '';
          window.location.href = "./index.html";
        } else if (data.msg == 0) {
          alert(data.data);
        }
      }
    });
  } else if (check[0] == 0 && check[1] == 1) {
    alert('请输入手机号');
  } else if (check[0] == 1 && check[1] == 0) {
    alert('请输入密码');
  } else if (check[0] == 0 || check[1] == 0) {
    alert('请输入手机号和密码');
  }
};