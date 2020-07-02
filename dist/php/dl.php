<?php
$phone = $_GET['phone'];
$pass = $_GET['pass'];
$link = mysqli_connect('localhost','root','root','xm2020');
if(!$link){
    die('链接失败：'.mysqli_connect_error());
}
$sql = "select phone from user where phone = '$phone' && pass = '$pass'";
$res = mysqli_query($link,$sql);
$totle = mysqli_num_rows($res);
if($totle > 0){

    die('{"msg":1,"data":"登录成功"}');
}else{
    die('{"msg":0,"data":"用户名或密码错误"}');
}

mysqli_close($link);
?>