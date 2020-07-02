<?php
$phone = $_GET['phone'];
$pass = $_GET['pass'];
$link = mysqli_connect('localhost','root','root','xm2020');
if(!$link){
    die('链接失败：'.mysqli_connect_error());
}
$sql = "select phone from user where phone = '$phone'";
$res = mysqli_query($link,$sql);
$totle = mysqli_num_rows($res);
if($totle > 0){

    die('{"msg":0,"data":"该手机号已经被注册了"}');
}

$sql2 = "insert into user(phone,pass) values ('$phone','$pass')";
$all_res = mysqli_query($link,$sql2);

echo '{"msg":1,"data":"注册成功"}';
mysqli_close($link);
?>